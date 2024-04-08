"use client";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Field } from "formik";

import { useState } from "react";

export function FieldsForm({ errors, touched }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className=" justify-center space-y-10">
      <div className="space-y-6">
        <div className="w-full">
          <Field
            type="text"
            name="username"
            id="username"
            placeholder="Correo Electrónico*"
            className={`mt-2 p-2 text-xl ${
              errors.username
                ? "border-red-400 bg-red-100"
                : "bg-gray-100 focus-within:border-primary-400 hover:bg-primary-50 hover:border-primary-400 border-2 border-transparent ring-0 focus-within:bg-white"
            }`}
            aria-label="username"
          />

          {errors.username ? (
            <p className="text-red-600 mt-2">{errors.username.toString()}</p>
          ) : null}
        </div>
        <div className="w-full">
          <Field
            type="text"
            name="username"
            id="username"
            placeholder="Nombre*"
            className={`mt-2 p-2 text-xl ${
              errors.username
                ? "border-red-400 bg-red-100"
                : "filled border-transparent"
            }`}
            aria-label="username"
          />

          {errors.username ? (
            <p className="text-red-600 mt-2">{errors.username.toString()}</p>
          ) : null}
        </div>
        <div className="w-full">
          <Field
            type="text"
            name="username"
            id="username"
            placeholder="Apellidos*"
            className={`mt-2 p-2 text-xl ${
              errors.username
                ? "border-red-400 bg-red-100"
                : "filled border-transparent"
            }`}
            aria-label="username"
          />

          {errors.username ? (
            <p className="text-red-600 mt-2">{errors.username.toString()}</p>
          ) : null}
        </div>

        <div className="flex  w-full">
          <div className="relative">
            <Field
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="contraseña"
              className={`mt-2 p-2 text-xl ${
                errors.password
                  ? "border-red-400 bg-red-100"
                  : "filled border-transparent"
              }`}
              aria-label="password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pt-2 pr-3"
            >
              {showPassword ? (
                <EyeSlashIcon
                  className="text-gray-400 h-6 w-6"
                  aria-hidden="true"
                />
              ) : (
                <EyeIcon className="text-gray-400 h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {errors.password ? (
            <p className="text-red-600 mt-2">{errors.password.toString()}</p>
          ) : null}
        </div>
        <div className="flex  w-full">
          <div className="relative">
            <Field
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Confirmar Contraseña"
              className={`mt-2 p-2 text-xl ${
                errors.password
                  ? "border-red-400 bg-red-100"
                  : "filled border-transparent"
              }`}
              aria-label="password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pt-2 pr-3"
            >
              {showPassword ? (
                <EyeSlashIcon
                  className="text-gray-400 h-6 w-6"
                  aria-hidden="true"
                />
              ) : (
                <EyeIcon className="text-gray-400 h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {errors.password ? (
            <p className="text-red-600 mt-2">{errors.password.toString()}</p>
          ) : null}
        </div>

        <div className="w-full">
          <Field
            type="text"
            name="username"
            id="username"
            placeholder="Codigo de verificacicó*"
            className={`mt-2 p-2 text-xl ${
              errors.username
                ? "border-red-400 bg-red-100"
                : "filled border-transparent"
            }`}
            aria-label="username"
          />

          {errors.username ? (
            <p className="text-red-600 mt-2">{errors.username.toString()}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
