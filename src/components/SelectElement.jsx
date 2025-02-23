import { data } from "../data/data";

const SelectElement = ({ handleChange, target }) => {
  console.log(target);
  return (
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
  );
};
export default SelectElement;
