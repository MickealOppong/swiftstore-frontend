import { useSelector } from "react-redux";
import { redirect } from "react-router-dom";
import { CartTotal, CheckoutForm, SectionTitle } from "../components";

export const loader = (store) => () => {
  const user = store.getState().user.user;
  if (!user) {
    return redirect("/login")
  }
  return null;
}
const Checkout = () => {
  const cartTotal = useSelector((state) => state.cart.cartTotal)

  if (cartTotal === 0) {
    return <section>
      <SectionTitle text="Your cart is empty" />
    </section>
  }
  return <>
    <SectionTitle text="Place your order" />
    <div className="grid gap-y-4 mt-6 md:grid-cols-2 lg:gap-x-96">
      <CheckoutForm />
      <CartTotal />
    </div>
  </>
}
export default Checkout;