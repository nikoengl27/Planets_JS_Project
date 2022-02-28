import React from "react";
import Planet from "./Planet";

const PlanetList = ({planets, onPlanetSelected, onPlanetSubmit}) => {

    const planetItems = planets.map((planet, index) => {
        if(planet.isPlanet){
        return <Planet planet={planet} key={index} image={planet} onPlanetClick={onPlanetSelected}/>
        }
    })

    return (
        <div className="planet-items">
            {planetItems}
        </div>
    )
}

export default PlanetList;