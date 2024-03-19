import React from "react";
import PropTypes from "prop-types";



const UserGreetings = (props) => {
  // if condition base returning xml

  //   if (props.islogedIn) {
  //     return <div className="user-greetings-welcom">Welcome {props.name}</div>;
  //   } else {
  //     return <div className="user-greetings-login"> Please Log in to continue</div>;
  //   }

  //   ternary operator base returning xml

  return props.islogedIn ? (
    <div className="user-greetings-welcom">Welcome {props.name}</div>
  ) : (
    <div className="user-greetings-login"> Please Log in to continue</div>
  );
};

UserGreetings.propTypes = {
  islogedIn: PropTypes.bool,
  name: PropTypes.string,
};

export default UserGreetings;
