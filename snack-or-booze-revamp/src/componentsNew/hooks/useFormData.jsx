import { useState } from "react";
import axios from "axios";

const useFormData = (api, initialState, fields) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  // changing state of form
  const handleChange = (e) => {
    // changing value for state base on target name
    setFormData((data) => ({ ...data, [e.target.name]: e.target.value }));

    // setting error for that target names to false : no error
    setErrors({
      ...errors,
      [e.target.name]: false,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // checking for empty data
    const newErrors = {};

    // checks each data file if there is any errors
    fields.forEach((field) => {
      if (formData[field].trim() === "") {
        newErrors[field] = true;
      }
    });

    // checks if error obj is empty : if there is any errors
    if (Object.keys(newErrors).length === 0) {
      try {
        // Post to server after form submit
        const response = await axios.post(`http://localhost:3000/${api}`, {
          id: formData[fields[0]],
          name: formData[fields[0]],
          description: formData.description,
          recipe: formData.recipe,
          serve: formData.serve,
        });
        console.log("item added:", response.data);
        // Reset the item state after a successful post
        setFormData(initialState);
      } catch (error) {
        console.error("Error adding item:", error);
      }
    } else {
      // execute errors
      setErrors(newErrors);
    }
  };

  // handle styling
  const handleStyling = (name) => {
    return errors[name] ? "input-error" : "";
  };

  return [formData, handleChange, handleStyling, handleSubmit];
};

export default useFormData;
