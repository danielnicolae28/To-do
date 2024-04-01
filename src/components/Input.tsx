import React from 'react'

const Input = () => {
  return (
    <div className='w-9/12 h-72 bg-white flex flex-col justify-center items-center relative border rounded-3xl'>

    <div className='flex flex-col w-11/12 h-60 bg-white  '>
        <input type="text" placeholder='Title' className='font-medium text-2xl border-b outline-none h-14'/>
        <textarea placeholder='Note' className='resize-none h-32 w-full border-none outline-none  ' />
    </div>
    <div  className='absolute right-10 bottom-7'>
         <button className=' p-2 m-2 border rounded-md cursor-pointer'>Check List</button>
         <button className='p-2 m-2  border rounded-md cursor-pointer '>Add</button>
    </div>
    </div>
  )
}

export default Input