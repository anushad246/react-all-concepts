import React, { useState, useContext } from "react";
import { userContext } from "./ComponentA";

const ComponentB = () => {
  let componentaUserContext = useContext(userContext);
  return (
    <div>
      <h2>ComponentB</h2>
      <h2>{componentaUserContext}</h2>
    </div>
  );
};

export default ComponentB;
