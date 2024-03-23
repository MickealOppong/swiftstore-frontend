import { useSelector } from "react-redux";
import { formatPrice } from "../util";

const CartTotal = () => {
  const { shipping, tax, orderTotal, cartTotal } = useSelector((state) => state.cart);
  return <section className="card bg-base-200 max-w-xs rounded-xl mb-8">
    <article className="flex flex-col gap-4 p-6 text-xs">
      {/*SUBTOTAL*/}
      <div className="flex justify-between border-b border-base-300  pb-2 capitalize">
        <span>subtotal</span>
        <span className="font-medium">{formatPrice(cartTotal)}</span>
      </div>
      {/*SHIPPING*/}
      <div className="flex justify-between border-b border-base-300  pb-2 capitalize">
        <span>shipping</span>
        <span className="font-medium">{formatPrice(shipping)}</span>
      </div>
      {/* TAX */}
      <div className="flex justify-between border-b border-base-300  pb-2 capitalize">
        <span>tax</span>
        <span className="font-medium">{formatPrice(tax)}</span>
      </div>
      {/* ORDER TOTAL */}
      <div className="flex justify-between capitalize">
        <span>order total</span>
        <span className="font-medium text-sm">{formatPrice(orderTotal)}</span>
      </div>
    </article>
  </section>
}
export default CartTotal;