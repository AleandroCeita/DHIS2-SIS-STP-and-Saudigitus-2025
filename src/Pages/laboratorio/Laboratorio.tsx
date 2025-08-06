import React from "react";
import { FormsMedico } from "../../components/formsMedico/FormsMedico";
import { Tag } from "@dhis2/ui";
import pmedico from "../../components/pictures/pmedico.jpg";

export function Laboratorio() {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <div className="card">
              <img src={pmedico} className="img-fluid" alt="..."></img>
              <div className="card-body">
                <Tag bold>
                  <p className="card-text">Registo doProcesso Único</p>
                </Tag>
              </div>
              <div>
                <FormsMedico />
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
}
