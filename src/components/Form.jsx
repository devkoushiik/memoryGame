import RegularButton from "./RegularButton";
import SelectElement from "./SelectElement";

export default function Form({ handleSubmit, handleChange }) {
  return (
    <div className="form-container">
      <p className="p--large">Customize your game plan. 🐵</p>
      <form className="wrapper">
        <SelectElement handleChange={handleChange} target={"category"} />

        <SelectElement handleChange={handleChange} target={"number"} />

        <RegularButton handleClick={handleSubmit}>Start Game</RegularButton>
      </form>
    </div>
  );
}
