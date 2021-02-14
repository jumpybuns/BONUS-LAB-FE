import React from 'react';
import ReceiverList from '../components/receivers/ReceiverList';
import { useReceivers } from '../hooks/Receivers';

const AllReceivers = () => {
  const { receivers } = useReceivers();

  return <ReceiverList receivers={receivers} />;
};
export default AllReceivers;
