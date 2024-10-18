/* eslint-disable react/prop-types */

import React from "react";
import { dictNamePortal } from "@/lib/dict";

export function ContainerForm(props) {
  const { children, nameSection, height } = props;
  return (
    <div className="flex h-screen items-center justify-center ">
      <div className="flex h-full items-center justify-center">
        <div
          className={`border-1  flex h-[${
            height ?? "100px"
          }] w-[437px] flex-col items-center justify-center rounded-lg border border-custom-border bg-field`}
        >
          <div
            className="flex w-404px  flex-col border-1 border-b
               text-left"
          >
            <div className=" flex w-404px flex-row">
              <img
                className="mt-[15px] h-8 w-auto"
                src="/public/img/logotipo.svg"
                alt={dictNamePortal}
              />
              <div className="flex flex-col">
                <a className="mt-[15px] font-humanst text-24px font-light">
                  {nameSection}
                </a>
                <a className="mb-[5px] font-humanst text-24px font-bold">
                Administración de cuentas
                </a>
              </div>
            </div>
          </div>

          <div className="m-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
