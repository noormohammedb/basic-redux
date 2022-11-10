import { configureStore, createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: { todos: [] },
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
      state.todos[action.payload.index] = action.payload.editValue;
    },
  },
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;

export const todoStore = configureStore({
  reducer: todoSlice.reducer,
});
