import React from 'react'

const ShowTodoList = ({todoList}) => {
  return (
    <div>{
      todoList.map((item,index)=><div key={index}>
      {item.title}
      </div>)
      }</div>
  )
}

export default ShowTodoList