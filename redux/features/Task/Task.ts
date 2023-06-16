import { ITask } from "@/interface/Board";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: ITask[] = [{ id: 0, text: "", completed: false }];

const TaskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    getTask: (state) => {
      return state;
    },
    addTask: (state, action: PayloadAction<ITask>) => {
      state.push(action.payload);
      return state;
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      return state.filter((board) => board.id !== action.payload);
    },
  },
});

export const { addTask, deleteTask, getTask } = TaskSlice.actions;
export default TaskSlice.reducer;
