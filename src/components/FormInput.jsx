const FormInput = ({ label, type, name, defaultValue, size, min, max }) => {
  return (
    <label className="form-control ">
      <div className="label">
        <span className="label-text capitalize">{label}</span>
      </div>
      <input type={type} name={name} defaultValue={defaultValue} className={`input input-bordered ${size}`} min={min} max={max} />
    </label>
  )
}
export default FormInput;