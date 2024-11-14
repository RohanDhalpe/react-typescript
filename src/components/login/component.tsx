import React from "react";
import { FormikErrors, FormikTouched } from "formik";
import { LoginFormData } from "./loginSchema";

interface LoginComponentProps {
  isLoginPending: boolean;
  formValues: LoginFormData;
  formErrors: FormikErrors<LoginFormData>;
  formTouched: FormikTouched<LoginFormData>;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  handleBlur: React.FocusEventHandler<HTMLInputElement>;
  handleSubmit: () => void;
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

function LoginComponent(props: LoginComponentProps) {
  const {
    isLoginPending,
    formValues,
    formErrors,
    formTouched,
    handleChange,
    handleBlur,
    handleSubmit,
    handleKeyDown,
  } = props;

  return (
    <div
      onKeyDown={handleKeyDown}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          padding: "4rem",
          width: "100%",
          maxWidth: "400px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          Login to your account
        </h2>

        <div style={{ width: "100%", marginBottom: "1rem" }}>
          <input
            type="email"
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            value={formValues.email}
            placeholder="Enter your email address"
            style={{
              padding: "0.75rem 1rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
              width: "100%",
              fontSize: "1rem",
              marginBottom: "0.5rem",
            }}
          />
          {formTouched.email && formErrors.email && (
            <div style={{ color: "red", fontSize: "0.875rem" }}>
              {formErrors.email}
            </div>
          )}
        </div>

        <div style={{ width: "100%", marginBottom: "1.5rem" }}>
          <input
            type="password"
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            value={formValues.password}
            placeholder="Enter your password"
            style={{
              padding: "0.75rem 1rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
              width: "100%",
              fontSize: "1rem",
              marginBottom: "0.5rem",
            }}
          />
          {formTouched.password && formErrors.password && (
            <div style={{ color: "red", fontSize: "0.875rem" }}>
              {formErrors.password}
            </div>
          )}
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          disabled={isLoginPending}
          style={{
            padding: "0.75rem 1.5rem",
            backgroundColor: isLoginPending ? "#ccc" : "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            fontSize: "1rem",
            cursor: "pointer",
            width: "100%",
          }}
        >
          {isLoginPending ? "Logging in..." : "Enter"}
        </button>
      </div>
    </div>
  );
}

export default LoginComponent;
