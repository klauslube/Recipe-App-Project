import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';

export default function Foods() {
  const history = useHistory();
  return (
    <Header title="Foods" history={ history } search />
  );
}
