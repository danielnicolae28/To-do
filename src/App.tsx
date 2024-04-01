import Input from "./components/Input"
import Todo from "./components/Todo"

function App() {
 
  return (
    <>
    <div className="w-full h-screen flex flex-col items-center">

    <h1 className="underline text-6xl m-6">To do app</h1>
     
     <Input/>

     <Todo/>
    </div>
    </>
  )
}

export default App
