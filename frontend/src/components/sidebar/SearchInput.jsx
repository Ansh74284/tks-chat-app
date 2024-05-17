import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations'
import toast from 'react-hot-toast';
const SearchInput = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length < 3) {
      toast.error('Search term must be at least 3 characters long')
    }

    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLocaleLowerCase()))

    if(conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No such user found");
  }
  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
        <input type='text' placeholder='Search...' className='input input-bordered rounded-full' 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        <button className='btn btn-primary rounded-full'>
          <IoSearchSharp className='text-xl' />
        </button>
    </form>
  )
}

export default SearchInput;

//STARTER CODE FOR THIS 
// import React from 'react'
// import { IoSearchSharp } from "react-icons/io5";
// const SearchInput = () => {
//   return (
//     <form className='flex items-center gap-2'>
//         <input type='text' placeholder='Search...' className='input input-bordered rounded-full' />
//         <button className='btn btn-primary rounded-full'>
//           <IoSearchSharp className='text-xl' />
//         </button>
//     </form>
//   )
// }

// export default SearchInput