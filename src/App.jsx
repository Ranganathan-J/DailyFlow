import React,{useState} from "react"
import Header from "./components/Header"
import Inputfeild from "./components/Inputfeild"
import TodoList from "./components/TodoList"
import Footer from "./components/Footer"


function App() {
  const [input, setInput] = useState("")
  const [todo, setTodo] = useState([])

  return (
    <div className="flex flex-col min-h-screen bg-slate-700">
      <Header />
      <div className="flex justify-center items-center m-4">
        <div className="bg-gray-800 shadow-lg rounded-lg p-8">
          <div className="mb-6">
            <Inputfeild
              input={input}
              setInput={setInput}
              todo={todo}
              setTodo={setTodo}
            />
          </div>
          <div>
            <TodoList todo={todo} setTodo={setTodo} />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default App
