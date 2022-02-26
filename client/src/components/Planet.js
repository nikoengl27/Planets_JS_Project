import React from "react";

const Planet = ({planet}) => {

    // const handleClick = function() {
    //     onPlanetClick(planet);
    // }

    return (
    <>
        <div className="planetName">
        {planet.isPlanet ? planet.englishName : null}
        <br></br>
        {planet.description}
        <br></br>
        {planet.lenghtOfYear}
        <br></br>
        {planet.distanceFromTheSun}
        <br></br>
        {planet.namesake}
        </div>
    </>
    )
}

export default Planet

        