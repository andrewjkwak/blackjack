import React from "react";
import PropTypes from "prop-types";

const Card = ({ image }) => (
  <img src={ image } alt="Card" />
);

Card.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Card;