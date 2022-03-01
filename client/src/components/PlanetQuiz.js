import React, {useState, useEffect} from 'react'
import './PlanetQuiz.css'

const PlanetQuiz = ({planets}) => {

const [showAnswers, setShowAnswers] = useState(false)
const [question1Planet, setQuestion1Planet] = useState([])
const [question2Planet, setQuestion2Planet] = useState([])
const [answer1, setAnswer1] = useState('')
const [answer2, setAnswer2] = useState('')
const [successState1, setSuccessState1] = useState(false)
const [successState2, setSuccessState2] = useState(false)
const [successStateOverall, setSuccessStateOverall] = useState(false)

const isPlanetList = planets.filter((planet) => planet.isPlanet === true)
const planetList = isPlanetList.map((planet) => ({name: planet.englishName, mass: planet.mass.massExponent, distance: planet.distanceFromTheSun, gravity: planet.gravity, volume: planet.vol.volExponent, namesake: planet.namesake}))
const planetNames = planetList.map((planet) => planet.name)
const randomPlanet1 = planetList[Math.floor(Math.random() * planetList.length)];
const randomPlanet2 = planetList[Math.floor(Math.random() * planetList.length)];


const question1 = `Which planet has a mass of ${question1Planet.mass}?`
const question2 = `Which planet has a namesake of ${question2Planet.namesake}`

useEffect(() => {
    getQuestion1Planet();
    getQuestion2Planet()
  }, [])

console.log(question1Planet.name)
console.log(answer1)

const submitQuiz = () => {
    setShowAnswers(true)
  }

const handleSubmit = (event) => {
    event.preventDefault()
    const payload = answer1
    setAnswer1(payload)
    console.log(payload)
    resultOne(question1Planet, answer1)
    resultTwo(question2Planet, answer2)
    finalResult()
    submitQuiz()
  }

const handleAnswerChange1 = (event) => {
    setAnswer1(event.target.value)
}

const handleAnswerChange2 = (event) => {
    setAnswer2(event.target.value)
}

const getQuestion1Planet = () => {
    setQuestion1Planet(randomPlanet1)
}

const getQuestion2Planet = () => {
    setQuestion2Planet(randomPlanet2)
}

const resultOne = (question1Planet, answer1) => {
    if(question1Planet.name === answer1){
        setSuccessState1(true) 
    } else {
        setSuccessState1(false)
    }
}

const resultTwo = (question2Planet, answer2) => {
    if(question2Planet.name === answer2){
        setSuccessState2(true) 
    } else {
        setSuccessState2(false)
    }
}

const finalResult = (successState1, successState2) => {
    if(successState1 === true || successState2 === true) {
        setSuccessStateOverall(true)
    } else {
        setSuccessState2(false)
    }
}

console.log(answer1)
console.log(answer2)



return(
    <>
    { showAnswers ? null : 
    <div className="quiz">
    <form onSubmit={handleSubmit}>

        <p>{question1} </p>
      <select name="first-planet" value={answer1} onChange={handleAnswerChange1}>
          <option disabled>Choose...</option>
  {planetNames.map((name) => (<option>{name}</option>))}
    </select>

        <p>{question2} </p>
      <select name="second-planet" value={answer2} onChange={handleAnswerChange2}>
          <option disabled>Choose...</option>
  {planetNames.map((name) => (<option>{name}</option>))}
    </select>

    <button onClick={submitQuiz}> Submit Answers</button>
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

    {successStateOverall ?
    <p> Well done you got them all!</p> :
    <p> Bad luck you didn't get them all. </p>}


    </div> 
    : null}
    </>
)


}

export default PlanetQuiz