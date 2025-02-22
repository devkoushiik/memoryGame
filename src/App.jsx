import { useEffect, useState } from "react";
import Form from "./components/Form";
import MemoryCard from "./components/MemoryCard";
import AssistiveTechInfo from "./components/AssistiveTechInfo";
import GameOver from "./components/GameOver";
import ErrorCard from "./components/ErrorCard";
export default function App() {
  const initialFormData = {
    category: "animals-and-nature",
    number: "10",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [isGameOn, setIsGameOn] = useState(false);
  const [emojisData, setEmojisData] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [areAllCardsMatched, setAreAllCardsMatched] = useState(false);
  const [isError, setIsError] = useState(false);
  console.log(isError);

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
    if (emojisData.length && matchedCards.length === emojisData.length) {
      setAreAllCardsMatched(true);
    }
  }, [matchedCards]);

  async function startGame(e) {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://emojihub.yurace.pro/api/all/category/${formData.category}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const dataSlice = await getDataSlice(data);
      const emojisArray = await getEmojisArray(dataSlice);
      setEmojisData(emojisArray);
      setIsGameOn(true);
    } catch (error) {
      setIsError(true);
      console.error("Error:", error);
    }
  }

  async function getDataSlice(data) {
    let randomIndices = getRandomIndices(data, formData.number);
    let dataSample = randomIndices.map((index) => data[index]);
    return dataSample;
  }

  function getRandomIndices(data, numberOfEmojis) {
    const indices = [];
    for (let i = 0; i < numberOfEmojis / 2; i++) {
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
    console.log("clicked");
    const selectedCardEntry = selectedCards.find(
      (emoji) => emoji.index === index
    );
    if (!selectedCardEntry && selectedCards.length < 2) {
      setSelectedCards([...selectedCards, { name: emojiName, index }]);
    } else if (!selectedCardEntry && selectedCards.length === 2) {
      setSelectedCards([{ name: emojiName, index }]);
    }
  }

  // reset game
  function resetGame() {
    setIsGameOn(false);
    setEmojisData([]);
    setSelectedCards([]);
    setMatchedCards([]);
    setAreAllCardsMatched(false);
  }

  // reset error
  function resetError() {
    setIsError(false);
  }

  return (
    <main>
      <h1>Memory Game</h1>

      {!isGameOn && !isError && <Form handleSubmit={startGame} />}

      {isGameOn && !areAllCardsMatched && (
        <AssistiveTechInfo
          emojisData={emojisData}
          matchedCards={matchedCards}
        />
      )}

      {areAllCardsMatched && <GameOver resetGameHandler={resetGame} />}

      {isGameOn && (
        <MemoryCard
          data={emojisData}
          handleClick={turnCard}
          selectedCards={selectedCards}
          matchedCards={matchedCards}
        />
      )}

      {isError && <ErrorCard restartHandler={resetError} />}
    </main>
  );
}
