import React, { useState } from "react";
import { useEffect } from "react";

const UseEffects = () => {
  const [count, setCount] = useState(0);
  const [colr, setColor] = useState("green")
  const addCount = () => setCount(count + 1);
  const reduceCount = () => count > 0 ? setCount(count - 1) : 0;
  const changeColor = () => colr === "green" ? setColor("red") : setColor("green")

  useEffect(()=>{
    document.title = `count: ${count}`
  }, [count, colr])
  return (
    <div>
      <h3 style={{color:colr}}>{count}</h3>
      <button onClick={addCount}>Add Count</button>
      <button onClick={reduceCount}>decre Count</button>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};
export default UseEffects;
