import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const OneProduct = () => {
  const { id } = useParams();
  const [ actor, setActor] = useState()

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/actors/${id}`)
      .then(res => res.json())
      .then(actor => setActor(actor))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className='container'>
      {actor && <div>
        <h1>{actor.name}</h1>
        <h4>{actor.species}</h4>
        <img src={actor.image} alt={actor.name} />
      </div>}
    </div>
  )
}

export default OneProduct