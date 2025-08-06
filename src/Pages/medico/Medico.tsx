import React from "react";
import pmedico from "../../components/pictures/pmedico.jpg";
import { Tag } from "@dhis2/ui";
import { TableComponent } from "../../components/TableComponent";
import { FormsMedico } from "../../components/formsMedico/FormsMedico";

export function Medico() {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col">
          {<TableComponent />}
          </div>

          <div className="col-3">
            <div className="card">
              <img src={pmedico} className="img-fluid" alt="..."></img>
              <div className="card-body">
                <Tag bold>
                  <p className="card-text">Registo do Processo Único</p>
                </Tag>
              </div>
              <div>
              <FormsMedico />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
