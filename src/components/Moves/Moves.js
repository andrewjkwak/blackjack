import React from "react";
import PropTypes from "prop-types";

const Moves = ({ callHit, callStand, resetGame, result }) => (
  <div>
    <button onClick={callHit} disabled={!!result}>Hit</button>
    <button onClick={callStand} disabled={!!result}>Stand</button>
    <button onClick={resetGame}>Reset</button>
  </div>
);

Moves.propTypes = {
  callHit: PropTypes.func.isRequired,
  callStand: PropTypes.func.isRequired,
  result: PropTypes.string.isRequired,
};

export default Moves;