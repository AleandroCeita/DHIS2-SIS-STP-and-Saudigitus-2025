import React from "react";
import { UseState } from "../components/UseState";
import { UseState1 } from "../components/UseState1";
import { Footer } from "../components/Footer";
import { Kriminal } from "../components/Kriminal";
import { Menu } from "../components/Menu";

export function Login() {
  return (
    <>
      <div>
        <h1 style={{ backgroundColor: "red" }}>Welcome to Login</h1>
      </div>
      <UseState />
      <UseState1 />
      <Kriminal/>
      
    </>
  );
}
