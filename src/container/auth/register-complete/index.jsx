import { LogoEntuMovil } from "@/component/logo/logo";
import { URL_LOGIN } from "@/lib/constant";
import { Link } from "react-router-dom";
import React from "react";
import { dictInitSession, dictRegistPortal } from "@/lib/dict";

export function RegisterComplete() {
  return (
    <div className=" flex flex-col items-center justify-center space-y-5 m-5">
      <LogoEntuMovil />
      <a className="text-2xl">
        {dictRegistPortal}
      </a>
      <Link
        to={URL_LOGIN}
        className="inline-flex justify-center px-1 font-medium"
      >
        <span className="text-primary-600">{dictInitSession}</span>
      </Link>
    </div>
  );
}
