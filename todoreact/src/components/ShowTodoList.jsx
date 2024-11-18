import React from 'react'
import DeleteTodo from './DeleteTodo'

const ShowTodoList = ({todoList,setTodoList}) => {
  return (
   <>
   <div className='grid'>
    {todoList.map((item)=> <div key={item.id}>
      <div><button>Update</button> <DeleteTodo setTodoList={setTodoList} todoList={todoList}  id={item.id}/></div>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
       </div>)}
   </div>
   </>
  )
}

export default ShowTodoList