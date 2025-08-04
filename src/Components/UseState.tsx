import React from "react";
import { useState } from "react";

export function UseState() {
  const [likes, setLikes] = useState(0);

  function DarOLike() {
    setLikes((prelikes) => prelikes + 1);
    console.log(likes);
  }
  return (
    <>
      <div>
        <p>Quantidade de Likes: {likes}</p>
        <button onClick={DarOLike}>Dar like</button>
      </div>
    </>
  );
}
