import { useState } from "react";

const usePropState = (formData) => {
  const [obj, setObj] = useState(formData);

  function setProp(event) {
    const { name, value, type, checked } = event.target;
    setObj((prevVal) => {
      return {
        ...prevVal,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return [obj, setProp, setObj];
};

export default usePropState;
