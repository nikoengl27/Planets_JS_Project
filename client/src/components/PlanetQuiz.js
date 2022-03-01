import React, {useState, useEffect} from 'react'
import './PlanetQuiz.css'

const PlanetQuiz = ({planets}) => {

const [showAnswers, setShowAnswers] = useState(false)
const [question1Planet, setQuestion1Planet] = useState([])
const [answer1, setAnswer1] = useState('')
const [successState, setSuccessState] = useState(false)

const isPlanetList = planets.filter((planet) => planet.isPlanet === true)
const planetList = isPlanetList.map((planet) => ({name: planet.englishName, mass: planet.mass.massExponent, distance: planet.distanceFromTheSun, gravity: planet.gravity, volume: planet.vol.volExponent}))
const planetNames = planetList.map((planet) => planet.name)
const randomPlanet = planetList[Math.floor(Math.random() * planetList.length)];
// const randomPlanetName = question1Planet.name
// const randomPlanetMass = question1Planet.mass

// var objectKeys = Object.keys(planetList);
// const randomProperty = planetList[objectKeys[ objectKeys.length * Math.random() << 0]];
// console.log(randomProperty)
// console.log(objectKeys)

const question1 = `Which planet has a mass of ${question1Planet.mass}?`
// console.log(Object.values(planetList)[Math.floor(Math.random()*Object.keys(planetList).length)]);
// console.log(Object.getPropertyNames(planetList))

useEffect(() => {
    getQuestion1Planet();
  }, [])

console.log(question1Planet.name)
console.log(answer1)

const submitQuiz = () => {
    setShowAnswers(true)
  }

const handleSubmit = (event) => {
    event.preventDefault()
    // setAnswer1(answer1)
    result(question1Planet, answer1)
    submitQuiz()
  }

const handleAnswerChange = (event) => {
    setAnswer1(event.target.value)
}

const getQuestion1Planet = () => {
    setQuestion1Planet(randomPlanet)
}

const result = () => {
    if(answer1 === question1Planet.name){
        setSuccessState(true) 
    } else {
        setSuccessState(false)
    }
}
console.log(successState)
console.log(question1Planet.name)
console.log(answer1)




return(
    <>
    { showAnswers ? null : 
    <div className="quiz">
    <form onSubmit={handleSubmit}>
        <p>Hello {question1} </p>
      <select name="first-planet" value={answer1} onChange={handleAnswerChange}>
          <option disabled>Choose...</option>
  {planetNames.map((name) => (<option>{name}</option>))}
    </select>
    <button onClick={handleSubmit}> Submit Answers</button>
    </form>
    </div>}
    { showAnswers ?
    <div className="answers"> { successState ?
    <p>Question One Correct! You are correct in saying it is {answer1}.</p> :
    <p>Question One Very Very Wrong! The correct answer is {question1Planet.name} </p>}
    </div> : null}
    </>
)


}

export default PlanetQuiz