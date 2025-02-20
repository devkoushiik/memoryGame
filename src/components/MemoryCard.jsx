import EmojiButton from "./EmojiButton";
export default function MemoryCard({
  handleClick,
  data,
  selectedCards,
  matchedCards,
}) {
  // const emojiArray = [
  //   "🐶",
  //   "🐷",
  //   "🐙",
  //   "🐛",
  //   "🐵",
  //   "🐶",
  //   "🐷",
  //   "🐙",
  //   "🐛",
  //   "🐵",
  // ];

  const emojiEl = data.map((emoji, index) => {
    const selectedCardEntry = selectedCards.find(
      (emoji) => emoji.index === index
    );
    const matchedCardEntry = matchedCards.find(
      (emoji) => emoji.index === index
    );

    const cardStyle = matchedCardEntry
      ? "card-item--matched"
      : selectedCardEntry
      ? "card-item--selected"
      : "";

    return (
      <li key={index} className={` card-item ${cardStyle}`}>
        <EmojiButton
          handleClick={() => handleClick(emoji.name, index)}
          emoji={emoji}
          selectedCardEntry={selectedCardEntry}
          matchedCardEntry={matchedCardEntry}
        />
      </li>
    );
  });

  return <ul className="card-container">{emojiEl}</ul>;
}
