import { useEffect } from 'react'

const StatusFilter = () => {

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/status`)
      .then(res => res.json())
      .then(status => console.log(status))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>StatusFilter</div>
  )
}

export default StatusFilter