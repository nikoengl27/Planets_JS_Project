import React from "react";
import Planet from "./Planet";
import PlanetDetail from "./Planet";

const PlanetList = ({planets}) => {

    const planetItems = planets.map((planet, index) => {
        return <Planet planet={planet} key={index} image={planet} />
    })

    return (
        <div className="planet-list">
            {planetItems}
        </div>
    )
}

export default PlanetList;
