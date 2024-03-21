import React from "react";

const scaleNames = {
  c: "Celcius",
  f: "Fahrenheight",
};

const TemperatureInput = (props) => {
  const handleChange = (event) => {
    props.onTemperatureChange(event.target.value);
  };

  return (
    <fieldset>
      <legend>Type temperature(Scale:{scaleNames[props.scale]})</legend>
      <input value={props.temperature} onChange={handleChange} />
    </fieldset>
  );
};

export default TemperatureInput;
