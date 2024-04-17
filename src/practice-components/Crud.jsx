import React, { useState } from "react";

const Crud = () => {
  const [task, setTask] = useState([
    "item added1",
    "item added2",
    "item added3",
    "item added4",
  ]);
  const [newTask, setNewTask] = useState();

  function handleInputEvent(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    setTask((t) => [...t, newTask]);
    setNewTask("");
  }

  function deleteItem(i) {
    let deletItem = task.filter((item, index) => i !== index);
    setTask(deletItem);
  }

  function moveUp(index) {
    let upDateTask = [...task];
    [upDateTask[0], upDateTask[index]] = [upDateTask[index], upDateTask[0]];
    setTask(upDateTask);
  }

  function moveDown(index) {
    if (index === task.length - 1) {
      return;
    }

    let updatedTask = [...task];
    [updatedTask[index], updatedTask[index + 1]] = [
      updatedTask[index + 1],
      updatedTask[index],
    ];
    setTask(updatedTask);
  }

  return (
    <div>
      <h1> To Do List</h1>
      <input
        type="text"
        placeholder="please enter item"
        value={newTask}
        onChange={(e) => handleInputEvent(e)}
      ></input>
      <button onClick={addTask}>Add Item</button>
      <ol>
        {task.map((item, index) => (
          <li key={index}>
            <span>{item} </span>
            <button onClick={() => deleteItem(index)}>Delete</button>
            <button onClick={() => moveUp(index)}>Move Up</button>
            <button onClick={() => moveDown(index)}>Move Down</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Crud;
