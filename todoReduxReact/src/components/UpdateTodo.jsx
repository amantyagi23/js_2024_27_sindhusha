import  { useState } from 'react'
import {  useSelector } from 'react-redux'
import TodoForm from './TodoForm';

const UpdateTodo = ({id}) => {
  const [open,setOpen] = useState(false);
  const [todo,setTodo] = useState();
  const todos = useSelector(state =>state.todos)
  const handleUpdate = ()=>{
    setTodo(todos.find((item)=>item.id === id))
    setOpen(true);
    
  }

  return (
    <div><button onClick={handleUpdate}>Update</button>
    {open===true &&  <div className='todoForm'>
        <button onClick={()=>setOpen(false)}>X</button>
        <TodoForm todoData={todo} /></div>}
    </div>
  )
}

export default UpdateTodo