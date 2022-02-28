import { useEffect, useState } from 'react'
import PlanetList from '../components/PlanetList'
import PlanetDetail from '../components/PlanetDetail'
import NewPlanetForm from '../components/NewPlanetForm'

import PlanetCharts from '../components/PlanetCharts'
// import db from mongodb 


const PlanetContainer = () => {

  const baseURL = 'http://localhost:5000/api/planets/';
  const [planets, setPlanets] = useState([])
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [showPlanetList, setPlanetList] = useState(true)
  const [showAdd, setAdd] = useState(false)

  useEffect(() => {
    getPlanets();
  }, [])

  const getPlanets = () => {
    fetch(baseURL) 
      .then(response => response.json())
      .then(data => setPlanets(data));
  }

  const onPlanetSelected = function(planet){
    setSelectedPlanet(planet);
    setPlanetList(false)
  }

  const postPlanet = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(() => getPlanets())
}

const updatePlanet = (payload) => {
  return fetch(baseURL + selectedPlanet._id, {
    method: 'PUT',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json());
}



// const resetPlanets = () => {
//   db.dropDatabase()
//   db.load("/server/db/seeds.js")

// }

// const editPlanet = () => {
//   updatePlanet({
//     _id: selectedPlanet._id,
//     name: selectedPlanet.name,
//     description: selectedPlanet.description,
//   });
// }


  const addButton = () => {
    setAdd(!showAdd)
    setPlanetList(!showPlanetList)
  }

  return (
    <>
    <div className="main-container">

      <div class="header">
        <h1>The Solar System</h1>

      {/* <PlanetCharts planets={planets}/> */}
      <div className="new-planet">
        <button onClick={addButton}> ADD</button>
        {showAdd ? <NewPlanetForm planets={planets} onPlanetSubmit={postPlanet}/> : null}

      </div>
      <div className="planet-list">
        {selectedPlanet ? <PlanetDetail selectedPlanet={selectedPlanet} onPlanetSubmit={updatePlanet}/> : null}
      </div>
      <div>
        {showPlanetList ? <PlanetList planets={planets} onPlanetSelected={onPlanetSelected} /> : null}
      </div>
    </div>
  </div>
  </>
  )
}

export default PlanetContainer
