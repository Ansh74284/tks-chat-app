import React from 'react'

function Login() {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>Login
        <span className='text-purple-600'> TKSChat</span>
        </h1>

        <form>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Usename</span>
            </label>
            <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
          </div>

          <div>
            <label className='label'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input type='password' placeholder='Enter password' className='w-full input input-bordered h-10' />
          </div>
          <a href='#' className='text-sm hover:underline hover:text-purple-400 mt-2 inline-block'>
            {"Don't"} have an account?
          </a>

          <div>
            <button className='btn btn-primary w-full mt-4'>Login</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Login


//STARTER CODE FOR LOGIN COMPONENT
// import React from 'react'

// function Login() {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//         <h1 className='text-3xl font-semibold text-center text-gray-300'>Login
//         <span className='text-purple-600'> TKSChat</span>
//         </h1>

//         <form>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>Usename</span>
//             </label>
//             <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
//           </div>

//           <div>
//             <label className='label'>
//               <span className='text-base label-text'>Password</span>
//             </label>
//             <input type='password' placeholder='Enter password' className='w-full input input-bordered h-10' />
//           </div>
//           <a href='#' className='text-sm hover:underline hover:text-purple-400 mt-2 inline-block'>
//             {"Don't"} have an account?
//           </a>

//           <div>
//             <button className='btn btn-primary w-full mt-4'>Login</button>
//           </div>
//         </form>
//       </div>

//     </div>
//   )
// }

// export default Login