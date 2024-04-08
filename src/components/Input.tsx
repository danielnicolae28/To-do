import React from 'react'






const Input = ({setTitle,setNote,dummyDataHandler,title,note}:{setTitle:(value:string)=>void; setNote:(value:string)=>void; dummyDataHandler:()=>void; title:string,note:string}) => {



  return (
    <div className='w-9/12 h-72 md:w-6/12 bg-white flex flex-col justify-center items-center relative border rounded-3xl my-8'>

    <div className='flex flex-col w-11/12 h-60 bg-white  '>
        <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder='Title' className='font-medium text-2xl md:text-4xl border-b outline-none h-14'/>
        <textarea placeholder='Note'  value={note} onChange={(e)=>{setNote(e.target.value)}} className='resize-none h-32 w-full border-none outline-none md:text-2xl  ' />
    </div>
    <div  className='absolute right-10 bottom-7'>
         
         <button onClick={()=>{dummyDataHandler(); }} className='p-2 m-2 md:px-4  border rounded-md cursor-pointer md:text-2xl' >Add</button>
    </div>
    </div>
  )
}

export default Input