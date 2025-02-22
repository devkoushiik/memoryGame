import { useEffect, useRef } from "react";
import RegularButton from "./RegularButton";

const GameOver = ({ resetGameHandler }) => {
  const divRef = useRef(null);
  useEffect(() => {
    divRef.current.focus();
  }, []);
  return (
    <div className="wrapper wrapper--accent" ref={divRef} tabIndex="-1">
      <p className="p--large">You have matched all memory cards!!</p>
      <RegularButton handleClick={resetGameHandler}>
        Restart the game again!!
      </RegularButton>
    </div>
  );
};
export default GameOver;
