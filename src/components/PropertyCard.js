import React from "react";
import PropTypes from "prop-types";
import "../styles/PropertyCard.css";
import { FaBed, FaBath, FaPoundSign, FaMailBulk } from "react-icons/fa";

const PropertyCard = (props) => {
  const { title, city, type, bathrooms, bedrooms, price, email } = props;

  return (
    <div className="property-card">
      <div className="property-container">
        <div className="property-card-title">{title}</div>
        <div className="property-card-type">{type}</div>
        <div className="property-card-city">{city}</div>
        <div className="property-card-bathrooms">
          <FaBath /> 2<span>{bathrooms}</span>
        </div>
        <div className="property-card-bedrooms">
          <FaBed /> 2<span>{bedrooms}</span>
        </div>
        <div className="property-card-price">
          <FaPoundSign />
          {price}
        </div>

        <div className="property-card-email">
          <FaMailBulk />
          {email}
        </div>
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bedrooms: PropTypes.number.isRequired,
  bathrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default PropertyCard;
