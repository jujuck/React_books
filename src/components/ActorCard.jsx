import React from 'react';
import './ActorCard.css';

const ActorCard = ({ actor }) => {

  return (
    <div className="actorCard">
      <h3>{actor.name}</h3>
      <img src={actor.image} alt={actor.name} />
    </div>

  )
}

export default ActorCard