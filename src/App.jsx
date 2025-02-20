import { useEffect, useState } from "react";
import Form from "./components/Form";
import MemoryCard from "./components/MemoryCard";
export default function App() {
  const [isGameOn, setIsGameOn] = useState(false);
  const [emojidata, setEmojidata] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  console.log(isGameOver);

  useEffect(() => {
    if (
      selectedCards.length === 2 &&
      selectedCards[0].name === selectedCards[1].name
    ) {
      setMatchedCards((prevMatchedCards) => [
        ...prevMatchedCards,
        ...selectedCards,
      ]);
    }
  }, [selectedCards]);

  useEffect(() => {
    if (emojidata.length && matchedCards.length === emojidata.length) {
      setIsGameOver(true);
    }
  }, [matchedCards]);

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
      const dataSlice = await getDataSlice(data);
      const emojisArray = await getEmojisArray(dataSlice);
      setEmojidata(emojisArray);
      setIsGameOn(true);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function getDataSlice(data) {
    let randomIndices = getRandomIndices(data);
    let dataSample = randomIndices.map((index) => data[index]);
    return dataSample;
  }

  function getRandomIndices(data) {
    const indices = [];
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * data.length);
      if (!indices.includes(randomIndex)) {
        indices.push(randomIndex);
      } else {
        i--;
      }
    }
    return indices;
  }

  // Fisher-Yates shuffle algorithm
  async function getEmojisArray(data) {
    const duplicatedData = [...data, ...data];
    for (let i = duplicatedData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [duplicatedData[i], duplicatedData[j]] = [
        duplicatedData[j],
        duplicatedData[i],
      ];
    }
    return duplicatedData;
  }

  function turnCard(emojiName, index) {
    const selectedCardEntry = selectedCards.find(
      (emoji) => emoji.index === index
    );
    if (!selectedCardEntry && selectedCards.length < 2) {
      setSelectedCards([...selectedCards, { name: emojiName, index }]);
    } else if (!selectedCardEntry && selectedCards.length === 2) {
      setSelectedCards([{ name: emojiName, index }]);
    }
  }

  return (
    <main>
      <h1>Memory</h1>
      {!isGameOn && <Form handleSubmit={startGame} />}
      {isGameOn && (
        <MemoryCard
          data={emojidata}
          handleClick={turnCard}
          selectedCards={selectedCards}
          matchedCards={matchedCards}
        />
      )}
    </main>
  );
}
