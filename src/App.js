import React, { useState } from "react";
import Form from "./Form";
import Weather from "./Weather";
import "./App.css";

const App = () => {
  const [value, setValue] = useState("");
  const [city, setCity] = useState(null);
  const [temp, setTemp] = useState(null);
  const [wind, setWind] = useState(null);
  const [pressure, setPressure] = useState(null);
  const [error, setError] = useState(false);
  const API = `https://danepubliczne.imgw.pl/api/data/synop/station/${value.toLowerCase()}`;

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch(API)
      .then((reposne) => {
        if (reposne.ok) {
          return reposne;
        }
        throw Error("Coś poszło nie tak");
      })
      .then((res) => res.json())
      .then((data) => {
        setError(false);
        setCity(data.stacja);
        setTemp(data.temperatura);
        setWind(data.predkosc_wiatru);
        setPressure(data.cisnienie);
      })
      .catch((error) => {
        setError(true);
        setCity(value);
      });
  };

  return (
    <div className="app">
      <Form
        value={value}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />
      <Weather
        city={city}
        temp={temp}
        wind={wind}
        pressure={pressure}
        error={error}
        value={value}
      />
    </div>
  );
};
export default App;
