import React, { useState } from "react";

type Props = {
  title: string;
  type: string;
  placeholder: string;
  validPattern?: RegExp;
  value: string;
  required?: boolean;
  autoComplete?: string;
  name: string;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  messageError?: string;
};

export const Input = ({
  title,
  type,
  placeholder,
  validPattern,
  value,
  required = false,
  autoComplete = "on",
  name,
  handleInputChange,
  messageError,
}: Props) => {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [isFormTouched, setIsFormTouched] = useState<boolean>(false);

  const validForm = () => {
    setIsFormTouched(true);
    if (validPattern) {
      if (validPattern.test(value)) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    }
  };

  const isFormValidClass = isValid
    ? "form__group-input-valid"
    : "form__group-input-invalid";

  return (
    <div className="form-group mb-3">
      <label className="form__group-label">
        <small>{title}</small>
      </label>

      <div className="form__group-input-container">
        <input
          className={`
            ${isFormTouched ? isFormValidClass : ""}
            form__group-input
          `}
          value={value}
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onBlur={validForm}
          onKeyUp={validForm}
          onChange={handleInputChange}
        />

        {!isValid && isFormTouched ? (
          <i className="fa fa-times-circle"></i>
        ) : (
          isValid && isFormTouched && <i className="fa fa-check-circle"></i>
        )}
      </div>

      {!isValid && isFormTouched && (
        <p className="form__group-message-error">{messageError}</p>
      )}
    </div>
  );
};
