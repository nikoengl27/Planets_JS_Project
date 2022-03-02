import React, {useState, useEffect} from 'react'
import './PlanetQuiz.css'

const PlanetQuiz = ({planets}) => {

const [showAnswers, setShowAnswers] = useState(false)
const [question1Planet, setQuestion1Planet] = useState([])
const [question2Planet, setQuestion2Planet] = useState([])
const [question3Planet, setQuestion3Planet] = useState([])
const [answer1, setAnswer1] = useState('')
const [answer2, setAnswer2] = useState('')
const [answer3, setAnswer3] = useState('')
const [successState1, setSuccessState1] = useState(false)
const [successState2, setSuccessState2] = useState(false)
const [successState3, setSuccessState3] = useState(false)
var [score, setScore] = useState(0)

const isPlanetList = planets.filter((planet) => planet.isPlanet === true)
const planetList = isPlanetList.map((planet) => ({name: planet.englishName, mass: planet.mass.massExponent, distance: planet.distanceFromTheSun, gravity: planet.gravity, volume: planet.vol.volExponent, namesake: planet.namesake}))
const planetNames = planetList.map((planet) => planet.name)
const planetDistances = planetList.map((planet) => planet.distance)
const randomPlanet1 = planetList[Math.floor(Math.random() * planetList.length)];
const randomPlanet2 = planetList[Math.floor(Math.random() * planetList.length)];

const question1 = `Which planet has a mass of ${question1Planet.mass}?`
const question2 = `Which planet has the namesake: ${question2Planet.namesake}?`
const question3 = `How far is ${question3Planet.name} from the sun, in astronomincal units (AU)?`

useEffect(() => {
    getQuestion1Planet();
    getQuestion2Planet();
    getQuestion3Planet();
  }, [])

console.log(question1Planet.name)
console.log(answer1)
console.log(randomPlanet1.length)

const submitQuiz = () => {
    setShowAnswers(true)
  }

const handleSubmit = (event) => {
    event.preventDefault()
    result1(question1Planet, answer1)
    result2(question2Planet, answer2)
    result3(question3Planet, answer3)
    console.log(score)
    submitQuiz()
  }

const handleAnswerChange1 = (event) => {
    setAnswer1(event.target.value)
}

const handleAnswerChange2 = (event) => {
    setAnswer2(event.target.value)
}

const handleAnswerChange3 = (event) => {
    setAnswer3(event.target.value)
}

const getQuestion1Planet = () => {
    setQuestion1Planet(randomPlanet1)
}

const getQuestion2Planet = () => {
    setQuestion2Planet(randomPlanet2)
}

const getQuestion3Planet = () => {
    setQuestion3Planet(randomPlanet2)
}

const result1 = () => {
    if(answer1 === question1Planet.name){
        setSuccessState1(true) 
        setScore(score += 1)
    } else {
        setSuccessState1(false)
    }
}

const result2 = () => {
    if(answer2 === question2Planet.name){
        setSuccessState2(true) 
        setScore(score += 1)
    } else {
        setSuccessState2(false)
    }
}

const result3 = () => {
    if(answer3 == question3Planet.distance){
        setSuccessState3(true) 
        setScore(score += 1)
    } else {
        setSuccessState3(false)
    }
}


console.log(successState1)
console.log(question1Planet.name)
console.log(question2Planet.name)
console.log(question3Planet.distance)
console.log(score)




return(
    <>
    { showAnswers ? null : 
    <div className="quiz">
    <form onSubmit={handleSubmit}>

        <p>Hello {question1} </p>
      <select name="first-planet" value={answer1} onChange={handleAnswerChange1}>
          <option disabled>Choose...</option>
  {planetNames.map((name) => (<option>{name}</option>))}
    </select>

    <p>{question2} </p>
      <select name="second-planet" value={answer2} onChange={handleAnswerChange2}>
          <option disabled>Choose...</option>
  {planetNames.map((name) => (<option>{name}</option>))}
    </select>
        <br></br>
        <br></br>
    <button onClick={handleSubmit}> Submit Answers</button>

    <p>{question3} </p>
      <select name="third-planet" value={answer3} onChange={handleAnswerChange3}>
          <option disabled>Choose...</option>
  {planetDistances.map((distance) => (<option>{distance}</option>))}
    </select>
        <br></br>
        <br></br>
    <button onClick={handleSubmit}> Submit Answers</button>
    </form>
    </div>}

    { showAnswers ?
    <div className="answers"> 
    
    { successState1 ?
    <p>Question One Correct! You are correct in saying it is {answer1}.</p> :
    <p>Question One Very Very Wrong! The correct answer is {question1Planet.name} </p>}


    { successState2 ?
    <p>Question Two Correct! You are correct in saying it is {answer2}.</p> :
    <p>Question Two Very Very Wrong! The correct answer is {question2Planet.name} </p>}

    { successState3 ?
    <p>Question Three Correct! You are correct in saying it is {answer3}.</p> :
    <p>Question Three Very Very Wrong! The correct answer is {question3Planet.distance} </p>}

    <p>You scored {score} out of a possible 3!</p>

    {score = 3 ?
    <p> Well done you got them all!</p> :
    <p> Bad luck you didn't get them all. </p>}

    </div> : null}
    </>
)


}

export default PlanetQuiz