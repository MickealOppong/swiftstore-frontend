import { Form, redirect } from "react-router-dom";
import { clearItem } from "../features/cartSlice";
import { customFetch, formatPrice } from "../util";
import FormInput from "./FormInput";

export const action = (store) => async ({ request }) => {
  const formData = await request.formData();
  const { name, address } = Object.fromEntries(formData);

  const user = store.getState().user.user;
  const { cartItems, orderTotal, itemsInCart } = store.getState().cart;
  const info = {
    name,
    address,
    chargeTotal: orderTotal,
    orderTotal: formatPrice(orderTotal),
    cartItems,
    numItemsInCart: itemsInCart
  }
  try {
    const response = await customFetch.post('/orders', { data: info }, {

      headers: {
        Authorization: `Bearer ${user.token}`
      },
    });
    store.dispatch(clearItem())
    return redirect('/orders')
  } catch (error) {
    if (error.status === 401) {
      return redirect('/login')
    }
    return null;
  }

}
const CheckoutForm = () => {
  return <div className="flex flex-col  mt-4">
    <h2 className="text-base mb-4">Shipping information</h2>
    <Form className="flex flex-col mb-8" method="post">
      <FormInput label="first name" type="text" name="name" size="w-96" />
      <FormInput label="address" type="text" name="address" size="w-96" />
      <div className="mt-6 w-96">
        <button className="btn btn-primary w-full uppercase">place your order</button>
      </div>
    </Form>
  </div >
}
export default CheckoutForm