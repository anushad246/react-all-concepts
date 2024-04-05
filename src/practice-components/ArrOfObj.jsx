import React, { useState } from "react";

const ArrOfObj = () => {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };
    setCars((e) => [...e, newCar]);
  }

  function handleRemoveCar(index) {}
  function handleYearChange(event) {
    setCarYear(event.target.value);
  }
  function handleMakeChange(event) {
    setCarMake(event.target.value);
  }
  function handleModelChange(event) {
    setCarModel(event.target.value);
  }

  return (
    <div>
      <h2>List of car objects</h2>
      <ul>
        {cars.map((item, index) => (
          <li key={index}>
            {item.year}
            {item.make}
            {item.model}
          </li>
        ))}
      </ul>
      <input
        type="number"
        value={carYear}
        onChange={(e) => handleYearChange(e)}
        placeholder="enter car make year"
      ></input>
      <input
        type="text"
        value={carMake}
        onChange={(e) => handleMakeChange(e)}
        placeholder="enetr car make"
      ></input>
      <input
        type="text"
        value={carModel}
        onChange={(e) => handleModelChange(e)}
        placeholder="enetr car model"
      ></input>
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
};

export default ArrOfObj;
