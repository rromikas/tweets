import { useEffect, useState } from "react";
import { render } from "react-dom";

const StatefullValue = ({ value, loadValue, time }) => {
  const [renderValue, setRenderValue] = useState("");
  useEffect(() => {
    let timeout;
    if (!renderValue) {
      setRenderValue(value);
    } else {
      setRenderValue(loadValue);
      timeout = setTimeout(() => {
        setRenderValue(value);
      }, time);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [value]);
  console.log("render value", renderValue);
  return renderValue;
};

export default StatefullValue;
