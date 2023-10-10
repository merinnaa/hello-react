import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  // your code here
  return(
    <button onClick={props.onClick}>{props.children}</button>
  )
};

const Application = () => {
const [name, setName] = useState("Luwam")
  // your code here

  const reset = (e) => {
    console.log("reset");
    // your code here
    setName('');
  };

  return (
    <main>
      <input 
       value={name}
       onChange={(event) => setName(event.target.value)}
      placeholder='type your name'></input>
      <Button onClick={reset}>Reset</Button>
      {name && <h1 >Hello {name}</h1>}
      
      
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
