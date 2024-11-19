import { createSlice } from "@reduxjs/toolkit";
import {fakeData} from '../fakeData'

const todoSlice = createSlice({
    name:"todos",
    initialState: [...fakeData] ,
    reducers:{
        addTodo:(state,action)=>{
            state.push(action.payload)
        },
        deleteTodo:(state,action)=>{
            return state.filter((item)=>item.id !== action.payload)
        }
    }
})



export const {addTodo,deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;