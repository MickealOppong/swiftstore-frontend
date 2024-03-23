import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: [],
  itemsInCart: 0,
  cartTotal: 0,
  shipping: 200,
  tax: 0,
  orderTotal: 0,
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
      const { cartID } = action.payload;
      const item = state.cartItems.find((i) => i.cartID == cartID)
      state.cartItems = state.cartItems.filter((item) => {
        return item.cartID !== cartID;
      })
      state.itemsInCart -= item.amount;
      state.cartTotal -= item.amount * item.price;
      cartSlice.caseReducers.calcTotals(state);
      toast.error("item removed from cart")
    },
    clearItem: () => {
      localStorage.setItem('cart', JSON.stringify(initialState));
      return initialState;
    },
    editItem: (state, action) => {
      const { cartID, amount } = action.payload;
      console.log(amount);
      const item = state.cartItems.find((product) => product.cartID === cartID)
      state.itemsInCart += (amount - item.amount);
      state.cartTotal += item.price * (amount - item.amount);
      item.amount = amount;
      cartSlice.caseReducers.calcTotals(state);
      toast.success("cart updated")
    },
    calcTotals: (state) => {
      state.tax = 0.2 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem('cart', JSON.stringify(state))
    }

  }
})
export const { addItem, removeItem, clearItem, editItem } = cartSlice.actions;
export default cartSlice.reducer;