import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLoaderData } from "react-router-dom";
import { NavHeader } from "../components/index";
import { addItem } from "../features/cartSlice";
import { customFetch, formatPrice, generateNumbers } from "../util";

export const loader = async ({ params }) => {
  const productId = params.id;
  try {
    const response = await customFetch.get(`products/${productId}`)
    const singleProduct = response.data?.data;
    return { singleProduct }
  } catch (error) {
    console.log(error);
  }
}

const SingleProduct = () => {
  const { singleProduct } = useLoaderData();
  const { title, company, description, colors, image, price, category } = singleProduct.attributes
  const [productColor, setProductColor] = useState(colors[0])
  const [amount, setAmount] = useState(1);

  const dispatch = useDispatch();

  const handleQuantity = (e) => {
    setAmount(parseInt(e.target.value))
  }

  const cartProduct = {
    cartID: singleProduct.id + productColor,
    productID: singleProduct.id,
    image,
    title,
    price,
    productColor,
    amount,
    company
  }


  const addToCart = () => {
    dispatch(addItem({ cartProduct }))
  }
  return <section>
    <NavHeader text="products" />
    <article className="align-elements mt-8 grid gap-8 lg:grid-cols-2">
      <div className="flex ">
        <img src={image} alt={title} className="w-80 h-80 rounded-md object-cover lg:w-full" />
      </div>
      <div className="flex flex-col gap-y-4">
        <h2 className="text-primary text-3xl lg:text-5xl capitalize">{title}</h2>
        <h4>{company}</h4>
        <p>{formatPrice(price)}</p>
        <p>{description}</p>
        {/** PRODUCT COLOUR */}
        <div className="flex flex-col mt-4">
          <h4 className="mb-2 capitalize tracking-wider">colors</h4>
          <div className="flex">
            {
              colors.map((color, index) => {
                return <button type="button" style={{ backgroundColor: color }} className={`badge w-6 h-6 mr-2 ${color === productColor && 'border-2 border-primary'}`} key={index} onClick={() => setProductColor(color)}></button>
              })
            }
          </div>
        </div>
        {/*QUANTITY */}
        <select className="select select-secondary w-full max-w-xs " onChange={handleQuantity}>
          {
            generateNumbers(10).map((number) => {
              return <option key={number} defaultValue={amount} >{number}</option>
            })
          }
        </select>
        {/* ADD TO CART */}
        <button className="btn btn-primary capitalize w-36"
          onClick={addToCart}>add to cart</button>
      </div>
    </article>

  </section >
}
export default SingleProduct;