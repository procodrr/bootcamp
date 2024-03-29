import React, { useState, useEffect } from "react";
// import "./styles.css";

export default function App() {
  const [press, setPress] = useState(false);
  const [pressed, setPressed] = useState(false);

  let initialRender=true;
  useEffect(() => {
    console.log('hii');
    if(initialRender){
      initialRender=false;
    } else{
      setPressed(true);
      console.log('hii');
    }
  }, [press]);
  
  return (
    <div className="App">
      {pressed && <div>The button has been pressed!</div>}
      <button
        onClick={() => {
          setPress(true);
        }}
      >
        Click!
      </button>
    </div>
  );
}