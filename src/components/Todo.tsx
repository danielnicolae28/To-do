import { BsPencilSquare } from "react-icons/bs";

const Todo = () => {
  return (
    <div className="w-9/12 h-32 flex justify-between  mt-10 border rounded-2xl">
        <div className="m-3">

        <h1 className="text-xl">Title</h1>
        <h2>Content : Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, incidunt cupiditate ipsam adipisci voluptatum id.</h2>
        </div>
        <div className=" m-2 p-2 flex flex-col justify-between items-center w-24">
          
            <div className="w-8 h-8 flex justify-center items-center rounded-full border  ">

            <button className="">x</button>
            </div>
        
            <input type="checkbox"/>
            <BsPencilSquare/>

        </div>
    </div>
  )
}

export default Todo