import { BsPencilSquare } from "react-icons/bs";
import { DummyType} from "../types/types";
import { useState } from "react";



const Todo = ({title,note}:{DummyType}) => {

  const [checked,setChecked]=useState<boolean>(false);

let lineThrough:string = ''
  if(checked === true){
lineThrough = 'line-through'
  }


  // const doneHabdler =  ()= >{}


  return (
    <div className="w-9/12 h-32 flex justify-between  mt-10 border rounded-2xl">
        <div className="m-3">

        <h1 className={`text-xl ${lineThrough}`}>{title}</h1>
        <h2 className= {`${lineThrough}`}>{note}</h2>
        </div>
        <div className=" m-2 p-2 flex flex-col justify-between items-center w-24">
          
            <div className="w-8 h-8 flex justify-center items-center rounded-full border  ">

            <button className="">x</button>
            </div>
        
            <input type="checkbox" onChange={(e)=>{setChecked(e.target.checked);console.log(e.target.checked)}} />
            <BsPencilSquare/>

        </div>
    </div>
  )
}

export default Todo