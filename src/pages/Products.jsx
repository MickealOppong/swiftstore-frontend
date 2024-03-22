import { Filters, PaginationContainer, ProductsContainer } from "../components/index";
import { customFetch } from "../util";

export const loader = async ({ request }) => {
  const params = Object.fromEntries([...(new URL(request.url).searchParams.entries())])

  const response = await customFetch.get('/products', {
    params
  });
  const products = response.data?.data;
  const meta = response.data?.meta;
  return { products, meta, params };
}
const Products = () => {

  return <section className="align-elements">
    <Filters />
    <ProductsContainer />
    <PaginationContainer />

  </section >
}
export default Products;