import React, { useState, createContext} from "react";
import ComponentB from "./ComponentB";
import ComponentD from "./ComponentD";
import ComponentC from "./ComponentC";

export const userContext = createContext();
const ComponentA = () => {
  const [user, setUser] = useState("continue you shopping");
  return (
    <div>
      <h1>ComponentA</h1>
      <userContext.Provider value={user}>
        <ComponentB/>
        <ComponentC/>
        <ComponentD/>
      </userContext.Provider>
    </div>
  );
};

export default ComponentA;
