import React, { useState } from 'react'

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
  messageError
}) => {
  
  const [isValid, setIsValid] = useState("");

  const validForm = () => {
    if(validPattern){
      if(validPattern.test(value)){
        setIsValid(true);
      } else {
        setIsValid(false)
      }
    }
  }
  return (
    <div className="form-group mb-3">
      <label className="form__group-label">
        <small>{title}</small>
      </label>

      <div className="form__group-input-container">
        <input 
          className={`
            ${(isValid && isValid !== "") 
              ? "form__group-input-valid" 
            :(!isValid && isValid !== "") 
              && "form__group-input-invalid"}
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

        {
          (!isValid && isValid !== "") 
          ? (<i className="fa fa-times-circle"></i>)
          : (isValid && isValid !== "")
          &&(<i className="fa fa-check-circle"></i>)
        }
      </div>
      
      {
        !isValid && isValid !== "" 
        && <p className="form__group-message-error">{messageError}</p>
      }
    </div>
  )
}
