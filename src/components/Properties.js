import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import PropertyCard from "./PropertyCard";

const Properties = () => {
  const initialState = {
    properties: [],
  };

  const [properties, setProperties] = useState([]);
  useEffect(() => {}, []);

  return <div>Properties Page</div>;
};

export default Properties;
