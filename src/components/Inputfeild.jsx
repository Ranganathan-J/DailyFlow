import React from 'react'
import { v4 as uuidv4 } from 'uuid';
uuidv4(); 

const Inputfeild = ({input, setInput, todo, setTodo}) => {

    const onInputChange = (e) => {
        setInput(e.target.value)
    }
    const onFormsubmit = (e) => {
       e.preventDefault();
        setTodo([...todo,{id:uuidv4() , title:input, completed:false}])
        setInput("")
        console.log(todo);
    }
    
  return (
  <div>
    <h2 className='text-center text-2xl py-0 text-purple-500'>Add your task</h2>
     <div className='flex items-center justify-center m-10 sm:m-6 md:m-8 lg:m-10'>
     <form className='flex flex-col sm:flex-row ' onSubmit={onFormsubmit}>
        <input 
        type="text" 
        placeholder='Add your task..' 
        className=' flex-grow rounded-2xl text-gray-950 font-sans p-3 m-4 border-4 border-rose-700 outline-none w-96' 
        value={input} required
        onChange={onInputChange}/>
        <button className='bg-blue-800 text-center text-xl rounded-2xl hover:bg-blue-500 text-black m-4 border-2 border-dashed   px-6 py-3 w-auto' type='submit'>Add</button>
    </form>
   </div>
  </div>
  )
}

export default Inputfeild