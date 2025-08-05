import React from "react";
import { UseState } from "../Components/UseState";
import { UseState1 } from "../Components/UseState1";
import { Footer } from "../Components/Footer";
export function Login() {
  return (
    <>
      <div>
        <h1 style={{ backgroundColor: 'red'}}>Welcome to Login</h1>
      </div>
      <UseState/>
      <UseState1/>
      
    </>
  );
}
