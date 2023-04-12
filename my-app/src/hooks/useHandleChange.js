import { useState } from "react";

export default function useHandleChange(initialValue) {
  const [values, setValues] = useState(initialValue);
  const handleInputChange = (e) => {
    const type = e.target.type;
    setValues({
      ...values,
      [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
    });
  };
  return {
    values,
    handleInputChange,
  };
}
