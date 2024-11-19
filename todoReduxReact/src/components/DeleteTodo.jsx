import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../redux/todoSlice'

const DeleteTodo = ({id}) => {

  const dispatch = useDispatch()

  const handleDelete = ()=>{
    console.log(id);
    
    dispatch(deleteTodo(id))
  }
  
  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default DeleteTodo