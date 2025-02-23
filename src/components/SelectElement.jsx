import { data } from "../data/data";

const SelectElement = ({ handleChange, target }) => {
  console.log(target);
  return (
    <div className="form__inner-wrapper">
      {target === "category" ? (
        <label htmlFor={target}>Select emoji {target}</label>
      ) : null}
      {target === "number" ? (
        <label htmlFor={target}>Select numbers of memory cards.</label>
      ) : null}
      <select name={target} id={target} onChange={handleChange}>
        {target === "category"
          ? data[target].map((item, index) => (
              <option key={index} value={item.value}>
                {item.name}
              </option>
            ))
          : target === "number"
          ? data[target].map((item, index) => (
              <option key={index} value={item.value}>
                {item.value}
              </option>
            ))
          : null}
      </select>
    </div>
  );
};
export default SelectElement;
