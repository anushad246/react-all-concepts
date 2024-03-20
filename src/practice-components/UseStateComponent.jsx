import React, { useState } from "react";

const UseStateComponent = () => {
  const [name, setName] = useState("sandhya dammalapati");
  const [age, setAge] = useState(0);
  const [isStudent, setIsStudent] = useState(false);

  const setNewName = () => {
    setName("anusha dammalapati");
  };

  const setNewAge = () => {
    setAge(age + 1);
  };

  const studentOrNot = () => {
    setIsStudent(!isStudent);
  };

  return (
    <div>
      <h1>
        Name: <span style={{ color: "blue" }}>{name}</span>
      </h1>
      <button onClick={() => setNewName()}>Set Name</button>

      <h1>
        age: <span style={{ color: "blue" }}>{age}</span>
      </h1>
      <button onClick={() => setNewAge()}>Set Age</button>

      <h1>
        Is Student:{" "}
        <span style={{ color: "blue" }}>{isStudent ? "Yes" : "No"}</span>
      </h1>
      <button onClick={() => studentOrNot()}>Is Student</button>
    </div>
  );
};

export default UseStateComponent;
