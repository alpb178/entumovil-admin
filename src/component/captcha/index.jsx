/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

import { ButtonSubmit } from "../button";
import { toast } from "react-toastify";

export const Captcha = (props) => {
  const { onVerify, disabled } = props;
  const [captchaText, setCaptchaText] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let text = "";
    for (let i = 0; i < 6; i++) {
      text += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(text);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handeVerified = () => {
    if (inputValue === captchaText) {
      onVerify(true);
    } else {
      onVerify(false);
      generateCaptcha();
      setInputValue("");
      toast.error("Código incorrecto. Por favor intente de nuevo");
    }
  };

  return (
    <div>
      <p>Inserte el código en el campo:</p>
      <div
        style={{
          fontSize: "24px",
          fontFamily: "monospace",
          letterSpacing: "2px",
          marginTop: "10px",
          marginBottom: "10px",
          textAlign: "center",
        }}
      >
        {captchaText}
      </div>
      <div className="flex flex-row">
        <input
          className="text-field filled mt-3 h-11 border-transparent"
          type="text"
          value={inputValue}
          onChange={handleChange}
          required
        />
        <ButtonSubmit
          type="button"
          onClick={handeVerified}
          disabled={disabled}
          name="verificar"
        />
      </div>
    </div>
  );
};
