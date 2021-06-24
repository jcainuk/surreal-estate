import React, { useState } from "react";
import "../styles/AddProperty.css";

const initialState = {
  fields: {
    title: "",
  },
};
const [fields, setFields] = useState(initialState.fields);

const AddProperty = () => (
  <div className="AddProperty">
    <form action="">
      <button type="submit">Add</button>
    </form>
  </div>
);

export default AddProperty;
