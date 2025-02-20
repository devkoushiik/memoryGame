import { decodeEntity } from "html-entities";
const EmojiButton = ({
  handleClick,
  selectedCardEntry,
  matchedCardEntry,
  emoji,
  index,
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

  // for button area level accessibility
  const btnAria = matchedCardEntry
    ? `${decodeEntity(emoji.name)}. Matched.`
    : selectedCardEntry
    ? `${decodeEntity(emoji.name)}. Not matched yet.`
    : "Card upside down.";

  return (
    <button
      disabled={matchedCardEntry}
      className={`btn btn--emoji ${btnStyle}`}
      onClick={selectedCardEntry ? null : handleClick}
      aria-label={`Position ${index + 1}: ${btnAria}`}
      aria-live="polite"
    >
      {btnContent}
    </button>
  );
};
export default EmojiButton;
