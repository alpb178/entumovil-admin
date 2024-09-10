import { ButtonCancelLink } from "@/component/button";
import { URL_REGISTER } from "@/lib/constant";
import { dictButtonCancel } from "@/lib/dict";
import React from "react";

export function TermConditions() {
  return (
    <div className=" flex flex-col items-center justify-center space-y-5">
      <ButtonCancelLink name={dictButtonCancel} url={URL_REGISTER} />
    </div>
  );
}
