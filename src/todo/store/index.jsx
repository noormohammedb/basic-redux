import { configureStore, createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: { todos: ["foo"] },
  reducers: {
    addTodo(state, action) {
      console.log("state: ", state);
      console.log("action: ", action);
      console.log("addTodo: ");
      state.todos = [...state.todos, action.payload];
      //   state = [state, action.payload];
      //   state.todo.append(action.payload);
    },
    removeTodo(state, action) {
      console.log("removeTodo: ");
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
