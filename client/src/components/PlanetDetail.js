import React, {useState} from 'react';
// import { deletePlanet } from './PlanetSelector';


const PlanetDetail = ({selectedPlanet, onPlanetSubmit}) => {

    const [englishName, setEnglishName] = useState('')
    const [description, setDescription] = useState('')
    const [isPlanet, setIsPlanet] = useState('')
    const [lengthOfYear, setLengthOfYear] = useState('')
    const [distanceFromTheSun, setDistanceFromTheSun] = useState('')
    const [namesake, setNamesake] = useState('')
    const [image, setImage] = useState('')


    const [showEdit, setEdit] = useState(false)
    const editButton = () => {
        setEdit(!showEdit)
      }

    const IsItPlanet = {
        Yes: 'Yes',
        No: 'No'
    }

    console.log(selectedPlanet);
    const handleDeletePlanet = () => {
        deletePlanet(selectedPlanet._id)
        .then(() => {
            window.location.reload()
        })
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
    
    const handleLengthOfYearChange = (event) => {
        setLengthOfYear(event.target.value)
    }

    const handleDistanceFromTheSun = (event) => {
        setDistanceFromTheSun(event.target.value)
    }
    const handleNamesake = (event) => {
        setNamesake(event.target.value)
    }

    const handleImageChange = (event) => {
        setImage(event.target.value)
    }

    const resetForm = () => {
        setEnglishName('')
        setDescription('')
        setIsPlanet('')
    }

    const baseURL = 'http://localhost:5000/api/planets/';
    
    const deletePlanet = (id) => {
        return fetch(baseURL + id, {
          method: 'DELETE'
        });
      }
      
    const handleFormSubmit = (event) => {
        event.preventDefault()
        const payload = {
            englishName,
            description,
            isPlanet,
            lengthOfYear,
            distanceFromTheSun,
            namesake
        }
        onPlanetSubmit(payload)
        console.log(payload)
        resetForm()
        window.location.reload()
    }
    
    //counts and fetches moons
    const moons = selectedPlanet.moons.map ((moon) => moon.moon)
    const newMoons = moons.join(', ')
    const countMoons = moons.length

    
    
  return (
        <>


        <div className="planet-image">
        <img src={selectedPlanet.img} height="300px" width= "300px"></img>
        </div>
        <div className="planet-details">
        <p><b> Name </b>: {selectedPlanet.englishName}</p>      
        <p><b>Description</b>: {selectedPlanet.description}</p>
        <p><b>Length of Year</b>: {selectedPlanet.lengthOfYear}</p>
        <p><b>Distance from Sun</b>: {selectedPlanet.distanceFromTheSun}</p>
        <p><b>Namesake</b>: {selectedPlanet.namesake}</p>

        <p><b> {selectedPlanet.englishName} has {countMoons} moons: </b></p>
        <p>{newMoons}</p>

        <div className='delete-edit-planet-buttons'>
            <button onClick={handleDeletePlanet}>Destroy Planet!</button>
            <button onClick={editButton}> Edit a Planet</button>
        </div>
        </div>

        {showEdit ?
        <div className='edit-planet'>
        <form onSubmit={handleFormSubmit} id="edit-planet-form" >
             <h2>Edit Planet Details:</h2>
          <div className="formWrap">
                <label htmlFor="name">Name: </label>
                <input 
                onChange={handleNameChange}
                type="text" 
                id="name" 
                value={englishName}
                placeholder={selectedPlanet.englishName}
                required />
            </div>
            <div className="formWrap">
                <label htmlFor="description">Description: </label>
                <input 
                onChange={handleDescriptionChange} 
                type="text" 
                id="description" 
                value={description}
                placeholder={selectedPlanet.description}
                />
            </div>
            <div className="formWrap">
                <label htmlFor="lengthOfYear">Length of Year: </label>
                <input 
                onChange={handleLengthOfYearChange} 
                type="text" 
                id="lengthOfYear" 
                value={lengthOfYear}
                placeholder={selectedPlanet.lengthOfYear}
                />
            </div>
            <div className="formWrap">
                <label htmlFor="distanceFromTheSun">Distance From The Sun: </label>
                <input 
                onChange={handleDistanceFromTheSun} 
                type="text" 
                id="distanceFromTheSun" 
                value={distanceFromTheSun}
                placeholder={selectedPlanet.distanceFromTheSun}
                />
            </div>
            <div className="formWrap">
                <label htmlFor="namesake">Namesake: </label>
                <input 
                onChange={handleNamesake}
                type="text" 
                id="namesake" 
                value={namesake}
                placeholder={selectedPlanet.namesake}
                />
            </div>
            <div className="formWrap">
                <label htmlFor="image">Image URL: </label>
                <input 
                onChange={handleImageChange}
                type="text" 
                id="image" 
                value={image}
                placeholder={selectedPlanet.image}
                />
            </div>
            <label htmlFor="isPlanet">Is it a planet though?</label>
            <select name="isPlanet" value={isPlanet} onChange={handleIsPlanetChange}>
            <option value="" disabled>Choose...</option>
            <option value={IsItPlanet.Yes}>Yes it is!</option>
            <option value={IsItPlanet.No}>Nope</option>
            </select>
           

            <input type="submit" value="Save" id="save"/>
	    </form>
        </div>
        : null}
        </>
        )


}

export default PlanetDetail;