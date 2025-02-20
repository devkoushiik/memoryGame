import { decodeEntity } from "html-entities";
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
    const matchedCardEntry = selectedCards.find(
      (emoji) => emoji.index === index
    );
    return (
      <li key={index} className="card-item">
        <EmojiButton
          style="btn btn--emoji"
          handleClick={() => handleClick(emoji.name, index)}
          content={decodeEntity(emoji.htmlCode[0])}
          selectedCardEntry={selectedCardEntry}
          matchedCardEntry={matchedCardEntry}
        />
      </li>
    );
  });

  return <ul className="card-container">{emojiEl}</ul>;
}
