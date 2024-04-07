import Input from "./components/Input"
import Todo from "./components/Todo"
import {useState} from 'react'
import { DummyType,Title,Note } from "./types/types";



function App() {


const [dummy,setDummy] = useState<DummyType[]>([]);
const [title,setTitle] = useState<Title>();
const [note,setNote] = useState<Note>();
let index = 0;



console.log(title,note)
console.log(dummy)

const  dummyDataHandler = ()=>{

if(title && note !== undefined){

  setDummy([{title,note,id:index++},...dummy])
  setTitle("")
  setNote("")
}
 
}
 
  return (
    <>
    <div className="w-full h-screen flex flex-col items-center">

    <h1 className="underline text-6xl m-6">To do app</h1>
     
     <Input setTitle={setTitle} setNote={setNote} dummyDataHandler={dummyDataHandler} title={title} note={note} />
{ 
dummy.map(
(data)=>(

  <Todo title= {data.title} note={data.note} key={data.id}/>
  )
  )
}

    </div>
    </>
  )
}

export default App
