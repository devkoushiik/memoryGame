import RegularButton from "./RegularButton";
import SelectElement from "./SelectElement";

export default function Form({ handleSubmit, handleChange }) {
  return (
    <div className="form-container">
      <form className="wrapper">
        <div className="form__inner-wrapper">
          <label htmlFor="category">Select emoji category</label>
          <SelectElement handleChange={handleChange} target={"category"} />
        </div>
        <div className="form__inner-wrapper">
          <label htmlFor="number">Select numbers of memory cards.</label>
          <SelectElement handleChange={handleChange} target={"number"} />
        </div>
        <RegularButton handleClick={handleSubmit}>Start Game</RegularButton>
      </form>
    </div>
  );
}
