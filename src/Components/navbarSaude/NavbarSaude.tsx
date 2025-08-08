import React from "react";
import { Link } from "react-router-dom";
import style from "./styleNavbar.module.css";

export function NavbarSaude() {
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-body-tertiary ${style.sis}`} >
        <div className="container-fluid">
          <li className="navbar-brand">
            <Link to="/enfermeiro">Enfermeiro</Link>
          </li>
          <li className="navbar-brand">
            <Link to="/laboratorio">Laboratório</Link>
          </li>
          <li className="navbar-brand">
            <Link to="/processounico">Processo Único</Link>
          </li>
          <li className="navbar-brand">
            <Link to="/formapp">Formulário Processo Único</Link>
          </li>
        </div>
      </nav>
    </>
  );
}
