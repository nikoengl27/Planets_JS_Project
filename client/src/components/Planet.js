import React from "react";

const Planet = ({planet}) => {

    // const handleClick = function() {
    //     onPlanetClick(planet);
    // }

    return (
    <>
        <div className="planetName">
        {planet.isPlanet ? planet.englishName : null}
        </div>
    </>
    )
}

export default Planet

        