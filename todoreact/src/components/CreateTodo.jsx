import  { useState } from 'react'
import TodoForm from './TodoForm'

const CreateTodo = ({todoList,setTodoList}) => {
    const [open, setOpen] = useState(false)
  return (
    <div>
        <button onClick={()=>setOpen(true)} >Add Todo</button>
       {open === true && <div className='todoForm'>
        <button onClick={()=>setOpen(false)}>X</button>
        <TodoForm setTodoList={setTodoList} todoList={todoList}/>
       </div>}
    </div>
  )
}

export default CreateTodo