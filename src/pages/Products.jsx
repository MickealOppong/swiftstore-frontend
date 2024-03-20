import { Filters, PaginationContainer, ProductsContainer } from "../components/index";
import { customFetch } from "../util";

export const loader = async () => {
  const response = await customFetch.get('/products');
  const products = response.data?.data;
  const meta = response.data?.meta;
  return { products, meta };
}
const Products = () => {

  return <section className="align-elements">
    <Filters />
    <ProductsContainer />
    <PaginationContainer />

  </section >
}
export default Products;