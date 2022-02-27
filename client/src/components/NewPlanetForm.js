// import {useState} from "react";
// import { postPlanet } from "./PlanetSelector";
// import PlanetContainer from "../containers/PlanetContainer";
// import Planet from "./Planet";

// const NewPlanetForm = ({setPlanets, planet}) => {
    
//     const [name, setName] = useState('')
//     const [description, setDescription] = useState('')

//     const handleNameChange = (ev) => setName(ev.target.value);
//     const handleDescriptionChange = (ev) => setDescription(ev.target.value);

//     const onChange = (e) =>{
//         formData[e.target.id] = e.target.value;
//         setFormData(formData)
//     },

//     const addPlanet = (planet) =>{
//         console.log(formData)
//         const temp = planets.map((planet, index) => {
//         <Planet planet={planet} name={planet.englishName} description={planet.description}/>
//         });
//         temp.push(planet);
       
//         setPlanets(temp);
//     }

//     addPlanet(planet) {
//         return fetch(baseURL, {
//             method: 'POST',
//             body: JSON.stringify(planet),
//             headers: {
//                 'Content-Type': 'application/json'
//           }
//         })
//           .then(res => res.json());
//       }
    
//     const onSubmit = (e) =>{
//         e.preventDefault();
//         addPlanet({
//             name: name,
//             description: description,
//         });
//         setName("");
//         setDescription("");
//         }
//     }
    

//     return (
//         <form onSubmit={onSubmit} id="new-planet-form" >
//             <h2>You've Discovered a New Planet!!</h2>
//             <div className="formWrap">
//                 <label htmlFor="name">Name:</label>
//                 <input 
//                 onChange={handleNameChange}
//                 type="text" 
//                 id="name" 
//                 value={name}
//                 required />
//             </div>
//             <div className="formWrap">
//                 <label htmlFor="description">Description:</label>
//                 <input 
//                 onChange={handleDescriptionChange} 
//                 type="text" 
//                 id="description" 
//                 value={description}
//                 required />
//             </div>
           

//             <input type="submit" value="Save" id="save"/>
// 	    </form>

//     );


// export default NewPlanetForm;

import React, { useState } from "react";

const PlanetForm = ({onPlanetSubmit}) => {

    const [englishName, setEnglishName] = useState('')
    const [description, setDescription] = useState('')
    const [isPlanet, setIsPlanet] = useState('')
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