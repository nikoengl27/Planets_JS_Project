import { useEffect, useState } from 'react'
import PlanetList from '../components/PlanetList'
import PlanetDetail from '../components/PlanetDetail'
import NewPlanetForm from '../components/NewPlanetForm'
import PlanetCharts from '../components/PlanetCharts'

const PlanetContainer = () => {

  const baseURL = 'http://localhost:5000/api/planets/';
  const [planets, setPlanets] = useState([])

  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [showPlanetList, setPlanetList] = useState(true)
  const [showAdd, setAdd] = useState(false)
  const [showAbout, setAbout] = useState(false)

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

  const homeButton = () => {
    setAdd(false)
    setPlanetList(true)
    setAbout(false)
    setSelectedPlanet(null)
  }

  const addButton = () => {
    setAdd(true)
    setPlanetList(false)
    setAbout(false)
    setSelectedPlanet(null)
  }

  const aboutButton = () => {
    setAbout(true)
    setPlanetList(false)
    setAdd(false)
    setSelectedPlanet(null)
  }

  return (
    <>
    <div className="main-container">
      
      <div className="header">
        {/* <h1>The Solar System</h1> */}
      </div>
      <div className='title'>
        <h2>The Solar System</h2>
      </div>

      {showAbout ?
      <>
        <div className="about">
          <p>The planetary system we call home is located in an outer spiral arm of the Milky Way galaxy.</p>
          <p>Our solar system consists of our star, the Sun, and everything bound to it by gravity – 
            the planets Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune; dwarf planets such as Pluto; 
            dozens of moons; and millions of asteroids, comets, and meteoroids.</p>
            <h3>Namesake</h3>
            <p>There are many planetary systems like ours in the universe, with planets orbiting a host star. 
              Our planetary system is named the "solar system" because our Sun is named Sol, after the Latin word for Sun, "solis," 
              and anything related to the Sun we call "solar."</p>
            <h3>Moons</h3>
            <p>There are more than 200 known moons in our solar system and several more awaiting confirmation of discovery. 
              Of the eight planets, Mercury and Venus are the only ones with no moons. The giant planets Jupiter and Saturn lead our solar system’s moon counts. 
              In some ways, the swarms of moons around these worlds resemble mini versions of our solar system. 
              Pluto, smaller than our own moon, has five moons in its orbit, including the Charon, a moon so large it makes Pluto wobble. Even tiny asteroids can have moons.</p>
            <h3>Formation</h3>
            <p>Our solar system formed about 4.5 billion years ago from a dense cloud of interstellar gas and dust. 
              The cloud collapsed, possibly due to the shockwave of a nearby exploding star, called a supernova. 
              When this dust cloud collapsed, it formed a solar nebula – a spinning, swirling disk of material.</p>
            <p>At the center, gravity pulled more and more material in. 
              Eventually, the pressure in the core was so great that hydrogen atoms began to combine and form helium, releasing a tremendous amount of energy. 
              With that, our Sun was born, and it eventually amassed more than 99% of the available matter.</p>
            <h3>Structure</h3>
            <p>The order and arrangement of the planets and other bodies in our solar system is due to the way the solar system formed. 
              Nearest to the Sun, only rocky material could withstand the heat when the solar system was young. 
              For this reason, the first four planets – Mercury, Venus, Earth, and Mars – are terrestrial planets. 
              They are all small with solid, rocky surfaces.</p>
            <p>Meanwhile, materials we are used to seeing as ice, liquid, or gas settled in the outer regions of the young solar system. 
              Gravity pulled these materials together, and that is where we find gas giants Jupiter and Saturn, and the ice giants Uranus and Neptune.</p>
        </div> 
          <div className='charts'>
            <PlanetCharts planets={planets}/>
        </div>
      </>
      : null}

      <div className="buttons">
        <button onClick={homeButton}> Home</button>
        <button onClick={aboutButton}> About</button>
        <button onClick={addButton}> Add</button>
      </div>

      <div className="new-planet">
        {showAdd ? <NewPlanetForm planets={planets} onPlanetSubmit={postPlanet} /> : null}
      </div>

      <div className="planet-detail">
        {selectedPlanet ? <PlanetDetail selectedPlanet={selectedPlanet} onPlanetSubmit={updatePlanet} /> : null}
      </div>
      <div className="planet-list">
        {showPlanetList ? <PlanetList planets={planets} onPlanetSelected={onPlanetSelected} /> : null}
      </div>
    
  </div>
  </>
  )
}

export default PlanetContainer
