import React from "react";

const ClickEventButton = () => {
  let count = 0;

  // <span class="emoji emoji3">😄❤️👩‍💻 😨🤣😎🤔👩😍</span>

  const clickHandler = () => console.log("hello anusha");
  const stopClickHandler = (name) => console.log(`${name} stop clicking me`);

  const restrickClicks = (name) => {
    if (count >= 3) {
      console.log(`${name} stop clicking me!`);
    } else {
      count += 1;
      console.log(`${name} you clicked me ${count} time`);
    }
  };

  const changebtntext = (e) => e.target.textContent = "Button Text Changed 😎"

  return (
    <div>
      <button className="click-evnet-btn" onClick={clickHandler}>
        Click Me 😀
      </button>
      <button
        className="stop-click-evnet-btn"
        onClick={() => stopClickHandler("anusha")}
      >
        Stop Clicking Me 😨
      </button>
      <button
        className="restrict-click-evnet-btn"
        onClick={() => restrickClicks("anusha")}
      >
        Click Me
      </button>

      <button
        className="chng-btn-txt"
        onClick={(e) => changebtntext(e)}
      >
        Change Button Text 🤣
      </button>
    </div>
  );
};

export default ClickEventButton;
