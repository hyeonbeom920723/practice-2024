import React from "react";

const clock = () => {
  return (
    <div>
      <h1>{new Date().toLocaleTimeString()}</h1>
    </div>
  );
};

export default clock;
