import "./App.css";
import Weather from "./weather";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <p>
        <a
          href="https://github.com/Ofentse-Ngatane"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>{" "}
        by Ofentse Ngatane
      </p>
    </div>
  );
}

export default App;
