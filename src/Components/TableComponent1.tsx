import { useDataQuery } from "@dhis2/app-runtime";
import {
  DataTableColumnHeader,
  Table,
  TableBody,
  TableCell,
  TableCellHead,
  TableHead,
  TableRow,
  TableRowHead,
} from "@dhis2/ui";
import React from "react";

// Interface do retorno da API
interface QueryResults {
    results: {
        name: string
        id: string
        programTrackedEntityAttributes: {
            trackedEntityAttribute: {
                id: string
                displayName: string
                valueType: string
                optionSet?: {
                    options: {
                        code: string
                        name: string
                    }[]
                }
            }
        }[]
    }
}

// Query para buscar dados reais do programa
const query = {
  results: {
    resource: "programs",
    id: "rTmLXWgtUj2",
    params: {
      fields: [
        "id,name",
        "programTrackedEntityAttributes[trackedEntityAttribute[id,displayName,valueType,optionSet[options[code,name]]]]",
      ],
    },
  },
};

// Componente da Tabela
export const TableComponent1 = () => {
  const { loading, error, data } = useDataQuery<QueryResults>(query);

  if (error) return <span>ERROR: {error.message}</span>;
  if (loading) return <span>Loading...</span>;

  const rows = data?.results.programTrackedEntityAttributes || [];

  const getAttributeValue = (attributes: any[], label: string): string => {
    return attributes.find((attr) => attr.displayName === label)?.value || "—";
  };
console.log(rows);
  return (
    <>
      <h1>Processo Único</h1>
      <br />
      <div>
        <Table>
          <TableHead>
            <TableRowHead>
                {
                            data?.results.programTrackedEntityAttributes.map((attribute) => (
                                <DataTableColumnHeader key={attribute.trackedEntityAttribute.id}>
                                    {attribute.trackedEntityAttribute.displayName}
                                </DataTableColumnHeader>
                            ))  
                        }

            </TableRowHead>
          </TableHead>
          <TableBody>

       
          </TableBody>
        </Table>
      </div>
    </>
  );
};
