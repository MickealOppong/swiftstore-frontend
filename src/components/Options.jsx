
const Options = ({ event, label, input, size }) => {
  return <div className="flex flex-col">
    <label htmlFor="quantity" className="capitalize mb-2 font-medium tracking-wider">{label}</label>
    <select className={`select select-secondary select-bordered select-md ${size}`} onChange={event} id="quantity">
      {input}
    </select>
  </div>
}
export default Options;