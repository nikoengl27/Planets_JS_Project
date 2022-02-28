import React, {useState} from 'react';
import { deletePlanet } from './PlanetSelector';


const PlanetDetail = ({selectedPlanet, onPlanetSubmit}) => {

    

    const [englishName, setEnglishName] = useState('')
    const [description, setDescription] = useState('')
    const [isPlanet, setIsPlanet] = useState('')

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

    const resetForm = () => {
        setEnglishName('')
        setDescription('')
        setIsPlanet('')
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        const payload = {
            englishName,
            description,
            isPlanet,
        }
        onPlanetSubmit(payload)
        console.log(payload)
        resetForm()
        window.location.reload()
    }

    const moons = selectedPlanet.moons.map ((moon) => moon.moon)
    const newMoons = moons.join(' ')
    const countMoons = moons.length

    
    
  return (
        <>

        <button onClick={editButton}> edit</button>


        <img src={selectedPlanet.img} height="300px" width= "300px"></img>
        <p>{selectedPlanet.englishName}</p>      
        <p> Description: {selectedPlanet.description}</p>
        <p> Length of Year: {selectedPlanet.lengthOfYear}</p>
        <p> Distance from the Sun: {selectedPlanet.distanceFromTheSun}</p>
        <p> Namesake: {selectedPlanet.namesake}</p>
        <p> {selectedPlanet.englishName} has {countMoons} moons:</p>
        <p>{newMoons}</p>

        <button onClick={handleDeletePlanet}>
        <span>❌</span> Destroy Planet!
        </button>

        <div className='planet-image'>
        <img src={selectedPlanet.img} height="300px" width= "300px"></img>
        </div>
        <div className='planet-details'>
        <p><u>Name</u>: {selectedPlanet.englishName}</p>      
        <p><u>Description</u>: {selectedPlanet.description}</p>
        <p><u>Lenght of Year</u>: {selectedPlanet.lengthOfYear}</p>
        <p><u>Distance from Sun</u>: {selectedPlanet.distanceFromTheSun}</p>
        <p><u>Namesake</u>: {selectedPlanet.namesake}</p>
        <div className='delete-planet'>
            <button onClick={handleDeletePlanet}>
            Destroy Planet!
            </button>
        </div>
        </div>

        <div className='edit-planet'>
        <form onSubmit={handleFormSubmit} id="edit-planet-form" >
             <h2>Edit Planet Details:</h2>
          <div className="formWrap">
                <label htmlFor="name">Name:</label>
                <input 
                onChange={handleNameChange}
                type="text" 
                id="name" 
                value={englishName}
                required />
            </div>
            <div className="formWrap">
                <label htmlFor="description">Description:</label>
                <input 
                onChange={handleDescriptionChange} 
                type="text" 
                id="description" 
                value={description}
                required />
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
        </>
        )


}

export default PlanetDetail;