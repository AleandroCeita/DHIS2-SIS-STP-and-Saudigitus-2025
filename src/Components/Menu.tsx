import React from "react";
import { Link } from "react-router-dom";

export function Menu() {
  return (
    <>
      <nav>
        <ul style={{ display: "flex", listStyle: "none", gap: "30px" }}>
          <li>
            <Link to="/sis">SIS</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/rss">RSS</Link>
          </li>
          <li>
            <Link to="/post">Post</Link>
          </li>
          <li>
            <Link to="/post/10">Post 10</Link>
          </li>
          <li>
            <Link to="/redirect">Redirect</Link>
          </li>
          <li>
            <Link to="/tablecomponent">Tabela RH SIS</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
