import React from 'react';
import PropTypes from 'prop-types';

const Receiver = ({ manufacturer, model, country, year }) => (
  <figure>
    <h1>{manufacturer}</h1>
    <h2>{model}</h2>
    <h3>{country}</h3>
    <h3>{year}</h3>
  </figure>
);

Receiver.propTypes = {
  manufacturer: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default Receiver;
