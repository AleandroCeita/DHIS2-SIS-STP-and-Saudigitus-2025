import React from "react";
import { useState } from "react";

export function UseState1() {
  const [input, setInput] = useState('gazelinha');

  return (
    <>
      <div>
        <p>O que você digitou no input {input}</p>
        <input type="text" value={input}  onChange={event => setInput(event.target.value)} />
      </div>
    </>
  );
}
