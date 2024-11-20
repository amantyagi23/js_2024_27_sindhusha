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
        },
        updateTodo:(state,action)=>{
           const index = state.findIndex((item)=>item.id === action.payload.id)
           state[index] = action.payload
        },
       
    }
})



export const {addTodo,deleteTodo,updateTodo} = todoSlice.actions;

export default todoSlice.reducer;