import React from "react";
import { useParams } from "react-router-dom";

export function Post() {
  const params = useParams();
  const { id } = params;
  return (
    <>
      <h1 style={{ backgroundColor: "yellow" }}>Olá {id}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        maiores excepturi nemo nulla obcaecati labore debitis quos, cupiditate
        odio quasi dolorum atque asperiores qui aperiam nobis repudiandae rem
        quidem officiis!
      </p>
    </>
  );
}
