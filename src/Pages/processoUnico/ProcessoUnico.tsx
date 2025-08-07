import React from "react";
import { Tag } from "@dhis2/ui";
import { TableComponent } from "../../components/TableComponent";

import { FormsMedico } from "../../components/formsMedico/FormsMedico";
import { TableComponent1 } from "../../components/TableComponent1";

export function ProcessoUnico() {
  return (
    <>
      <div>{<TableComponent />}</div>
      <div>{<TableComponent1 />}</div>
    </>
  );
}
