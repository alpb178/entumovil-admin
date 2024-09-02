/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

import { ButtonSubmit } from "../button";

export const Captcha = ({ onVerify, disabled }) => {
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
    }
  };

  return (
    <div>
      <p>Inserte el código en el campo:</p>
      <div
        style={{
          background: "#f0f0f0",
          padding: "10px",
          fontSize: "24px",
          fontFamily: "monospace",
          letterSpacing: "2px",
          marginBottom: "10px",
          textAlign: "center",
        }}
      >
        {captchaText}
      </div>
      <div className="flex flex-row">
        <input
          className="text-field filled border-transparent"
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
