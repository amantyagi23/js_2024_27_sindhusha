import  { useState } from 'react'
import TodoForm from './TodoForm'

const CreateTodo = () => {
    const [open, setOpen] = useState(false)
  return (
    <div>
        <button onClick={()=>setOpen(true)} >Add Todo</button>
       {open === true && <div className='todoForm'>
        <button onClick={()=>setOpen(false)}>X</button>
        <TodoForm/>
       </div>}
    </div>
  )
}

export default CreateTodo