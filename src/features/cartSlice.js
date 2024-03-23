import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: [],
  itemsInCart: 0,
  cartTotal: 0,
  shipping: 200,
  tax: 0,
  orderTotal: 0
}

const getFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('cart')) || initialState;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: getFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      const { cartProduct } = action.payload;
      const item = state.cartItems.find((product) => product.cartID === cartProduct.cartID)
      if (item) {
        item.amount += cartProduct.amount;
      } else {
        state.cartItems.push(cartProduct)
      }
      state.itemsInCart += cartProduct.amount;
      state.cartTotal += cartProduct.amount * cartProduct.price;
      cartSlice.caseReducers.calcTotals(state);
      toast.success("Item added to cart")
    },
    removeItem: (state, action) => {
      const { cartProduct } = action.payload;
      const item = state.cartItems.find((i) => i.cartID == cartProduct.cartID)
      state.cartItems = state.cartItems.filter((item) => {
        return item.cartID !== cartProduct.cartID;
      })
      state.itemsInCart -= item.amount;; kughj
      state.cartTotal -= cartProduct.amount * cartProduct.price;
      cartSlice.caseReducers.calcTotals(state);
      toast.error("item removed from cart")
    },
    clearItem: () => {
      localStorage.setItem('cart', JSON.stringify(initialState));
      return initialState;
    },
    editItem: (state, action) => {
      const { cartProduct } = action.payload;
      const item = state.cartItems.find((product) => product.cartID === cartProduct.cartID)
      state.itemsInCart += cartProduct.amount - item.amount;
      item.amount += item.price * (cartProduct.amount - item.amount);
      item.amount = cartProduct.amount;
      cartSlice.caseReducers.calcTotals(state);
      toast.success("cart updated")
    },
    calcTotals: (state) => {
      state.tax = 0.2 * state.cartTotal;
      state.orderTotal += state.cartTotal + state.shipping + state.tax;
      localStorage.setItem('cart', JSON.stringify(state))
    }

  }
})
export const { addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;