import React, { useState } from 'react'

const ArrOfObj = () => {

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date.getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar(){};
    function handleRemoveCar(index){}
    function handleYearChange(event){}
    function handleMakeChange(event){}
    function handleModelChange(event){}

  return (
    <div>
        <h2>List of car objects</h2>
        <ul></ul>
        <input type='number' value={carYear} onChange={(e)=>handleYearChange(e)} placeholder='enter car make year'></input>
        <input type='text' value={carMake} onChange={(e)=>handleMakeChange(e)} placeholder='enetr car make'></input>
        <input type='text' value={carModel} onChange={(e)=>handleModelChange(e)} placeholder='enetr car model'></input>
        <button onClick={handleAddCar}>Add Car</button>
    </div>
  )
}

export default ArrOfObj