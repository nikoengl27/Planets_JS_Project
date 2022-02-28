import React from "react";

const Planet = ({planet, onPlanetClick, onPlanetSubmit}) => {

    const handleClick = function() {
        onPlanetClick(planet);
    }

    return (
    <>
        <div onClick={handleClick}> 
            <div className="planetItem">
            <div>{planet.isPlanet ? planet.englishName : null} </div>
            <div>{planet.isPlanet ? <img src={planet.img} height="300px" width="300px"/> : null} </div>
            </div>
        </div>
    </>
)};


export default Planet;
    