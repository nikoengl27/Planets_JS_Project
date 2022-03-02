import React, {useEffect, useState} from "react";

const PeopleInSpace = () => {

    const [luckyBastards, setLuckyBastards] = useState(null)

    useEffect(() => {
        fetchPhoto()
    },[])

    const fetchPhoto = function () {
        fetch('http://api.open-notify.org/astros.json')
        .then (result => result.json())
        .then (data => setLuckyBastards(data)
        )
    }
    
    console.log(luckyBastards);
    // console.log(luckyBastards.people[0].name);
    // const  showAll = luckyBastards.people.map (console.log(showAll))

    if (!luckyBastards) return <div />

    return (

        <>
            <div className="peopleInSpace">
                <p><b>People currently in Space:</b></p>
                <p>Astronaut {luckyBastards.people[1].name} currently in orbit in the {luckyBastards.people[1].craft} craft.</p>
                {/* {showAll} */}
                <p>The number of people currently in space is {luckyBastards.number}</p>
            </div>
            <div className="liveVideo">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/86YLFOog4GM?&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </div>
        </>
    )


}


export default PeopleInSpace