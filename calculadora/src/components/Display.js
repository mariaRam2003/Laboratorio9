import React from "react";
import "./Display.css";

const Display = ({ input }) => {
  const isNegative = input.startsWith("-");

  return (
    <div className={`input ${isNegative ? "negativo" : ""}`}>
      {input}
    </div>
  );
};

export default Display;