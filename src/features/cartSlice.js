import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  itemsInCart: 0,
  cartTotal: 0,
  shipping: 200,
  tax: 0,
  orderTotal: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
      const item = state.cartItems.find((item) => item.cartID === product.cartID)
      if (item) {

      }
      state.cartItems.push(action.id)
      state.itemsInCart = state.itemsInCart + 1;
      console.log(action.payload);
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.map((cartProduct) => {
        return cartProduct.cartID !== action.payload;
      })
    },
    clearItem: (state) => {
      state.cartItems = [];
    },
    editItem: (state, action) => {

    }

  }
})
export const { addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;