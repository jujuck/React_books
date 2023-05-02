import { useEffect, useState } from 'react'

const Filter = ({ handleFilterValue, filtersValue}) => {
  const [filters, setFilters] = useState([])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/status`)
      .then(res => res.json())
      .then(filter => setFilters(filter))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <label>Filtrer par status</label>
      <select
        name="status"
        id="status"
        onChange={(event) => handleFilterValue(event.target.value)}
        value={filtersValue}
      >
        {filters.map(stat => <option key={stat.id} value={stat.label}>{stat.label}</option>)}
      </select>
    </div>
  )
}

export default Filter