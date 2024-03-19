import React, { useState } from "react";

const Signup = (props) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("M");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = (event) => {
    alert(`Name: ${name}, Gender: ${gender}`);
    event.preventDefautl();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleChangeName} />
      </label>
      <br />
      <label>
        Gender:
        <select value={gender} onChange={handleChangeGender}>
          <option value="M">M</option>
          <option value="F">F</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Signup;
