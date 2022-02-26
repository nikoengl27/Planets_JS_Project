import React from 'react';
import { deletePlanet } from './PlanetSelector';
import PlanetContainer from '../containers/PlanetContainer';
// import deletePlanet from './PlanetSelector.js'


const PlanetDetail = ({selectedPlanet}) => {

    const baseURL = 'http://localhost:5000/api/planets/';

    console.log(selectedPlanet);
    const handleDeletePlanet = () => {
        deletePlanet(selectedPlanet._id)
        .then(() => {
            window.location.reload()
        })
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