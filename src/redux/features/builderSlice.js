const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isExist = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (!isExist) {
        state.products.push(action.payload);
      }
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});

export const { addToCart, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
