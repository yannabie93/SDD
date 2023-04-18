import { createSlice } from '@reduxjs/toolkit';

const cardSlice = createSlice({
  name: 'card',
  initialState: {
    card1: true,
    card2: false,
    card3: false,
    card4: false,
  },
  reducers: {
    completeCard1: (state) => {
      state.card1 = true;
      state.card2 = false;
      state.card3 = false;
      state.card4 = false;

    },
    completeCard2: (state) => {
        state.card1 = false;
        state.card2 = true;
        state.card3 = false;
        state.card4 = false;
    },
    completeCard3: (state) => {
        state.card1 = false;
        state.card2 = false;
        state.card3 = true;
        state.card4 = false;
    },
    completeCard4: (state) => {
        state.card1 = false;
        state.card2 = false;
        state.card3 = false;
        state.card4 = true;    
    },
    completeCards : (state) =>{
      state.card1 = false;
      state.card2 = false;
      state.card3 = false;
      state.card4 = false;    
    }
  },
});

export const {completeCard1,completeCard2,completeCard3,completeCard4,completeCards} = cardSlice.actions

export default cardSlice.reducer
