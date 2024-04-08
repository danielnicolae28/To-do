
import { DummyType} from "../types/types";
import { useState } from "react";




const Todo = ({title,note,id,deleteHandler}:{DummyType;deleteHandler:(id:number)=>void}) => {

  const [checked,setChecked]=useState<boolean>(false);
  


let lineThrough:string = ''
  if(checked === true){
lineThrough = 'line-through'
  }


  // const doneHabdler =  ()= >{}


  return (
    <>


    <div className="w-9/12 h-32 md:w-6/12 md:h-48 flex  justify-between  mt-10 border rounded-2xl bg-white">
        <div className="mx-8 my-4">

   <h1 className={`text-2xl md:text-4xl md:m-4 ${lineThrough}`}>{title}</h1> 
        <h2 className= {`md:m-4 md:text-2xl ${lineThrough}`}>{note}</h2>
        </div>
        <div className=" m-2 p-2 md:m-4 flex flex-col justify-between items-center w-24 relative">
         
            <div className="w-8 h-8 md:w-12 md:h-12 flex justify-center items-center rounded-full border border-neutral-950  cursor-pointer"onClick={()=>{console.log(id);deleteHandler(id)}}>

            <button className="text-xl font-semibold" >x</button>
            </div>
        
            <input type="checkbox" className="text-gray-700" onChange={(e)=>{setChecked(e.target.checked);console.log(e.target.checked)}} />
  
        </div>
    </div>
        
  
    </>
  )
}

export default Todo