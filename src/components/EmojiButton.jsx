import { decodeEntity } from "html-entities";
const EmojiButton = ({
  handleClick,
  content,
  selectedCardEntry,
  matchedCardEntry,
  emoji,
}) => {
  const btnContent =
    selectedCardEntry || matchedCardEntry
      ? decodeEntity(emoji.htmlCode[0])
      : "?";

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
