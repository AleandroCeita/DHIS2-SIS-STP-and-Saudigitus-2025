import React from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function Redirect() {
  const [time, setTime] = useState(10);
  const timeout = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {
      setTime((t) => t - 1);
    }, 1000);

    if (time <= 0) {
      navigate("/sis");
    }
    return () =>{
        clearTimeout(timeout.current);
    }
  }, [time]);

  return (
    <>
      <div>
        <h1>Get out of here in: {time}</h1>
      </div>
    </>
  );
}
