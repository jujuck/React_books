import React from 'react';
import { Link } from 'react-router-dom';
import './ActorCard.css';

const ActorCard = ({ actor }) => {

  return (
    <Link className="actorCard" to={`/actors/${actor.id}`}>
      <h3>{actor.name}</h3>
      <img src={actor.image} alt={actor.name} />
    </Link>

  )
}

export default ActorCard