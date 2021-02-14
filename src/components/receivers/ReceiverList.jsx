import React from 'react';
import Receiver from './Receiver';
import PropTypes from 'prop-types';
import { useForm } from '../../hooks/Form';

const ReceiverList = ({ receivers }) => {
  const receiverElements = receivers.map((receiver) => (
    <li key={receiver.id}>
      <Receiver
        manufacturer={receiver.manufacturer}
        model={receiver.model}
        country={receiver.country}
        year={receiver.year}
      />
    </li>
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = () => {
    useForm();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="submit" value={form} onChange={handleChange} />
      </form>
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
