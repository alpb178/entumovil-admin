/* eslint-disable react/prop-types */
import { Input } from "@material-tailwind/react";
import React, { useState } from "react";

export const CheckBox = ({ enabled, id, onAFtterCheck }) => {
  const [checked, setChecked] = useState(enabled);
  const handleChange = async () => {
    setChecked(!checked);
    onAFtterCheck(id, !checked);
  };

  return (
    <Input
      type="checkbox"
      checked={checked}
      className="h-8 w-8 rounded border-gray-300 bg-gray-100"
      onChange={(e) => {
        e.stopPropagation();
        handleChange();
      }}
    />
  );
};
