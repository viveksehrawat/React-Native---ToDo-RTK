import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask(state = initialState, action) {
      const newTask = {
        name: action.payload,
      };
      state.push(newTask);
    },
    deleteTask(state, action) {
      console.log(action.payload.name);
      return state.filter((item) => item.name !== action.payload.name);
    },
  },
});

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
