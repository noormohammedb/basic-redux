import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 1 },
  reducers: {
    increment(state, action) {
      state.counter++;
    },
    decrement(state, action) {
      state.counter--;
    },
    setThisNumber(state, action) {
      console.log("action: ", action);
      state.counter = action.payload;
    },
  },
});

export const actions = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
