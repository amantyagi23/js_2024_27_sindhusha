import DeleteTodo from './DeleteTodo'
import { useSelector } from 'react-redux'

const ShowTodoList = () => {
  const todoList =  useSelector((state)=>state.todos)
  return (
   <>
   <div className='grid'>
    {todoList.map((item)=> <div key={item.id}>
      <div><button>Update</button> <DeleteTodo  id={item.id}/></div>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
       </div>)}
   </div>
   </>
  )
}

export default ShowTodoList