import { useState } from "react"
import CreateTodo from "./CreateToDo"
import SearchTodo from "./SearchTodo"
import ShowTodoList from "./ShowTodoList"


const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  console.log(todoList);
  
  return (
    <div>
        <div className="flex">
            <SearchTodo/>
            <CreateTodo setTodoList={setTodoList} todoList={todoList}/>
        </div>
        <ShowTodoList todoList={todoList}/>
    </div>
  )
}

export default Todo