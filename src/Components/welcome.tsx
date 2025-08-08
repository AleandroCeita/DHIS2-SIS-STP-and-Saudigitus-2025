import React from "react";
import psis from "../components/pictures/psis.png"

export function Welcome() {
  return (
    <>
    <div className="welcome-container">
        <div>
          <img src={psis} className="img-fluid" alt="..."></img>
        </div>
    </div>;
  </>
  )
}
