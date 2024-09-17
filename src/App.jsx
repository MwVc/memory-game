import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({});
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
        setData(data);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
