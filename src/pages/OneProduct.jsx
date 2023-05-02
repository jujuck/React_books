import React from 'react';
import { useParams } from 'react-router-dom';

const OneProduct = () => {
  const { id } = useParams()

  return (
    <div>OneProduct</div>
  )
}

export default OneProduct