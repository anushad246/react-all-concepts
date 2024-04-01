import React, { useState } from "react";

const DisplayColor = () => {
  const [color, setColor] = useState("#FFFFFF");
  const selectedColor = (event) => {
    setColor(event.target.value)
  }

  return(
    <div>
      <p>Color Picker</p>
      <div style={{backgroundColor: color}}>Selected Color: {color}</div>
      <div>Select a color: <input type="color" value={color} onChange={selectedColor}></input></div>
    </div>
  ) ;
};

export default DisplayColor;
