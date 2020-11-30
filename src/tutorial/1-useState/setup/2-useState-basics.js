import React, { useState } from "react";

const UseStateBasics = () => {
  const [title, setTitle] = useState("useState basic example");
  function handleChange() {
    title === "useState basic example"
      ? setTitle("new title")
      : setTitle("useState basic example");
  }
  return (
    <>
      <h2>{title}</h2>
      <button onClick={handleChange}>Change title</button>
    </>
  );
};

export default UseStateBasics;
