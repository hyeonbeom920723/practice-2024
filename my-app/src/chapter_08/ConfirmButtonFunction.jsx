import React, { useState } from "react";

const ConfirmButtonFunction = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setIsConfirmed((preIsConfirmed) => !preIsConfirmed);
  };

  return (
    <button onClick={handleConfirm} disabled={isConfirmed}>
      {isConfirmed ? "Confirmed fuc" : "Need to confirm fuc"}
    </button>
  );
};

export default ConfirmButtonFunction;
