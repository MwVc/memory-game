import { useEffect, useState } from "react";
import "./App.css";
import Container from "./components/Container/Container";

function App() {
  const [data, setData] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.giphy.com/v1/gifs/trending?api_key=dWOvpluH6YNYSVI1sX7BHZfuq64sVBWF&limit=12"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const mappedData = data.data.map((object) => ({
          ...object,
          isClicked: false,
        }));
        setData(mappedData);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app">
      <nav className="nav">
        <h1>Memory Card Game</h1>
        <h3>High Score: {highScore}</h3>
        <h3>Score: {score}</h3>
      </nav>
      <div className="game">
        <Container
          data={data}
          setData={setData}
          score={score}
          setScore={setScore}
          highScore={highScore}
          setHighScore={setHighScore}
        />
        <div className="overview">
          <h3>Overview</h3>
          <p>
            The goal of the game is to click on a card without selecting the
            same card twice. Each time a card is clicked, the deck is shuffled.
            If a card is clicked twice, the game resets the score. The game also
            keeps track of the highest score achieved in the current session.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
