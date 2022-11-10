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
      state.todos[action.payload.index] = {
        data: action.payload.editValue,
        isFinished: state.todos[action.payload.index].isFinished,
      };
    },
    toggleMark(state, action) {
      state.todos[action.payload] = {
        data: state.todos[action.payload].data,
        isFinished: !state.todos[action.payload].isFinished,
      };
    },
  },
});

export const { addTodo, removeTodo, editTodo, toggleMark } = todoSlice.actions;

export const todoStore = configureStore({
  reducer: todoSlice.reducer,
});
