import { useEffect, useState } from 'react'

const StatusFilter = () => {
  const [status, setStatus] = useState([])
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/status`)
      .then(res => res.json())
      .then(status => setStatus(status))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      StatusFilter
    </div>
  )
}

export default StatusFilter