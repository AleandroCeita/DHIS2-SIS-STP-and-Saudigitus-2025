import React from "react";
import { Tag } from "@dhis2/ui";
import { TableComponent } from "../../components/TableComponent";
import { FormsMedico } from "../../components/formsMedico/FormsMedico";

export function ProcessoUnico() {
  return (
    <>
      <div>{<TableComponent />}</div>
    </>
  );
}
