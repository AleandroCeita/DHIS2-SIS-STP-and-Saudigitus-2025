import {
  Table,
  TableBody,
  TableCell,
  TableCellHead,
  TableFoot,
  TableHead,
  TableRow,
  TableRowHead,
} from "@dhis2/ui";
import React from "react";

export function TableComponent() {
  return (
    <>
      <h1>Processo Único</h1>
      <br />
      <br />
      <div>
        <Table>
          <TableHead>
            <TableRowHead>
              <TableCellHead>SOCIALID</TableCellHead>
              <TableCellHead>Número de Processo</TableCellHead>
              <TableCellHead>Primeiro Nome</TableCellHead>
              <TableCellHead>Apelido</TableCellHead>
              <TableCellHead>Sexo</TableCellHead>
              <TableCellHead>Data de nascimento (idade)</TableCellHead>
              <TableCellHead>Número de Telemóvel</TableCellHead>
            </TableRowHead>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>01</TableCell>
              <TableCell>0101</TableCell>
              <TableCell>Aleandro Ceita</TableCell>
              <TableCell>05/25/1972</TableCell>
              <TableCell>66</TableCell>
              <TableCell>Jawi</TableCell>
              <TableCell>Sofie Hubert</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Kwasi</TableCell>
              <TableCell>Okafor</TableCell>
              <TableCell>08/11/2010</TableCell>
              <TableCell>02/26/1991</TableCell>
              <TableCell>38</TableCell>
              <TableCell>Mokassie MCHP</TableCell>
              <TableCell>Dashonte Clarke</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Siyabonga</TableCell>
              <TableCell>Abiodun</TableCell>
              <TableCell>07/21/1981</TableCell>
              <TableCell>02/06/2007</TableCell>
              <TableCell>98</TableCell>
              <TableCell>Bathurst MCHP</TableCell>
              <TableCell>Unassigned</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
