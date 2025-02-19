import { decodeEntity } from "html-entities";
import EmojiButton from "./EmojiButton";
export default function MemoryCard({ handleClick, data }) {
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

  const emojiEl = data.map((emoji, index) => (
    <li key={index} className="card-item">
      <EmojiButton
        style="btn btn--emoji"
        handleClick={() => handleClick(emoji.name, index)}
        content={decodeEntity(emoji.htmlCode[0])}
      />
    </li>
  ));

  return <ul className="card-container">{emojiEl}</ul>;
}
