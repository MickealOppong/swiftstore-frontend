import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartItemList = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return <>
    {
      cartItems.map((item) => {
        return <CartItem  {...item} key={item.cartID} />
      })
    }
  </>
}
export default CartItemList;