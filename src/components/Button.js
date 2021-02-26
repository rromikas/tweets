import React from "react";

const Button = ({ primary = true, ...rest }) => {
  return (
    <div
      {...rest}
      className={`py-.05 px-4 rounded font-bold bg-${
        primary ? "blue" : "red"
      }-500 transition cursor-pointer select-none hover:bg-${
        primary ? "blue" : "red"
      }-501 active:bg-${primary ? "blue" : "red"}-502`}
    ></div>
  );
};

export default Button;
