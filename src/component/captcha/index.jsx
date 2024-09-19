/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

import { ButtonSubmit } from "../button";
import { toast } from "react-toastify";
import { dictCode, dictVerifyCode, dictWrongCode } from "@/lib/dict";

export const Captcha = (props) => {
  const { onVerify, reloadCaptcha, onReloadCaptcha } = props;
  const [captchaText, setCaptchaText] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    generateCaptcha();
  }, []);

  useEffect(() => {
    if (reloadCaptcha) {
      console.log(reloadCaptcha);
      onVerify(false);
      generateCaptcha();
      setInputValue("");
      onReloadCaptcha(false);
    }
  }, [reloadCaptcha]);

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
      toast.error(dictWrongCode);
    }
  };

  return (
    <div>
      <p>{dictCode}</p>
      <div
        style={{
          fontSize: "24px",
          fontFamily: "monospace",
          letterSpacing: "2px",
          marginTop: "10px",
          marginBottom: "10px",
          textAlign: "center",
          opacity: 0.5,
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
          disabled={inputValue?.length < 6}
          name={dictVerifyCode}
        />
      </div>
    </div>
  );
};
