import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function



// second parameter. we can pass an array of dependencies. If we leave it blank, it means it'll run only on initial render


//Use effect is used when we want to setup side effects and that is some work outside the component. Example: fetching data, listening to events

const UseEffectBasics = () => {

  const [value, setValue] = useState(0)

  

  useEffect(() => {
console.log("call useEffect")

if(value >= 1) {
document.title = `New messages(${value})`
}

  }, [value])

  useEffect(() => {
    console.log("hello world")
  }, [])

  console.log("render component")


  return (
<>
<h1>{value}</h1>
<button className="btn" onClick={() => setValue(value + 1)}>Click me</button>
</>

  ) 
  
};

export default UseEffectBasics;