import { useState } from "react";
import { formatPrice } from "../util";

const maxPrice = 100000;
const InputRange = ({ label, name, size, price }) => {
  const [selectedPrice, setSelectedPrice] = useState(price || maxPrice)
  const step = 1000;

  return (
    <div className="form-control ">
      <label className="label cursor-pointer flex w-56 ">
        <span className="label-text capitalize">{label}</span>
        <span className="label-text capitalize mr-2">{formatPrice(selectedPrice)}</span>
      </label>
      <input type="range" name={name} className={`range range-bordered ${size}`} min={0} max={maxPrice} onChange={(e) => setSelectedPrice(e.target.value)} value={selectedPrice} step={step} />
    </div>
  )
}
export default InputRange;