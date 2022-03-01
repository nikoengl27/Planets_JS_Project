import React, {useState} from 'react'
import './PlanetQuiz.css'

const PlanetQuiz = ({planets}) => {

const [showAnswers, setShowAnswers] = useState(false)
const [answer1, setAnswer1] = useState([])

const isPlanetList = planets.filter((planet) => planet.isPlanet === true)
const planetNameAndDetails = isPlanetList.map((planet) => ({name: planet.englishName, mass: planet.mass.massExponent, distance: planet.distanceFromTheSun, gravity: planet.gravity, volume: planet.vol.volExponent}))
const planetNames = planetNameAndDetails.map((planet) => planet.name)
const randomPlanet = planetNameAndDetails[Math.floor(Math.random() * planetNameAndDetails.length)];
// console.log(randomPlanet)

const submitQuiz = () => {
    setShowAnswers(true)
  }

const handleSubmit = (event) => {
    event.preventDefault()
    const payload = answer1
    setAnswer1(payload)
    console.log(payload)
    submitQuiz()
  }

const handleAnswerChange = (event) => {
    setAnswer1(event.target.value)
}




return(
    <>
    { showAnswers ? null : 
    <div className="quiz">
    <form onSubmit={handleSubmit}>
        <p>Random planet: {randomPlanet.name} </p>
      <select name="first-planet" value={answer1} onChange={handleAnswerChange}>
          <option disabled>Choose...</option>
  {planetNames.map((name) => (<option>{name}</option>))}
    </select>
    <button onClick={submitQuiz}> Submit Answers</button>
    </form>
    </div>}
    { showAnswers ?
    <div className="answers">
    <p>Answers here! {answer1}</p>
    </div> : null}
    </>
)


}

export default PlanetQuiz