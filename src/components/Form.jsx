import { useEffect, useRef } from "react";
import RegularButton from "./RegularButton";
import SelectElement from "./SelectElement";

export default function Form({ handleSubmit, handleChange, isFirstRender }) {
  const divRef = useRef(null);
  useEffect(() => {
    !isFirstRender && divRef.current.focus();
  }, []);
  return (
    <div className="form-container" tabIndex={-1} ref={divRef}>
      <p className="p--large">Customize your game plan. 🐵</p>
      <form className="wrapper">
        <SelectElement handleChange={handleChange} target={"category"} />

        <SelectElement handleChange={handleChange} target={"number"} />

        <RegularButton handleClick={handleSubmit}>Start Game</RegularButton>
      </form>
    </div>
  );
}
