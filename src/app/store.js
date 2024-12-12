import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../components/todos/todoSlice'


export const store = configureStore({
    reducer: {
        todos: todoReducer
    },
})
