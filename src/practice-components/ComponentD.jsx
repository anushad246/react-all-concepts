import React, { useContext } from "react";
import { userContext } from "./ComponentA";
const ComponentD = () => {
  let user = useContext(userContext);
  return (
    <div>
      <h4>ComponentD</h4>
      <h4>{user}</h4>
    </div>
  );
};

export default ComponentD;
