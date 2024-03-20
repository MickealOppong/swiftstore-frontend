import { FeaturedProducts, Hero } from "../components/index";
import { customFetch } from '../util/index';

export const loader = async () => {
  const response = await customFetch.get('/products?featured=true')
  const products = response.data?.data;
  return { products }
}
const Landing = () => {
  return <>
    <Hero />
    <FeaturedProducts />
  </>
}
export default Landing;