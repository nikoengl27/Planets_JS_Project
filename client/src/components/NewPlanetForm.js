
import React, { useState } from "react";

const PlanetForm = ({onPlanetSubmit}) => {

    const [englishName, setEnglishName] = useState('')
    const [description, setDescription] = useState('')
    const [lengthOfYear, setLengthOfYear] = useState('')
    const [distanceFromTheSun, setDistanceFromTheSun] = useState('')
    const [namesake, setNamesake] = useState('')
    const [isPlanet, setIsPlanet] = useState('')
    const [image, setImage] = useState('')

    const IsItPlanet = {
        Yes: 'Yes',
        No: 'No'
    }

    const handleNameChange = (event) => {
        setEnglishName(event.target.value)
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    }

    const handleLengthOfYearChange = (event) => {
        setLengthOfYear(event.target.value)
    }

    const handleDistanceFromTheSun = (event) => {
        setDistanceFromTheSun(event.target.value)
    }
    const handleNamesake = (event) => {
        setNamesake(event.target.value)
    }

    const handleIsPlanetChange = (event) => {
        setIsPlanet(event.target.value)
    }
    const handleImageChange = (event) => {
        setImage(event.target.value)
    }

    const moons = []

    const handleFormSubmit = (event) => {
        event.preventDefault()
        const payload = {
            englishName,
            description,
            isPlanet,
            lengthOfYear,
            distanceFromTheSun,
            namesake,
            image,
            moons
        }
        onPlanetSubmit(payload)
        window.location.reload()

    }

    return (
        
        <div className="new-planet-form">
            <form onSubmit={handleFormSubmit}>
                <p>
                    <label htmlFor="englishName">Name: </label>
                    <input type="text" name="englishName" value={englishName} onChange={handleNameChange} required/>
                </p>
                <p>
                <label htmlFor="description">Description: </label>
                <input type="text" name="description" value={description} onChange={handleDescriptionChange} required/>
                </p>
                <p>
                <label htmlFor="lengthOfYear">Length of Year: </label>
                <input type="text" name="lengthOfYear" value={lengthOfYear} onChange={handleLengthOfYearChange} required/>
                </p>
                <p>
                <label htmlFor="distanceFromTheSun">Distance from the sun: </label>
                <input type="text" name="distanceFromTheSun" value={distanceFromTheSun} onChange={handleDistanceFromTheSun} required/>
                </p>
                <p>
                <label htmlFor="namesake">Namesake: </label>
                <input type="text" name="namesake" value={namesake} onChange={handleNamesake} required/>
                </p>
                <p>
                <label htmlFor="image">Image URL:</label>
                <input type="text" name="image" value={image} onChange={handleImageChange}/>
                </p>
                <p>
                <label htmlFor="isPlanet">Is it a planet though?</label>
                <select name="isPlanet" value={isPlanet} onChange={handleIsPlanetChange}>
                <option value="" disabled>Choose...</option>
                <option value={IsItPlanet.Yes}>Yes it is!</option>
                <option value={IsItPlanet.No}>Nope</option>
                </select>
                </p>

                <input type="submit" value="Save" />
            
            </form>
        </div>
        
        
    )
}

export default PlanetForm;