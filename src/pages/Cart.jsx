import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartItemList, CartTotal, SectionTitle } from "../components/index";
const Cart = () => {
  const user = useSelector((state) => state.user.user)
  const numOfItems = useSelector((state) => state.cart.itemsInCart)

  if (numOfItems === 0) {
    return <SectionTitle text="Your cart is empty" />
  }

  return <>
    <SectionTitle text="shopping cart" />
    <div className="mt-8 grid gap-8 lg:grid-cols-12">
      <div className="lg:col-span-8">
        <CartItemList />
      </div>
      <div className="lg:col-span-4 lg:pl-4">
        <CartTotal />
        {
          user ? <Link to='/checkout' className="btn btn-primary uppercase ">Proceed to checkout</Link> : <Link to='/login' className="btn btn-primary uppercase ">Please login</Link>
        }
      </div>
    </div>
  </>
}
export default Cart;