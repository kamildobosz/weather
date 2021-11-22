import React from "react";

const Weather = (props) => {
  let content = null;

  if (!props.error && props.city) {
    console.log("ok");
    content = (
      <div>
        <p className="city">{props.city}</p>
        <p className="temp">{props.temp} &#176;C</p>
        <p className="wind">Wiatr: {props.wind}m/s</p>
        <p className="pressure">Ciśnienie: {props.pressure} hPa</p>
      </div>
    );
  }

  return (
    <div className="weather">
      {props.error ? (
        <p className="error">
          Nie mamy w bazie miasta <strong>{props.city}</strong>. Spróbuj wpisać
          nazwę bez polskich znaków.
        </p>
      ) : (
        content
      )}
    </div>
  );
};

export default Weather;
