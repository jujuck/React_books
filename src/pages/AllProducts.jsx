import { useEffect } from 'react'

const AllProducts = () => {

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/actors`)
      .then(res => res.json())
      .then(actors => console.log(actors))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <h1>Mon application de recherche Black && Mortimer</h1>
    </div>
  )
}

export default AllProducts