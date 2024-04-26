import { useState, useEffect, useRef } from "react";

const UseReference = () => {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    console.log("updating fine")
    count.current = count.current + 1;
  });

  return (
    <div>
     <h2>UseReference</h2>
     <h3>Render Count: {count.current}</h3>
    <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
    </div>
  );
};

export default UseReference;
