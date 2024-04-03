import React, { useState } from "react";

const UpdateArrayInState = () => {
  const [fruits, setFruits] = useState(["apple", "banana", "mango"]);

  function addFruit() {
    const newFruit = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    setFruits((f) => [...f, newFruit]);
  }

  function removeFruit(index) {
    setFruits(fruits.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h3>Fruite List</h3>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index} onClick={() => removeFruit(index)}>
            {fruit}
          </li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter Fruit Name" />
      <button onClick={addFruit}>add your fruit</button>
    </div>
  );
};

export default UpdateArrayInState;
