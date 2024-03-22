import { useState } from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../util";
const ProductsContainer = () => {
  const { products, meta } = useLoaderData();
  const totalProducts = meta.pagination.total;
  const [layout, setLayout] = useState('grid')

  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${pattern === layout ? 'btn-primary text-primary-content' : 'btn-ghost text0based-content'}`
  }
  return <section>
    <header className="justify-between items-center border-b py-4 hidden md:flex">
      <h4 className="text-xl ">{totalProducts} Product{products.length > 1 && 's'}</h4>
      <div className="flex gap-x-2 font-semibold text-primary text-2xl">
        <button type="button" className={setActiveStyles('grid')} onClick={() => setLayout('grid')}><BsFillGridFill /></button>
        <button type="button" className={setActiveStyles('list')} onClick={() => setLayout('list')} ><BsList /></button>
      </div>
    </header>
    <div className={`${layout === 'list' ? 'flex flex-col w-full ' : 'grid md:grid-cols-2 lg:grid-cols-3 '} gap-4 mt-12`} >
      {
        products.map((product) => {
          const { image, title, price } = product.attributes;
          return <Link to={`/products/${product.id}`} className={`${layout === 'list' ? 'flex flex-col md:flex-row gap-12' : 'flex flex-col'} card shadow-xl rounded-xl p-8 hover:scale-105 duration-300`} key={product.id}>
            <div>
              <img src={image} alt={title} className={`${layout === 'list' ? 'w-full h-56 md:w-96' : "flex  w-full h-60 lg:w-96"} rounded-md object-cover `} />
            </div>
            <div className={`${layout === 'list' ? 'flex justify-between w-full flex-col items-center md:flex-row md:items-start' : 'flex flex-col items-center mt-4 p-2'}`}>
              <h2 className="capitalize font-semibold text-2xl">{title}</h2>
              <p className="mt-4">{formatPrice(price)}</p>
            </div>
          </Link>
        })
      }
    </div>
  </section>
}
export default ProductsContainer