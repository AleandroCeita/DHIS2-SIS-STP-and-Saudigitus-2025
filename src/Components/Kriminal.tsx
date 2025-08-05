import React from "react";
import { useState } from "react";
export function Kriminal() {
  const [gazela, setGazela] = useState(0);

  function AoClicar () {
    setGazela((gazela) => gazela + 1)
    console.log(gazela)
  }
  
    return (
        <>
    <h2>Eu Kriminal tenho quantas gazelas: {gazela}</h2>
    <button onClick={AoClicar}>Adicionar Gazela</button>
    </>
  )
}
