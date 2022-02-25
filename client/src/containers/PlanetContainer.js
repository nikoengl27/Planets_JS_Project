import { useEffect, useState } from 'react'
import PlanetList from '../components/PlanetList'
// import PlanetForm from '../components/PlanetForm'

const PlanetContainer = () => {

  const [planets, setPlanets] = useState([])

  useEffect(() => {
    getPlanets();
  }, [])

  const getPlanets = () => {
    fetch('http://localhost:5000/api/planets')
      .then(response => response.json())
      .then(planets => setPlanets(planets));
  }

//   const handlePlanetSubmit = newPlanet => {
//     fetch('http://localhost:5000/api/planets', {
//       method: 'POST',
//       body: JSON.stringify(newPlanet),
//       headers: { 'Content-Type': 'application/json' }
//     })
//       .then(() => getPlanets())
//   }


  return (
    <>
      <PlanetList planets={planets} />
    </>
  )
}

export default PlanetContainer
