import { useEffect, useState } from 'react'
import PlanetList from '../components/PlanetList'
import PlanetDetail from '../components/PlanetDetail'
// import PlanetForm from '../components/PlanetForm'

const PlanetContainer = () => {

  const [planets, setPlanets] = useState([])
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [showPlanetList, setPlanetList] = useState(true)

  useEffect(() => {
    getPlanets();
  }, [])

  const getPlanets = () => {
    fetch('http://localhost:5000/api/planets')
      .then(response => response.json())
      .then(planets => setPlanets(planets));
  }

  const onPlanetSelected = function(planet){
    setSelectedPlanet(planet);
    setPlanetList(false)
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
    <div>
      <div className="main-container">
        <div>
          {selectedPlanet ? <PlanetDetail selectedPlanet={selectedPlanet}/> : null}
        </div>
        <div>
          {showPlanetList ? <PlanetList planets={planets} onPlanetSelected={onPlanetSelected}/> : null}
        </div>
      </div>
    </div>
  )
}

export default PlanetContainer
