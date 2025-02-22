import RegularButton from "./RegularButton";

const GameOver = ({ resetGameHandler }) => {
  return (
    <div className="wrapper wrapper--accent">
      <p className="p--large">You have matched all memory cards!!</p>
      <RegularButton handleClick={resetGameHandler}>
        Restart the game again!!
      </RegularButton>
    </div>
  );
};
export default GameOver;
