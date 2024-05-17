import React, { useEffect } from 'react'
import Messages from './Messages'
import Messageinput from './Messageinput'
import { LuMessagesSquare } from "react-icons/lu";
import useConversation from '../../../zustand/useConversation';
import { useAuthContext } from '../../../context/AuthContext';


function MessageContainer() {
  const {selectedConversation, setSelectedConversation} = useConversation()

  useEffect(()=>{
    //cleanup function (unmounts)
    return () => setSelectedConversation(null);
  },[setSelectedConversation])
  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {!selectedConversation ? (
        <NoChatSelected/> // Render the NoChatSelected component
      ) : (
        <>
        {/* Header */}
        <div className='bg-slate-500 px-4 py-2 mb-2'>
            <span className='label-text'>To:</span>{" "}
            <span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
        </div>
        <Messages/>
        <Messageinput/>
        </>
      )}
    </div>
  );
};
export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext(); 
  return (
    <div className='flex  items-center justify-center h-full w-full '>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
        <p>Welcome 👋 {authUser.fullName} ❄️</p>
        <p>Select a chat to start messaging</p>
        <LuMessagesSquare className='text-3xl md:text-6xl text-center'/>
      </div>
    </div>
  );
};




//STARTER CODE FOR THIS FILE
// import React from 'react'
// import Messages from './Messages'
// import Messageinput from './Messageinput'

// function MessageContainer() {
//   return (
//     <div className='md:min-w-[450px] flex flex-col'>
//         <>
//         {/* Header */}
//         <div className='bg-slate-500 px-4 py-2 mb-2'>
//             <span className='label-text'>To:</span>{" "}
//             <span className='text-gray-900 font-bold'>John Marston</span>
//         </div>

//         <Messages/>
//         <Messageinput/>
//         </>
//     </div>
//   )
// }

// export default MessageContainer