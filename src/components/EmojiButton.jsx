const EmojiButton = ({ style, handleClick, content }) => {
  return (
    <button className={style} onClick={handleClick}>
      {content}
    </button>
  );
};
export default EmojiButton;
