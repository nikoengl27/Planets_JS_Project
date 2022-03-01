import React from "react";

const Planet = ({planet, onPlanetClick}) => {

    const handleClick = function() {
        onPlanetClick(planet);
    }

    return (
    <>
    <div className="planetItem">
        <div onClick={handleClick}> 
            <div><b><u>{planet.isPlanet ? planet.englishName : null}</u></b></div>
        </div>
        <div>{planet.isPlanet ? <img src={planet.img} height="300px" width="300px"/> : null} </div>
    </div>
    </>
)};


export default Planet;
    