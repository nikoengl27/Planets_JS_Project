
import React, { useState } from "react";

const PlanetForm = ({onPlanetSubmit}) => {

    const [englishName, setEnglishName] = useState('')
    const [description, setDescription] = useState('')
    const [isPlanet, setIsPlanet] = useState('')
    const [image, setImage] = useState('')
    // const img = '/client/src/images/unknownplanet.png'

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

    const handleIsPlanetChange = (event) => {
        setIsPlanet(event.target.value)
    }
    const handleImageChange = (event) => {
        setImage(event.target.value)
    }

    const resetForm = () => {
        setEnglishName('')
        setDescription('')
        setIsPlanet('')
        setImage('')
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        const payload = {
            englishName,
            description,
            isPlanet,
            image
            // img
        }
        onPlanetSubmit(payload)
        resetForm()
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="englishName">Name:</label>
            <input type="text" name="englishName" value={englishName} onChange={handleNameChange} required/>
        
            <label htmlFor="description">Description:</label>
            <input type="text" name="description" value={description} onChange={handleDescriptionChange} required/>
      
            <label htmlFor="image">Image URL:</label>
            <input type="text" name="image" value={image} onChange={handleImageChange} required/>
      
            <label htmlFor="isPlanet">Is it a planet though?</label>
            <select name="isPlanet" value={isPlanet} onChange={handleIsPlanetChange}>
            <option value="" disabled>Choose...</option>
            <option value={IsItPlanet.Yes}>Yes it is!</option>
            <option value={IsItPlanet.No}>Nope</option>
            </select>

            <input type="submit" value="Save" />
            
        </form>
        
        
    )
}

export default PlanetForm;