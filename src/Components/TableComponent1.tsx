import { useDataQuery } from "@dhis2/app-runtime";
import {
  DataTableCell,
  DataTableColumnHeader,
  DataTableRow,
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
  programs: {
    name: string;
    id: string;
    programTrackedEntityAttributes: {
      trackedEntityAttribute: {
        id: string;
        displayName: string;
        valueType: string;
        optionSet?: {
          options: {
            code: string;
            name: string;
          }[];
        };
      };
    }[];
  };
trackedEntityInstances: {
        trackedEntityInstances: {
            trackedEntityInstance: string
            attributes: {
                value: string
                attribute: string
            }[]
        }[]
    }
}

// Query para buscar dados reais do programa
const query = {
  programs: {
    resource: "programs",
    id: "rTmLXWgtUj2",
    params: {
      fields: [
        "id,name",
        "programTrackedEntityAttributes[trackedEntityAttribute[id,displayName,valueType,optionSet[options[code,name]]]]",
      ],
    },
  },
  trackedEntityInstances: {
    resource: "trackedEntityInstances",
    params: {
      program: "rTmLXWgtUj2",
      ou: "cIXhhPt1rIQ",
      order: "created:desc",
      totalPages: true,
      fields: ["trackedEntityInstance,attributes[value,attribute]"],
    },
  },
};

// Componente da Tabela
export const TableComponent1 = () => {
  const { loading, error, data } = useDataQuery<QueryResults>(query);

  if (error) return <span>ERROR: {error.message}</span>;
  if (loading) return <span>Loading...</span>;

  const rows = data?.programs.programTrackedEntityAttributes || [];

  const getAttributeValue = (attributes: any[], label: string): string => {
    return attributes.find((attr) => attr.displayName === label)?.value || "—";
  };
  console.log(data);
  return (
    <>
      <h1>Processo Único</h1>
      <br />
      <div>
        <Table>
          <TableHead>
            <TableRowHead>
              {data?.programs.programTrackedEntityAttributes.map(
                (attribute) => (
                  <DataTableColumnHeader
                    key={attribute.trackedEntityAttribute.id}
                  >
                    {attribute.trackedEntityAttribute.displayName}
                  </DataTableColumnHeader>
                )
              )}
            </TableRowHead>
          </TableHead>
          <TableBody>
                          {
                        data?.trackedEntityInstances && data?.trackedEntityInstances?.trackedEntityInstances.map((instance) => (
                            <DataTableRow key={instance.trackedEntityInstance}>
                                {
                                    data.programs.programTrackedEntityAttributes.map((attr) => (
                                        <DataTableCell key={attr.trackedEntityAttribute.id}>
                                            {
                                                instance.attributes.find(a => a.attribute === attr.trackedEntityAttribute.id)?.value ||
                                                "---"
                                            }
                                        </DataTableCell>
                                    ))
                                }
                            </DataTableRow>
                        ))
                    }
          </TableBody>
        </Table>
      </div>
    </>
  );
};
