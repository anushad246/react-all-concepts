import React from "react";

const List = (props) => {

  const empCategory = props.category;
  const empData = props.techData;

  const fruites = [
    { id: 1, name: "apple", calories: 145 },
    { id: 2, name: "banana", calories: 100 },
    { id: 3, name: "mango", calories: 95 },
    { id: 4, name: "watermelon", calories: 67 },
    { id: 5, name: "Muskmelon", calories: 200 },
  ];

  //   string sorting

  fruites.sort((a, b) => a.name.localeCompare(b.name));
  fruites.sort((a, b) => b.name.localeCompare(a.name));

  //   number sorting

  fruites.sort((a, b) => a.calories - b.calories);
  fruites.sort((a, b) => b.calories - a.calories);

  let listItem = fruites.map((fruir) => (
    <li key={fruir.id}>
      {fruir.name}: <b>{fruir.calories}</b>
    </li>
  ));

  console.log(listItem, "....list item");

  return (
    <div className="card">
      {/* <h2>Fruits</h2>
      <ul>{listItem}</ul>

      {/* condition to display Low Calorie Fruites  using filter and map methods*/}
      {/* <h3>Low Calorie Fruites</h3> */}
      {/* <ul>
        {fruites
          .filter((fruit) => fruit.calories < 100)
          .map((lowCalFruit) => (
            <li key={lowCalFruit.id}>
              {lowCalFruit.name + ":  " + lowCalFruit.calories}
            </li>
          ))}
      </ul> */}

      {/* condition to display  Heigh Calorie Fruites using filter and map methods*/}
      {/* <h3>Heigh Calorie Fruites</h3>
      <ul>
        {fruites
          .filter((heigCalFru) => heigCalFru.calories >= 100)
          .map((lowCal) => (
            <li key={lowCal.id}>{lowCal.name + ":  " + lowCal.calories}</li>
          ))}
      </ul> */} 

      {/* props data rendering */}
      <h3>{empCategory}</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {empData.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.designation}</td>
              <td>{emp.company}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
