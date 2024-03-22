
const Options = ({ name, label, input, size, defaultValue }) => {

  return <div className="form-control flex flex-col">
    <label htmlFor="quantity" className="capitalize mb-2 font-medium tracking-wider">{label}</label>
    <select className={`select select-secondary select-bordered select-md ${size}`} name={name} id="name" defaultValue={defaultValue}>
      {input.map((item, index) => {
        return <option key={index} value={item} >{item}</option>
      })}
    </select>
  </div>
}
export default Options;