import { formatPrice, generateNumbers } from "../util";

const CartItem = ({ cartID, title, image, amount, company, price, productColor }) => {
  return <article key={cartID} className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0">
    {/*IMAGE */}
    <img src={image} alt={title} className="h-24 2-24 rounded-lg sm:h-32 sm:w-32 object-cover" />
    {/* INFO */}
    <div className="sm:ml-16">
      {/* TITLE */}
      <h3 className="capitalize font-medium">{title}</h3>
      {/* company */}
      <h3 className="mt-2 capitalize text-sm text-neutral">{company}</h3>
      {/* COLOUR */}
      <p className="mt-2 flex items-center">Color :
        <span className="badge badge-sm ml-2" style={{ backgroundColor: productColor }}> </span>
      </p>
    </div>
    <div className="sm:ml-24">
      {/* AMOUNT */}
      <div className="form-control max-w-xs">
        <label htmlFor="amount" className="label p-0">
          <span className="label-text capitalize">amount</span>
        </label>
        <select name="amount" id="amount" className="mt-2 select select-base select-bordered select-xs">
          {
            generateNumbers(10).map((number) => {
              return <option key={number}>{number}</option>
            })
          }
        </select>
        {/* REMOVE ITEM */}
        <button className="mt-2 hover:link hover:link-primary text-primary text-sm text-start"> Remove </button>
      </div>
    </div>
    <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
  </article>
}
export default CartItem;