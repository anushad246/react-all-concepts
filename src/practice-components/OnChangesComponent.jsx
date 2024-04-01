import React, { useState } from "react";

const OnChangesComponent = () => {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [selectedOption, setSelectedOption] = useState("volvo");
  const [radioHandler, setradioHandler] = useState("HTML");

  const changeName = (name) => {
    setName(name.target.value);
  };

  const changeDescription = (desc) => {
    setDescription(desc.target.value);
  };

  const selectedOptions = (val) => {
    setSelectedOption(val.target.value);
  };

  const selectedRadioHandler = (radio) => {
    setradioHandler(radio.target.value);
  };

  return (
    <div>
      <h1>
        Name: <span style={{ color: "blue" }}>{name}</span>
      </h1>
      <input onChange={(e) => changeName(e)} value={name}></input>

      <h1>
        Description: <span style={{ color: "blue" }}>{description}</span>
      </h1>
      <textarea onChange={(dsc) => changeDescription(dsc)}></textarea>

      <h1>
        SelectedOption: <span style={{ color: "blue" }}>{selectedOption}</span>
      </h1>
      <select onChange={(val) => selectedOptions(val)}>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>

      <p>selected course: {radioHandler}</p>
      <div style={{ marginTop: "15px" }}>
        <input
          type="radio"
          value="HTML"
          id="html"
          checked={radioHandler === "HTML"}
          onClick={(radio) => selectedRadioHandler(radio)}
        ></input>
        <label for="html">HTML</label>
        <br></br>
        <input
          type="radio"
          value="CSS"
          id="css"
          checked={radioHandler === "CSS"}
          onClick={(radio) => selectedRadioHandler(radio)}
        ></input>
        <label for="css">CSS</label>
        <br></br>
        <input
          type="radio"
          value="Javascript"
          id="javascript"
          checked={radioHandler === "Javascript"}
          onClick={(radio) => selectedRadioHandler(radio)}
        ></input>
        <label for="javascript">Javascript</label>
        <br></br>
      </div>
    </div>
  );
};

export default OnChangesComponent;
