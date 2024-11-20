
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTodo, updateTodo } from '../redux/todoSlice';

const TodoForm = ({todoData}) => {

  const dispatch  =  useDispatch()
  const  {register,handleSubmit,reset} = useForm(
    {defaultValues:{title:todoData?todoData.title :"",
      description:todoData?todoData.description:""
    }}
  )
  const submit = (data)=>{

    if(todoData !==undefined){
      const rawData = {
        id:todoData.id,
        ...data
      }
      dispatch(updateTodo(rawData))
    }
  
   else{
    const rawData = {
      id:uuidv4(),
      ...data
    }

    dispatch(addTodo(rawData)) 
   }
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