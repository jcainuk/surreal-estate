import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import PropertyCard from "./PropertyCard";

const Properties = () => {
  const initialState = {
    properties: [],
  };

  const [properties, setProperties] = useState([]);

  return <div>Properties Page</div>;
};

export default Properties;
