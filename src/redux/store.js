const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from "./features/builderSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
