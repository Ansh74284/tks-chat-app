import React from 'react'

function Message() {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img alt='Tailwind css chat bubble component'
                src={
                    'https://cdn2.iconfinder.com/data/icons/user-interface-line-38/24/Untitled-5-19-128.png'
                }
                />
            </div>
        </div>
        <div className={'chat-bubble text-white bg-purple-500'}>Hi! What is upp?</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:42</div>
    </div>
  )
}

export default Message

//STARTER CODE FOR THIS FILE
// import React from 'react'

// function Message() {
//   return (
//     <div className='chat chat-end'>
//         <div className='chat-image avatar'>
//             <div className='w-10 rounded-full'>
//                 <img alt='Tailwind css chat bubble component'
//                 src={
//                     'https://cdn2.iconfinder.com/data/icons/user-interface-line-38/24/Untitled-5-19-128.png'
//                 }
//                 />
//             </div>
//         </div>
//         <div className={'chat-bubble text-white bg-purple-500'}>Hi! What is upp?</div>
//         <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:42</div>
//     </div>
//   )
// }

// export default Message