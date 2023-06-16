import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./features/modal/ModalSlice";
import boardReducer from "./features/board/BoardSlice";
import cardReducer from "./features/card/cardSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    board: boardReducer,
    card: cardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
