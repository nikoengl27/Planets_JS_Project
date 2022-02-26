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