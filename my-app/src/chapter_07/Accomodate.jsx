import React, { useState, useEffect } from "react";
import "./styles.scss";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

const Accomodate = () => {
  const [isFull, setIsFull] = useState(false);
  const [count, increaseCount, decreaseCount] = useCounter(0);

  useEffect(() => {
    console.log("-------------");
    console.log("useEffect is called");
    console.log(`isFull: ${isFull}`);
  });

  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
    console.log(`Current count value: ${count}`);
  }, [count]);
  return (
    <div className={"container"}>
      <p>{`Total : ${count} `}</p>

      <button onClick={increaseCount} disabled={isFull}>
        Enter
      </button>
      <button onClick={decreaseCount} disabled={count === 0}>
        Out
      </button>

      {isFull && <p className="display">The room is full</p>}
    </div>
  );
};

export default Accomodate;
