const EmojiButton = ({
  style,
  handleClick,
  content,
  selectedCardEntry,
  matchedCardEntry,
}) => {
  const btnContent = selectedCardEntry || matchedCardEntry ? content : "?";
  return (
    <button className={style} onClick={handleClick}>
      {btnContent}
    </button>
  );
};
export default EmojiButton;
