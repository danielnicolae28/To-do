import Input from "./components/Input"
import Todo from "./components/Todo"
import {useState} from 'react'

type dummyStateType ={title:string,note:string}[]

function App() {

const [dummy,setDummy] = useState<dummyStateType>([]);



  const dummyData:{title:string,note:string} = {
    title:"Gym",
    note:"Exercices"
  }

const  dummyDataHandler = (newData:{title:string,note:string})=>{
  setDummy([newData,...dummy])
}
 
  return (
    <>
    <div className="w-full h-screen flex flex-col items-center">

    <h1 className="underline text-6xl m-6">To do app</h1>
     
     <Input />

     <Todo dummyData = {dummyData}/>
    </div>
    </>
  )
}

export default App
