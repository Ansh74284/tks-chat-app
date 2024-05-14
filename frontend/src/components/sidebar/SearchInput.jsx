import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type='text' placeholder='Search...' className='input input-bordered rounded-full' />
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