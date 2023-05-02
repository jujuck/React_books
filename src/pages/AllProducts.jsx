import { useEffect, useState } from 'react'

const AllProducts = () => {
  const [actors, setActors] = useState([])
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/actors`)
      .then(res => res.json())
      .then(actors => setActors(actors))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <h1>Mon application de recherche Black && Mortimer</h1>
      {actors.map(actor => <h3 key={actor.id}>{actor.name}</h3>)}
    </div>
  )
}

export default AllProducts