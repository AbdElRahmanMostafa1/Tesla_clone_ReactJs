import React from "react";
import "./Button.css";

const Button = ({ children, className, ...props }) => {
  const btnClassNames = `btn ${className}`;
  return (
    <button className={btnClassNames} {...props}>
      {children}
    </button>
  );
};

export default Button;
