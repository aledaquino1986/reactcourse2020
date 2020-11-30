import React from "react";

const ErrorExample = () => {
  const [title, setTitle] = React.useState("useState error example");

  function handleClick() {
    setTitle("Hola bebe");
  }

  return (
    <>
      <h2>{title}</h2>
      <button className="btn" onClick={handleClick}>
        Change title
      </button>
    </>
  );
};

export default ErrorExample;
