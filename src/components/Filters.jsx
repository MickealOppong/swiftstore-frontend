import { Form, Link, useLoaderData } from "react-router-dom";
import FormInput from "./FormInput";
import InputCheck from "./InputCheck";
import InputRange from "./InputRange";
import Options from "./Options";


const Filters = () => {
  const { meta, params } = useLoaderData();
  const { search, company, category, price, shipping, order } = params;

  //console.log(params);
  const companyMetaData = () => {
    return meta.companies.map((item) => item)
  }

  const categoryMetaData = () => {
    return meta.categories.map((item) => item)
  }
  const sortItems = () => {
    const sortBy = ['a-z', 'z-a', 'high', 'low']
    return sortBy.map((item) => item)
  }
  return <Form className="grid grid-cols-1 bg-neutral items-center md:grid-cols-2 md:gap-2 lg:grid-cols-4 rounded p-8 mb-16">

    {/* SEARCH*/}
    <FormInput type='search' name='search' label='search product' size='w-76' defaultValue={search} />
    {/* CATEGORY */}
    <Options name='category' label='select category' input={categoryMetaData()} defaultValue={category} />
    {/* COMPANY */}
    <Options name='company' label='select company' input={companyMetaData()} defaultValue={company} />
    {/* SORT */}
    <Options name='order' label='sort by' input={sortItems()} defaultValue={order} />
    {/* PRICE */}
    <InputRange label="select price" name='price' size='w-76' price={price} />
    <div className="my-2">
      {/* SHIPPING */}
      <InputCheck name="shipping" label='free shipping' size='checkbox-sm' defaultCheck={shipping} />
    </div>
    {/* BUTTONS */}
    <div className="flex flex-col gap-y-4 lg:flex-row gap-x-4">
      <button type="submit" className="btn btn-primary btn-sm w-56 uppercase">search</button>
      <Link to="/products" className="btn btn-primary btn-sm w-56 uppercase">reset</Link>
    </div>
  </Form>
}
export default Filters;