import React, { useState, useEffect } from 'react';

// cleanup function we have an o`ptional return function inside useEffect. It's a good practice to add a clean up function when you set up a side effect.
// second argument

const UseEffectCleanup = () => {

  const [size, setSize] = useState(window.innerWidth)

  function checkSize() {
    setSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", checkSize)

    return () => {
      window.removeEventListener("resize", checkSize)
    }
  }, [])


  return <>
  <h1>window</h1>
  <h2>{size} px</h2>
  
 </>;
};

export default UseEffectCleanup;
