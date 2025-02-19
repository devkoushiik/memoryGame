import { useState } from "react";
import Form from "./components/Form";
import MemoryCard from "./components/MemoryCard";
export default function App() {
  const [isGameOn, setIsGameOn] = useState(false);
  const [emojidata, setEmojidata] = useState([]);

  async function startGame(e) {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://emojihub.yurace.pro/api/all/category/animals-and-nature"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const dataSample = data.slice(0, 5);
      setEmojidata(dataSample);
      setIsGameOn(true);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  function turnCard() {
    console.log("Memory card clicked");
  }

  return (
    <main>
      <h1>Memory</h1>
      {!isGameOn && <Form handleSubmit={startGame} />}
      {isGameOn && <MemoryCard data={emojidata} handleClick={turnCard} />}
    </main>
  );
}
