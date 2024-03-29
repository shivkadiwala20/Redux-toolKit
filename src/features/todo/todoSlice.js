import { createSlice, nanoid } from "@reduxjs/toolkit";
//shiv
const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello Shiv Kadiwala",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {},
    removeTodo: () => {},
  },
});
