import "./App.css";
import { useState } from "react";

const api = {
  key: "c14978de3e7312f28b0a9a90af612a0e",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    console.log(search);
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      setWeather(result);
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather app</h1>
        <div>
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
        </div>
        {typeof weather.main != 'undefined' ? (
          <>
            <p>{weather.name}</p>
            <p>{weather.main.temp} °C</p>
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </>
        ) : (
          <p>No data available. Please search for a city.</p>
        )}
      </header>
    </div>
  );
}

export default App;
