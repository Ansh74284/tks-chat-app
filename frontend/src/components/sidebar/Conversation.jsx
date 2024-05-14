import React from 'react'

const Conversation = () => {
  return <>
  <div className='flex gap-2 items-center hover:bg-purple-400 rounded p-2 py-1 cursor-pointer'>
    <div className='avatar online'>
        <div className='w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
            <img src='https://cdn2.iconfinder.com/data/icons/user-interface-line-38/24/Untitled-5-19-128.png' alt='use avatar'/>
        </div>
    </div>

    <div className='flex flex-col flex-1'>
        <div className='flex gap-3 justify-between'>
            <p className='font-bold text-gray-200'>John Marston</p>
            <span className='text-xl'>🤠</span>
        </div>
    </div>
  </div>
  <div className='divider my-0 py-0 h-1'/>
  </>
}

export default Conversation


//STARTER CODE FOR THIS 
// import React from 'react'

// const Conversation = () => {
//   return <>
//   <div className='flex gap-2 items-center hover:bg-purple-400 rounded p-2 py-1 cursor-pointer'>
//     <div className='avatar online'>
//         <div className='w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
//             <img src='https://cdn2.iconfinder.com/data/icons/user-interface-line-38/24/Untitled-5-19-128.png' alt='use avatar'/>
//         </div>
//     </div>

//     <div className='flex flex-col flex-1'>
//         <div className='flex gap-3 justify-between'>
//             <p className='font-bold text-gray-200'>John Marston</p>
//             <span className='text-xl'>🤠</span>
//         </div>
//     </div>
//   </div>
//   <div className='divider my-0 py-0 h-1'/>
//   </>
// }

// export default Conversation