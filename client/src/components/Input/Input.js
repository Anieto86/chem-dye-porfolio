import React from "react";
import "./Input.css";

const Input = ({ size = "small", ...rest }) => {
  return <input className={`input ${size}`} {...rest} />;
};

export default Input;
