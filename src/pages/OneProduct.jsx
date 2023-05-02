import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const OneProduct = () => {
  const { id } = useParams()

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/actors/${id}`)
      .then(res => res.json())
      .then(actor => console.log(actor))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>OneProduct</div>
  )
}

export default OneProduct