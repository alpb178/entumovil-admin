import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function createData(esp, arg, uk, us, ir, fr, it, de, ca) {
  return { esp, arg, uk, us, ir, fr, it, de, ca };
}

const rows = [
  createData(
    "Abogado",
    "Abogado",
    "Advocate/Solicitor/Lawyer",
    "Advocate/Lawyer",
    "Solicitor",
    "Avocat",
    "avvocato(-a)",
    "Anwalt",
    "advocat"
  ),
  createData(
    "Acreedor",
    "Acreedor",
    "Creditor",
    "Creditor",
    "Creditor",
    "Créancier/Cocréancier",
    "creditore(-trice)",
    "Gläubiger",
    "acreedor"
  ),
  createData(
    "Acto",
    "Acto",
    "Event/Occurrence",
    "Event/Occurrence",
    "Event",
    "Acte/évenement",
    "atto",
    "Handlung",
    "acte"
  ),
  createData("-", "-", "-", "-", "-", "-", "-", "-"),
];

export default function BasicTable() {
  return (
    <Table className="border-1 border-solid border-gray">
      <TableHead className="border-1 border-solid border-gray font-black">
        <TableRow className=" border-1 border-solid border-gray">
          <TableCell className=" border-1 border-solid border-gray">
            ES (ESP)
          </TableCell>
          <TableCell className=" border-1 border-solid border-gray">
            ES (ARG)
          </TableCell>
          <TableCell className=" border-1 border-solid border-gray">
            EN (UK)
          </TableCell>
          <TableCell className=" border-1 border-solid border-gray">
            EN (US)
          </TableCell>
          <TableCell className=" border-1 border-solid border-gray">
            EN (IR)
          </TableCell>
          <TableCell className=" border-1 border-solid border-gray">
            FR
          </TableCell>
          <TableCell className=" border-1 border-solid border-gray">
            IT
          </TableCell>
          <TableCell className=" border-1 border-solid border-gray">
            DE
          </TableCell>
          <TableCell className=" border-1 border-solid border-gray">
            CA
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.esp}>
            <TableCell
              className=" border-1 border-solid border-gray"
              component="th"
              scope="row"
            >
              {row.esp}
            </TableCell>
            <TableCell className=" border-1 border-solid border-gray">
              {row.arg}
            </TableCell>
            <TableCell className=" border-1 border-solid border-gray">
              {row.uk}
            </TableCell>
            <TableCell className=" border-1 border-solid border-gray">
              {row.us}
            </TableCell>
            <TableCell className=" border-1 border-solid border-gray">
              {row.ir}
            </TableCell>
            <TableCell className=" border-1 border-solid border-gray">
              {row.fr}
            </TableCell>
            <TableCell className=" border-1 border-solid border-gray">
              {row.it}
            </TableCell>
            <TableCell className=" border-1 border-solid border-gray">
              {row.de}
            </TableCell>
            <TableCell className=" border-1 border-solid border-gray">
              {row.ca}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
