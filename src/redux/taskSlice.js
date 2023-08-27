import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      console.log("======", action.payload);
      const newTask = {
        name: action.payload,
      };

      return [...state, newTask]; // Use the spread operator to create a new array
    },
    deleteTask: (state, action) => {
      return state.filter((item) => item.name !== action.payload.name);
    },
  },
});

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
