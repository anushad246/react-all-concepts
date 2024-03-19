import React from "react";
import PropTypes from "prop-types";

const Student = (props) => {
  console.log(props, "studennt component props");
  return (
    <div className="student">
      <div>Name: {props.name}</div>
      <div>Age: {props.age}</div>
      <div>Is Student: {props.isStudent ? "Yes" : "No"}</div>
    </div>
  );
};

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

Student.defaultProps = {
  name: "sumit",
  age: 28,
  isStudent: false,
};

export default Student;
