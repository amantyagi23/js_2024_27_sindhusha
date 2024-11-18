import React from 'react'

const DeleteTodo = ({id,todoList,setTodoList}) => {
  const deleteTodo = ()=>{
    const list = todoList.filter((item)=>item.id !== id);
    setTodoList(list);
  }
  return (
    <div>
      <button onClick={deleteTodo}>Delete</button>
    </div>
  )
}

export default DeleteTodo