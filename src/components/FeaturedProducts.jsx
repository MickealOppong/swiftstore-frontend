import { ProductGrid, SectionTitle } from '../components/index';
const FeaturedProducts = () => {
  return <div className="align-elemnents">
    <div className="my-4">
      <SectionTitle text='Featured Products' />
      <ProductGrid />
    </div>
  </div>
}
export default FeaturedProducts;