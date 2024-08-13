/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

import ReCAPTCHA from "react-google-recaptcha";

export function Captcha({ onChangeCaptcha }) {
  const handleCaptchaChange = (value) => {
    if (value) {
      onChangeCaptcha?.();
    }
  };
  return <ReCAPTCHA sitekey="YOUR_SITE_KEY" onChange={handleCaptchaChange} />;
}

export const CaptchaV2 = ({ onVerify }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === captchaText) {
      alert("CAPTCHA verified!");
      onVerify(true);
    } else {
      alert("Incorrect CAPTCHA. Please try again.");
      onVerify(false);
      generateCaptcha();
      setInputValue("");
    }
  };

  return (
    <div>
      <p>Enter the text you see in the box below:</p>
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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          required
        />
        <button type="submit">Verify</button>
      </form>
    </div>
  );
};

export default Captcha;
