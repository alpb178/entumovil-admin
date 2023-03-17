import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { dataTable } from "@/lib/table";

export default function BasicTable({ visible }) {
  return (
    <div className="overflow-auto border border-2 text-2xl border-gray">
      <Table className="border-1 border-solid border-gray">
        <TableHead className="border-1 border-solid border-gray font-black">
          <TableRow className=" border-1 border-solid border-gray">
            {visible && (
              <TableCell className=" border-1 border-solid border-gray">
                ES (ESP)
              </TableCell>
            )}
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
          {dataTable.map((row, i) => (
            <TableRow
              key={i}
              className={`${
                i % 2 == 0 ? "bg-legislation-gray" : "bg-white"
              } border-1  border-solid border-gray`}
            >
              {visible && (
                <TableCell
                  className=" border-1 border-solid border-gray"
                  component="th"
                  scope="row"
                >
                  {row["ES (ESP)"]}
                </TableCell>
              )}

              <TableCell
                className="
                 border-1  border-solid border-gray"
              >
                {row["ES (ARG)"]}
              </TableCell>
              <TableCell className=" border-1 border-solid border-gray">
                {row["EN (UK)"]}
              </TableCell>
              <TableCell className=" border-1 border-solid border-gray">
                {row["EN (US)"]}
              </TableCell>
              <TableCell className=" border-1 border-solid border-gray">
                {row["EN (IR)"]}
              </TableCell>
              <TableCell className=" border-1 border-solid border-gray">
                {row["FR"]}
              </TableCell>
              <TableCell className=" border-1 border-solid border-gray">
                {row["IT"]}
              </TableCell>
              <TableCell className=" border-1 border-solid border-gray">
                {row["DE"]}
              </TableCell>
              <TableCell className=" border-1 border-solid border-gray">
                {row["CA"]}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
