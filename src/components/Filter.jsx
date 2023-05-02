import { useEffect, useState } from 'react'

const Filter = ({ handleFilterValue, filtersValue, name}) => {
  const [filters, setFilters] = useState([])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/${name}`)
      .then(res => res.json())
      .then(filter => setFilters(filter))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <label>Filtrer par {name}</label>
      <select
        name={name}
        id={name}
        onChange={(event) => handleFilterValue(event.target.value, name)}
        value={filtersValue}
      >
        {filters.map(stat => <option key={stat.id} value={stat.label}>{stat.label}</option>)}
      </select>
    </div>
  )
}

export default Filter