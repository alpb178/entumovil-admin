import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { dataTable } from "@/lib/table";
import { useState } from "react";
import { Glosary } from "@/lib/glosary";
import { useEffect } from "react";
import { json } from "react-router-dom";

export default function BasicTable({ visible }) {
  const [visibleDocument, setVisibleDocument] = useState(Glosary);

  useEffect(() => {
    let json = {};
    if (!!visible.length) {
      visible.map((option) => {
        json[option] = true;
      });
    } else {
      json = Glosary;
    }

    setVisibleDocument(json);
  }, [visible]);

  return (
    <div className="overflow-auto border border-2 border-gray text-2xl">
      <Table>
        <TableHead>
          <TableRow>
            {visibleDocument?.ESP && (
              <TableCell className="border-1 border-solid border-gray">
                <strong>ES (ESP)</strong>
              </TableCell>
            )}
            {visibleDocument?.ARG && (
              <TableCell className="border-1 border-solid border-gray">
                <strong>ES (ARG)</strong>
              </TableCell>
            )}
            {visibleDocument?.UK && (
              <TableCell className="border-1 border-solid border-gray">
                <strong>EN (UK)</strong>
              </TableCell>
            )}
            {visibleDocument?.US && (
              <TableCell className="border-1 border-solid border-gray">
                <strong>EN (US)</strong>
              </TableCell>
            )}
            {visibleDocument?.IR && (
              <TableCell className="border-1 border-solid border-gray">
                <strong> EN (IR)</strong>
              </TableCell>
            )}
            {visibleDocument?.FR && (
              <TableCell className="border-1 border-solid border-gray">
                <strong>FR</strong>
              </TableCell>
            )}
            {visibleDocument?.IT && (
              <TableCell className=" border-1 border-solid border-gray">
                <strong> IT</strong>
              </TableCell>
            )}
            {visibleDocument?.DE && (
              <TableCell className=" border-1 border-solid border-gray">
                <strong>DE</strong>
              </TableCell>
            )}
            {visibleDocument?.CA && (
              <TableCell className=" border-1 border-solid border-gray">
                <strong>CA</strong>
              </TableCell>
            )}
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
              {visibleDocument?.ESP && (
                <TableCell
                  className=" border-1 border-solid border-gray"
                  component="th"
                  scope="row"
                >
                  {row["ES (ESP)"]}
                </TableCell>
              )}

              {visibleDocument?.ARG && (
                <TableCell
                  className="
                 border-1  border-solid border-gray"
                >
                  {row["ES (ARG)"]}
                </TableCell>
              )}
              {visibleDocument?.UK && (
                <TableCell className=" border-1 border-solid border-gray">
                  {row["EN (UK)"]}
                </TableCell>
              )}
              {visibleDocument?.US && (
                <TableCell className=" border-1 border-solid border-gray">
                  {row["EN (US)"]}
                </TableCell>
              )}
              {visibleDocument?.IR && (
                <TableCell className=" border-1 border-solid border-gray">
                  {row["EN (IR)"]}
                </TableCell>
              )}
              {visibleDocument?.FR && (
                <TableCell className=" border-1 border-solid border-gray">
                  {row["FR"]}
                </TableCell>
              )}
              {visibleDocument?.IT && (
                <TableCell className=" border-1 border-solid border-gray">
                  {row["IT"]}
                </TableCell>
              )}
              {visibleDocument?.DE && (
                <TableCell className=" border-1 border-solid border-gray">
                  {row["DE"]}
                </TableCell>
              )}
              {visibleDocument?.CA && (
                <TableCell className=" border-1 border-solid border-gray">
                  {row["CA"]}
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
