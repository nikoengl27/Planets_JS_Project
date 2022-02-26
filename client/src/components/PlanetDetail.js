import React from 'react';
import PlanetContainer from '../containers/PlanetContainer';
// import deletePlanet from './PlanetSelector.js'


const PlanetDetail = ({selectedPlanet, PlanetContainer}) => {

    const baseURL = 'http://localhost:5000/api/planets/';

    const deletePlanet = (id) =>  {
        return fetch(baseURL + id, {
          method: 'DELETE'
        });
      }

    const handleDeletePlanet = () => {
        deletePlanet(selectedPlanet._id);
        console.log("planet deleted");
        getPlanets();
        
      }

    
    return (
        <>
        <img src={selectedPlanet.img} height="300px" width= "300px"></img>
        <p>{selectedPlanet.englishName}</p>      
        <p>{selectedPlanet.description}</p>
        <p>{selectedPlanet.lengthOfYear}</p>
        <p>{selectedPlanet.distanceFromTheSun}</p>
        <p>{selectedPlanet.namesake}</p>
        <button onClick={handleDeletePlanet}>
        <span>❌</span> Destroy Planet!
        </button>
        </>
        )


}

export default PlanetDetail;