import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  isShow: boolean;
}

const initialState: ModalState = {
  isShow: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setIsShow: (state) => {
      state.isShow = !state.isShow;
    },
  },
});

export const { setIsShow } = modalSlice.actions;
export default modalSlice.reducer;
