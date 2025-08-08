import React from "react";
import { TableComponent } from "../../components/TableComponent";
import { TableComponent1 } from "../../components/TableComponent1";

export function ProcessoUnico() {
  return (
    <>
      <div>{<TableComponent />}</div>
      <div>{<TableComponent1 />}</div>
    </>
  );
}
