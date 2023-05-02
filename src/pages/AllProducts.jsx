import { useEffect, useState } from 'react'
import ActorCard from '../components/ActorCard';
import Filter from '../components/Filter';
import './AllProducts.css'

const AllProducts = () => {
  const [actors, setActors] = useState([]);
  const [statusFilter, setStatusFilter] = useState({ status: "", species: ""});

  const handleFilterValue = (value, name) => {
    const newStatusFilter = { ...statusFilter }
    newStatusFilter[name] = value;
    setStatusFilter(newStatusFilter)
  }

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/actors`)
      .then(res => res.json())
      .then(actors => setActors(actors))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="container">
      <h1>Mon application de recherche Black && Mortimer</h1>
      <div className='filters'>
        <Filter
          filtersValue={statusFilter.status}
          handleFilterValue={handleFilterValue}
          name="status"
          />
        <Filter
          filtersValue={statusFilter.species}
          handleFilterValue={handleFilterValue}
          name="species"
          />
      </div>
      <div className="actorsContainer">
        {actors
          .filter(actor =>
            (actor.status === statusFilter.status || statusFilter.status === "") &&
            (actor.species === statusFilter.species || statusFilter.species === ""))
          .map(actor => <ActorCard actor={actor} key={actor.id}/>)}
      </div>
    </div>
  )
}

export default AllProducts