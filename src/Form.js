import React from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.handleFormSubmit}>
      <input
        type="text"
        value={props.value}
        onChange={props.handleInputChange}
        placeholder="Wyszukaj..."
      ></input>
      <button>Sprawdź</button>
    </form>
  );
};

export default Form;
