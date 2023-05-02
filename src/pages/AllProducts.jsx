import { useEffect, useState } from 'react'
import ActorCard from '../components/ActorCard';
import './AllProducts.css'

const AllProducts = () => {
  const [actors, setActors] = useState([])
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/actors`)
      .then(res => res.json())
      .then(actors => setActors(actors))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="container">
      <h1>Mon application de recherche Black && Mortimer</h1>
      <div className="actorsContainer">
        {actors.map(actor => <ActorCard actor={actor} key={actor.id}/>)}
      </div>
    </div>
  )
}

export default AllProducts