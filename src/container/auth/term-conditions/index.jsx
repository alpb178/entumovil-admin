import { ButtonCancelLink } from "@/component/button";
import { URL_REGISTER } from "@/lib/constant";
import React from "react";

export function TermConditions() {
  return (
    <div className=" flex flex-col items-center justify-center space-y-5">
      <ButtonCancelLink name="Cancelar" url={URL_REGISTER} />
    </div>
  );
}
