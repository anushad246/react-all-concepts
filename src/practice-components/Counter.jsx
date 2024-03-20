import React, { useState } from "react";

const Counter = () => {
  const btnStyle = {
    display: "flex",
    flexDirection: "row",
  };

  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const resetCount = () => {
    setCount(0);
  };

  return (
    <div>
      <h1 style={{ color: "blue" }}>{count}</h1>
      <div className={btnStyle}>
        <button className="click-evnet-btn" onClick={() => increaseCount()}>
          Increase Count
        </button>
        <button
          className="stop-click-evnet-btn"
          onClick={() => decreaseCount()}
        >
          Decreace Count
        </button>
        <button className="reset-btn" onClick={() => resetCount()}>
          Reset Count
        </button>
      </div>
    </div>
  );
};

export default Counter;
