import { useState } from "react";

type InputChange = {
  target: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
};

export const useForm = <T>(initialState = {} as T) => {
  const [value, setValue] = useState<T>(initialState);

  const handleInputChange = ({ target }: InputChange) => {
    setValue({
      ...value,
      [target.name]: target.value,
    });
  };

  const reset = () => setValue(initialState);

  return { value, handleInputChange, reset };
};
