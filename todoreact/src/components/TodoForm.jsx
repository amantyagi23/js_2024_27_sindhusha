import React from 'react'
import { useForm } from 'react-hook-form'

const TodoForm = ({todoList,setTodoList}) => {

  // older js method
  // const submitHandler =(event)=>{
  //   event.preventDefault()
  //   // console.log(event);
  //   const rawData = {
  //     title:event.target[0].value,
  //     description:event.target[1].value,
  //   } 
  //   console.log(rawData);
    

  // }

  const  {register,handleSubmit,reset} = useForm()
  // react hook form used to take input 
  // use register
  // ... spread operator
  //

  const submit = (data)=>{
    console.log(data);
    setTodoList([...todoList,data])
    reset()
    
  }
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <label>Enter Title</label>
        <input {...register("title")}/>
      </div>
      <div>        
        <label>Enter Description</label>
        <textarea {...register("description")}/>
      </div>
        <button type='submit'>
            Create Todo
        </button>
    </form>
  )
}

export default TodoForm