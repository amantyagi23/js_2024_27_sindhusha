import { useState } from "react"
import CreateTodo from "./CreateToDo"
import SearchTodo from "./SearchTodo"
import ShowTodoList from "./ShowTodoList"
import { fakeData } from "../fakeData"



const Todo = () => {
  
  const [todoList, setTodoList] = useState(fakeData);
  console.log(todoList);
  
  return (
    <div>
        <div className="flex">
            <SearchTodo/>
            <CreateTodo setTodoList={setTodoList} todoList={todoList}/>
        </div>
        <ShowTodoList todoList={todoList} setTodoList= {setTodoList}/>
    </div>
  )
}

export default Todo