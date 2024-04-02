import React, { useState } from "react";

const UpdateObjectInState = () => {
  const [student, setStudent] = useState({
    name: "jaya",
    age: 5,
    gender: "female",
  });

  const setNewName = (event) => {
    setStudent(e => ({ ...e, name: event.target.value }));
  };

  const setNewAge = (event) => {
    setStudent(e => ({ ...e, age: event.target.value }));
  };

  const setNewGender = (event) => {
    setStudent(e => ({ ...e, gender: event.target.value }));
  };

  return (
    <div>
      <h4>Update Object In useState</h4>
      <div>
        please enter name:
        <span>
          <input type="text" onChange={(e)=>setNewName(e)} value={student.name}></input>
        </span>
      </div>
      <div>
        please enter age:
        <span>
          <input type="number" onChange={(e)=>setNewAge(e)} value={student.age}></input>
        </span>
      </div>
      <div>
        please enter gender:
        <span>
          <input type="text" onChange={(e)=>setNewGender(e)} value={student.gender}></input>
        </span>
      </div>
      <h3>Name: {student.name}</h3>
      <h3>Age:{student.age}</h3>
      <h3>Gender: {student.gender}</h3>
    </div>
  );
};

export default UpdateObjectInState;
