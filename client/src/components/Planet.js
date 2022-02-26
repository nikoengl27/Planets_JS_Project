import React from "react";

const Planet = ({planet}) => {

    // const handleClick = function() {
    //     onPlanetClick(planet);
    // }

    return (
    <>
        <div className="planetName">
        <p>{planet.isPlanet ? planet.englishName : null} </p>       
        <p>{planet.description}</p>
        <p> {planet.lenghtOfYear}</p>
        <p>{planet.distanceFromTheSun}</p>
        <p>{planet.namesake}</p>
        </div>
    </>
    )
}

export default Planet

        