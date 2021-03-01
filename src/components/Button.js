import React from "react";

const Button = ({ primary = true, className = "", ...rest }) => {
  return (
    <button
      type="button"
      {...rest}
      className={`outline-none h-10 w-36 text-center select-none rounded-xl font-bold ${
        primary
          ? "bg-blue-500 hover:bg-blue-501 active:bg-blue-502"
          : "bg-red-500 hover:bg-red-501 active:bg-red-502"
      }  transition cursor-pointer ${className}`}
    ></button>
  );
};

export default Button;
