import { configureStore, createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: { todos: ["foo"] },
  reducers: {
    addTodo(state, action) {
      state.todos = [...state.todos, action.payload];
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter(
        (data, index) => index !== action.payload
      );
    },
    editTodo(state, action) {
      console.log("editTodo: ");
    },
  },
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;

export const todoStore = configureStore({
  reducer: todoSlice.reducer,
});
