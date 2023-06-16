import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ICard } from "@/interface/Board";

interface IState {
  cards: ICard[];
}

const initialState: IState = {
  cards: [],
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<ICard>) => {
      state.cards.push(action.payload);
    },
    removeCard: (state, action: PayloadAction<number>) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },
  },
});

export const { addCard, removeCard } = cardSlice.actions;
export default cardSlice.reducer;
