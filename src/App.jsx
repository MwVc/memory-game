import { useEffect, useState } from "react";
import "./App.css";
import Container from "./components/Container/container";

function App() {
  const [data, setData] = useState([]);
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
        setData(data);
      } catch (error) {
        console.log("There was an error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return <Container data={data} />;
}

export default App;

function fetchNumbers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldFail = Math.random() > 0.8;
      if (shouldFail) {
        reject("Failed to fetch numbers. Server error!");
      } else {
        const data = Array.from({ length: 12 }, () =>
          Math.floor(Math.random() * 100)
        );
        resolve({ json: () => Promise.resolve(data) });
      }
    }, 500);
  });
}
