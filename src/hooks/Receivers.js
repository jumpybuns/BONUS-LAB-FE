import { useState, useEffect } from 'react';
import { findReceivers } from '../services/receiverDB';

export const useReceivers = () => {
  const [receivers, setReceivers] = useState([]);

  useEffect(() => {
    findReceivers().then((receivers) => {
      setReceivers(receivers);
    });
  }, []);

  return {
    receivers,
  };
};
