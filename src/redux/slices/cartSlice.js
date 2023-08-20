import { createSlice } from "@reduxjs/toolkit"; //to add redux
import Cookies from 'js-cookie'

const initialState = {
  loading: true,
  cartItems: [],
};

const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2); // 12.3264 to 12.33
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload; //contains the item that gets added to the cart
      const existItem = state.cartItems.find((x) => x.id === item.id);
      if (existItem) {
        state.cartItems = state.cartItems.map(
          (x) => (x.id === existItem.id ? item : x) // change quantity
        );
      } else {
        state.cartItems = [...state.cartItems, item]; // adds the new item
      }
      state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
      );
      state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 100);
      state.taxPrice = addDecimals(Number(0.15 * state.itemsPrice));
      state.totalPrice = addDecimals(
        Number(state.itemsPrice) +
          Number(state.shippingPrice) +
          Number(state.taxPrice)
      );
      Cookies.set('cart', JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => x.id !== action.payload)
    },
  },
});
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
