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
    <div className="App d-flex flex-column justify-content-between">
      <nav className="bg-dark text-white">
        <div className="container d-flex flex-column align-items-center">
          <h1>Memory Game</h1>
          <div>
            <h3>Current Score: {score}</h3>
            <h3>High Score: {highScore}</h3>
          </div>
        </div>
      </nav>
      <Container
        data={data}
        setData={setData}
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
      />
      <footer className="bg-dark text-white p-4">
        <div className="container d-flex flex-column align-items-center">
          <h2>Overview</h2>
          <h5>
            The goal of the game is to click on a card without selecting the
            same card twice. Each time a card is clicked, the deck is shuffled.
            If a card is clicked twice, the game resets the score. The game also
            keeps track of the highest score achieved in the current session.
          </h5>
        </div>
      </footer>
    </div>
  );
}

export default App;
