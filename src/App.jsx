import { useEffect, useState } from "react";
import "./App.css";
import Container from "./components/Container/Container";
import { fetchNumbers } from "./utilities";

function App() {
  const [data, setData] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch(
    //       "https://api.giphy.com/v1/gifs/trending?api_key=dWOvpluH6YNYSVI1sX7BHZfuq64sVBWF&limit=12"
    //     );
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! Status: ${response.status}`);
    //     }
    //     const data = await response.json();
    //     setData(data.data);
    //   } catch (error) {
    //     console.log("Error fetching data: ", error);
    //   }
    // };
    // fetchData();

    const fetchData = async function () {
      try {
        const response = await fetchNumbers();
        const data = await response.json();
        setData(data.map((object) => ({ ...object, isClicked: false })));
      } catch (error) {
        console.log("There was an error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h2>Score: {score}</h2>
      <h2>High Score: {highScore}</h2>
      <Container
        data={data}
        setData={setData}
        score={score}
        setScore={setScore}
        setHighScore={setHighScore}
      />
    </>
  );
}

export default App;
