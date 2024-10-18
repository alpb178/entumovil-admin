/* eslint-disable react/prop-types */

import React, { useState } from "react";

export const CheckBox = (props) => {
  const { enabled, id, onAFtterCheck } = props;
  const [checked, setChecked] = useState(enabled);
  const handleChange = async () => {
    setChecked(!checked);
    onAFtterCheck(id, !checked);
  };

  return (
    <input
      type="checkbox"
      checked={checked}
      className="h-8 w-8 rounded-2xl"
      onChange={(e) => {
        e.stopPropagation();
        handleChange();
      }}
    />
  );
};
