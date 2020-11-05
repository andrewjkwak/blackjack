import React from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import { CardWrapper, HandWrapper } from "./HandStyle";

const Hand = ({ player, hand }) => {
  const Cards = hand.map(card => (
    <Card key={ card.code } image={ card.image } />
  ));

  return (
    <HandWrapper>
      <h3>{ player }</h3>
      <CardWrapper>
        { Cards }
      </CardWrapper>
    </HandWrapper>
  )
};

Hand.propTypes = {
  player: PropTypes.string.isRequired,
  hand: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
};

export default Hand;