
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../redux/todoSlice';

const TodoForm = () => {

  const dispatch  =  useDispatch()
  const  {register,handleSubmit,reset} = useForm()
  const submit = (data)=>{
  
    const rawData = {
      id:uuidv4(),
      ...data
    }

    dispatch(addTodo(rawData))
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