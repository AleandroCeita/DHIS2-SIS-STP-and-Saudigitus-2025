import React from "react";
import penfermeiro from "../../components/pictures/penfermeiro.png";
import style from "./styleEnfermeiro.module.css";
export function Enfermeiro() {
  return (
    <>
      <img src={penfermeiro} className="img-fluid" alt="..."></img>
      <br />
      <div className={style.enf}>
        <div className="container text-center">
          <div className="row align-items-end">
            <div className={`col ${style.enf2}`}>
              <br />
              <h4>Efetuar a Triagem do Paciente</h4>
              <div className={style.enf1}>
                <button type="button" className="btn btn-primary">
                  Triagem
                </button>
              </div>
              <br />
            </div>
            <div className="col">

            </div>
            <div className={`col ${style.enf3}`}>
              <br />
              <h4>Validação a Triagem do Paciente</h4>
              <div className={style.enf1}>
                <button type="button" className="btn btn-success">
                  Validar
                </button>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
