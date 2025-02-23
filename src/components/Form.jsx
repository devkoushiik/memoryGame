import { data } from "../data/data";
import RegularButton from "./RegularButton";

export default function Form({ handleSubmit, handleChange }) {
  return (
    <div className="form-container">
      <form className="wrapper">
        <div className="form__inner-wrapper">
          <label htmlFor="category">Select emoji category</label>
          <select name="category" id="category" onChange={handleChange}>
            {data.category.map((category, index) => (
              <option key={index} value={category.value}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form__inner-wrapper">
          <label htmlFor="number">Select numbers of memory cards.</label>
          <select name="number" id="number" onChange={handleChange}>
            {data.number.map((number, index) => (
              <option key={index} value={number.value}>
                {number.value}
              </option>
            ))}
          </select>
        </div>
        <RegularButton handleClick={handleSubmit}>Start Game</RegularButton>
      </form>
    </div>
  );
}
