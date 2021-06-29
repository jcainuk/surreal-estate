import React, { useState } from "react";
import "../styles/AddProperty.css";
import axios from "axios";
import Alert from "./Alert";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "Flat",
      bathrooms: 1,
      bedrooms: 1,
      email: "",
      price: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
    axios
      .post(`http://localhost:4000/api/v1/PropertyListing`, fields)
      .then(() => {
        setAlert({
          message: "Property added",
          isSuccess: true,
        });
      })
      .catch(() =>
        setAlert({
          message: "Server error. Please contact customer support.",
          isSuccess: false,
        })
      );
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };
  return (
    <div className="addproperty">
      <h1>Add Property</h1>
      <Alert message={alert.message} success={alert.isSuccess} />

      <form onSubmit={handleAddProperty}>
        <label htmlFor="title">
          Title
          <input
            required
            type="text"
            placeholder="Enter a title"
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="city">
          City
          <select
            required
            placeholder="City/Town"
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
          >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>
        <label htmlFor="type">
          Type
          <select
            required
            placeholder="Type of property"
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
          >
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End Terraced">End Terraced</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>
        <label htmlFor="bathrooms">
          Bathrooms
          <select
            required
            placeholder="Number of bathrooms"
            id="bathroom"
            name="bathroom"
            value={fields.bathrooms}
            onChange={handleFieldChange}
          >
            <option value="1 Bathroom">1 Bathroom</option>
            <option value="2 Bathroom">2 Bathroom</option>
            <option value="3 Bathroom">3 Bathroom</option>
            <option value="4 Bathroom">4 Bathroom</option>
          </select>
        </label>
        <label htmlFor="bedrooms">
          Bedrooms
          <select
            required
            placeholder="Number of bedrooms"
            id="bedrooms"
            name="bedroom"
            value={fields.bedrooms}
            onChange={handleFieldChange}
          >
            <option value="1 Bedrooms">1 Bedroom</option>
            <option value="2 Bedrooms">2 Bedrooms</option>
            <option value="3 Bedrooms">3 Bedrooms</option>
            <option value="4 Bedrooms">4 Bedrooms</option>
            <option value="5 Bedrooms">5 Bedrooms</option>
            <option value="6 Bedrooms">6 Bedrooms</option>
          </select>
        </label>
        <label htmlFor="email">
          E-mail
          <input
            required
            placeholder="Type your email address"
            type="email"
            id="email"
            name="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="price">
          Price (£)
          <input
            type="number"
            required
            placeholder="Enter the price"
            id="price"
            name="price"
            value={fields.price}
            onChange={handleFieldChange}
          />
        </label>
        <button className="add-property-button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
