import { useEffect, useState } from 'react'

const StatusFilter = ({ handleStatusFilter, statusFilter}) => {
  const [status, setStatus] = useState([])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/status`)
      .then(res => res.json())
      .then(status => setStatus(status))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <select name="status" id="status" onChange={(event) => handleStatusFilter(event.target.value)}>
        {status.map(stat => <option key={stat.id} value={stat.label}>{stat.label}</option>)}
      </select>
    </div>
  )
}

export default StatusFilter