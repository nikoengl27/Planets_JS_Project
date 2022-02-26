import React from 'react';

const PlanetDetail = ({planets, selectedPlanet}) => {

    
    return (
        <>
        <img src={selectedPlanet.img} height="300px" width= "300px"></img>
        <p>{selectedPlanet.englishName}</p>      
        <p>{selectedPlanet.description}</p>
        <p>{selectedPlanet.lengthOfYear}</p>
        <p>{selectedPlanet.distanceFromTheSun}</p>
        <p>{selectedPlanet.namesake}</p>
        </>
        )


}

export default PlanetDetail;