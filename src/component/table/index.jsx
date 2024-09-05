/* eslint-disable react/prop-types */

import {
  BarsArrowDownIcon,
  BarsArrowUpIcon,
} from "@heroicons/react/24/outline";

import React, { useEffect } from "react";
import { usePagination, useSortBy, useTable } from "react-table";

export const DataTable = ({
  actions,
  columns,
  count,
  data,
  onRowClick,
  hiddenColumns,
  name,
  onFilter,
  pageSize,
  setPage,
  setSortBy,
  center,
}) => {
  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: { hiddenColumns, pageIndex: 0, pageSize },
      manualPagination: true,
      manualSortBy: true,
      autoResetSortBy: false,
      autoResetPage: false,
      pageCount: Math.ceil(count / pageSize),
    },
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    state: { pageIndex, sortBy },
  } = tableInstance;

  useEffect(() => {
    if (setPage) setPage(pageIndex);

    const sortStr = sortBy
      .map((c) => `${c.id},${c.desc ? "desc" : "asc"}`)
      .join("&");
    setSortBy(sortStr);
  }, [pageIndex, sortBy]);

  return (
    <div
      className={`flex w-screen overflow-auto p-4  ${
        center && "lg:justify-center"
      }`}
    >
      {name || actions ? (
        <div className="flex flex-col">
          <div
            className={`mb-8 flex w-full items-center p-6 pb-0 text-gray-700 ${
              name ? "justify-between" : "justify-end"
            }`}
          >
            {name ? <h3 className="header-title">{name}</h3> : null}
            <div className="w-ful flex justify-end">{actions}</div>
          </div>
          {onFilter}
        </div>
      ) : null}

      <table {...getTableProps()} className="w-5 border">
        <thead className="border-b">
          {headerGroups.map((headerGroup, index) => (
            <tr key={index} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => (
                <th
                  key={index}
                  {...column.getHeaderProps([
                    {
                      className: column.className,
                      style: column.style,
                    },
                    column.getSortByToggleProps(),
                  ])}
                  className="px-6 py-5 text-left text-xs font-medium uppercase text-gray-500"
                >
                  <div className="group flex items-center">
                    {column.render("Header")}

                    <span className="ml-2">
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <BarsArrowDownIcon className="h-5 w-5" />
                        ) : (
                          <BarsArrowUpIcon className="h-5 w-5" />
                        )
                      ) : column.canSort ? (
                        <BarsArrowUpIcon className="h-5 w-5 opacity-50 transition-opacity duration-150 ease-in lg:opacity-0 lg:group-hover:opacity-50" />
                      ) : (
                        ""
                      )}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="divide-y">
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <tr
                key={index}
                {...row.getRowProps({
                  onClick: () => onRowClick(row),
                })}
                className={`${
                  onRowClick ? "cursor-pointer hover:bg-gray-50" : ""
                }`}
              >
                {row.cells.map((cell, index) => (
                  <td
                    key={index}
                    {...cell.getCellProps()}
                    className="whitespace-nowrap px-6 py-4 text-sm text-gray-800 xl:text-base"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

DataTable.defaultProps = {
  data: [],
  hiddenColumns: [],
  name: "",
  onPageSizeChange: () => null,
  onRowClick: () => null,
  setSortBy: () => null,
};
