import React, { useState } from "react";
import "../styles/AddProperty.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
    },
  };
  const [fields /* setFields */] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  return (
    <div className="AddProperty">
      Add Property:
      <form onSubmit={handleAddProperty}>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProperty;
