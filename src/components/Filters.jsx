import FormInput from "./FormInput";
import Options from "./Options";

const Filters = () => {

  const handleSelection = () => {

  }
  return <div className="grid grid-cols-1 bg-neutral items-center md:grid-cols-2 md:gap-2 lg:grid-cols-4 rounded p-8 mb-16">
    <FormInput type='search' name='product' label='search product' size='w-56' />
    <Options event={handleSelection} label='select category' size="w-56" />
    <Options event={handleSelection} label='select company' size="w-56" />
    <Options event={handleSelection} label='sort by' size="w-56" />
    <FormInput type='range' name='product' label='select price' size='w-56' min="0" max="1000" defaultValue="300" />
    <FormInput type='checkbox' name='product' label='free shipping' size="w-4" />
    <div className="flex flex-col gap-y-4 lg:flex-row gap-x-4">
      <button type="submit" className="btn btn-primary btn-sm w-56 uppercase">search</button>
      <button type="button" className="btn btn-primary btn-sm w-56 uppercase">reset</button>
    </div>

  </div>
}
export default Filters;