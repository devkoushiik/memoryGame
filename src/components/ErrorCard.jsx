import { useEffect, useRef } from "react";
import RegularButton from "./RegularButton";

const ErrorCard = ({ restartHandler }) => {
  const divRef = useRef(null);
  useEffect(() => {
    divRef.current.focus();
  }, []);
  return (
    <div className="wrapper wrapper--accent" ref={divRef} tabIndex="-1">
      <p className="p--large">Sorry, there was an error.</p>
      <p className="p--regular">
        Please come back later or click the button below to try restarting the
        game.
      </p>
      <RegularButton handleClick={restartHandler}>Restart again.</RegularButton>
    </div>
  );
};
export default ErrorCard;
