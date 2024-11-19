
import CreateTodo from "./CreateToDo"
import SearchTodo from "./SearchTodo"
import ShowTodoList from "./ShowTodoList"



const Todo = () => {

  return (
    <div>
        <div className="flex">
            <SearchTodo/>
            <CreateTodo />
        </div>
        <ShowTodoList/>
    </div>
  )
}

export default Todo