import React from 'react';
import Receiver from './Receiver';
import PropTypes from 'prop-types';

const ReceiverList = ({ receivers }) => {
  const receiverElements = receivers.map((receiver) => (
    <li key={receiver.id}>
      <Receiver name={receiver.name} url={receiver.url} />
    </li>
  ));
  return (
    <div>
      <ul data-testid="receivers">{receiverElements}</ul>
    </div>
  );
};

export default ReceiverList;

ReceiverList.propTypes = {
  receivers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      manufacturer: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
    })
  ).isRequired,
};
