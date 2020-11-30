import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {

  const  [text, setText] = useState("");

  const [isError, setIsError] = useState(false);

  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  
  

  return <>
  {/* <h1>{firstValue}</h1>
  <h2> value: {secondValue} </h2> */}

  {/* Or operator: if the first element is true, we display the first one. If not, we display the second one. */}

  <h1>  {text || "Ale Neme"}    </h1>

  <button className="btn" onClick={()=> setIsError(!isError)}>toggle error</button>
{/* 
  The and operator behaves differently: if the first element is true, we display the second element. */}
  
  {isError && <h1>Error...</h1>}
  
  {/* {text && <h1>Hello World</h1> } */}
  {isError ? <h2>There's an error...</h2> : <h1>There aren't any errors, pal</h1>}


  </>;
};

export default ShortCircuit;
