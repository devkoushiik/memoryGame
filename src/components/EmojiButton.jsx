const EmojiButton = ({
  handleClick,
  content,
  selectedCardEntry,
  matchedCardEntry,
}) => {
  const btnContent = selectedCardEntry || matchedCardEntry ? content : "?";

  const btnStyle = matchedCardEntry
    ? "btn--emoji__back--matched"
    : selectedCardEntry
    ? "btn--emoji__back--selected"
    : "btn--emoji__front";

  return (
    <button
      disabled={matchedCardEntry}
      className={`btn btn--emoji ${btnStyle}`}
      onClick={selectedCardEntry ? null : handleClick}
    >
      {btnContent}
    </button>
  );
};
export default EmojiButton;
