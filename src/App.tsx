import Input from "./components/Input"
import Todo from "./components/Todo"
import {useState} from 'react'
import { DummyType,Title,Note } from "./types/types";



function App() {


const [dummy,setDummy] = useState<DummyType[]>([]);
const [title,setTitle] = useState<Title>();
const [note,setNote] = useState<Note>();


console.log(title,note)
console.log(dummy)

const  dummyDataHandler = ()=>{

if(title && note !== undefined){

  setDummy([{title,note,id:Math.random()},...dummy])
  setTitle("")
  setNote("")
}
 
}

const deleteHandler = (id:number)=>{

  const filtered = dummy.filter((data)=>data.id !== id)
  setDummy(filtered)
  console.log(dummy)
}


 
  return (
    <>
    <div className="w-full h-screen flex flex-col items-center">

    <h1 className="underline text-6xl m-6">To do app</h1>
     
     <Input setTitle={setTitle} setNote={setNote} dummyDataHandler={dummyDataHandler} title={title} note={note} />
{ 
dummy.map(
(data)=>(

  <Todo setTitle={setTitle} title= {data.title} note={data.note} key={data.id} id={data.id} deleteHandler={deleteHandler}/>
  )
  )
}

    </div>
    </>
  )
}

export default App
