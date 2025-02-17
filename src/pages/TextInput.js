import React from "react";

export const TextInput = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
}) => {
  return (
    <div className="inputWrapper">
      {label && <label className="inputLabel">{label}</label>}
      <div className="inputContainer">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className="inputField"
        />
      </div>
    </div>
  );
};
