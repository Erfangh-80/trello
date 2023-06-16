import { IBoard } from "@/interface/Board";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: IBoard[] = [{ id: 0, title: "", cards: [] }];

const BoardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    getBorad: (state) => {
      return state;
    },
    addBorad: (state, action: PayloadAction<IBoard>) => {
      state.push(action.payload);
      return state;
    },
    deleteBorad: (state, action: PayloadAction<number>) => {
      return state.filter((board) => board.id !== action.payload);
    },
  },
});
export const { addBorad, deleteBorad, getBorad } = BoardSlice.actions;
export default BoardSlice.reducer;
