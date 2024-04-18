import React, { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervel = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervel);
    };
  }, []);

  function formateTime(){
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    const meridium = time >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    return `${hour}:${minutes}:${seconds} ${meridium}`
  }

  return (
    <div>
      <h1>{formateTime()}</h1>
    </div>
  );
};

export default DigitalClock;
