import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../util";
const ProductGrid = () => {
  const { products } = useLoaderData();

  return <div className="pt-4 rounded grid justify-center gap-y-8 md:grid-cols-2 md:gap-x-4 lg:grid-cols-3 lg:gap-x-4">
    {
      products.map((product) => {
        const { title, image, price, id } = product.attributes;
        return <Link to={`/products/${product.id}`} key={product.id} className="text-center flex flex-col gap-4 pb-4 rounded border-1 shadow hover:scale-110 hover:duration-300 duration-300">
          <img src={image} alt={title} className="w-96 h-60 object-cover p-4" />
          <p className="capitalize text-primary">{title}</p>
          <p className="text-primary">{formatPrice(price)}</p>
        </Link>
      })
    }
  </div>
}
export default ProductGrid;