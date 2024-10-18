/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

import { ButtonText } from "../button";
import { toast } from "react-toastify";
import { dictWrongCode } from "@/lib/dict";
import { Input } from "../field/Input";

export const Captcha = (props) => {
  const { onVerify, reloadCaptcha, onReloadCaptcha } = props;
  const [captchaText, setCaptchaText] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    generateCaptcha();
  }, []);

  useEffect(() => {
    if (reloadCaptcha) {
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
    console.log(e);
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

  useEffect(() => {
    if (inputValue?.length === 6) {
      handeVerified();
    }
  }, [inputValue]);

  return (
    <div className="w-404 h-78px mt-1 flex flex-row justify-center ali text-center">
      <div className="relative ml-5 h-[57px] w-[189px] rounded border border-gray-400 bg-gray-200 p-2 text-center text-xl opacity-80 shadow-sm">
        {/* Random distorted text */}
        <span className="rotate-[-2deg] transform font-mono tracking-wider text-gray-800">
          {captchaText}
        </span>

        {/* Distortion lines using SVG */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-30">
          <svg width="100%" height="100%">
            {/* Random lines to simulate distortion */}
            <line
              x1="10"
              y1="10"
              x2="150"
              y2="40"
              stroke="black"
              strokeWidth="1"
            />
            <line
              x1="30"
              y1="60"
              x2="180"
              y2="20"
              stroke="black"
              strokeWidth="1"
            />
            <line
              x1="50"
              y1="20"
              x2="170"
              y2="70"
              stroke="black"
              strokeWidth="1"
            />
            <line
              x1="0"
              y1="40"
              x2="180"
              y2="60"
              stroke="black"
              strokeWidth="1"
            />
            <line
              x1="20"
              y1="70"
              x2="160"
              y2="10"
              stroke="black"
              strokeWidth="1"
            />
          </svg>
        </div>
      </div>

      <div className="flex  h-[57px] -mt-2 flex-col p-2">
        <Input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Inserte el código"
          required
          witd="206px"
          heigth="50px"
        />
        <div className="-mt-6 font-humanst text-12px">
          <ButtonText name="código nuevo" onClick={generateCaptcha} />
        </div>
      </div>
    </div>
  );
};
