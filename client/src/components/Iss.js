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
                <h2><b>People currently in Space: {luckyBastards.number}</b></h2>
                <p>{luckyBastards.people[0].name} currently in orbit in the {luckyBastards.people[0].craft} craft.</p>
                <p>{luckyBastards.people[1].name} currently in orbit in the {luckyBastards.people[1].craft} craft.</p>
                <p>{luckyBastards.people[2].name} currently in orbit in the {luckyBastards.people[2].craft} craft.</p>
                <p>{luckyBastards.people[3].name} currently in orbit in the {luckyBastards.people[3].craft} craft.</p>
                <p>{luckyBastards.people[4].name} currently in orbit in the {luckyBastards.people[4].craft} craft.</p>
                <p>{luckyBastards.people[5].name} currently in orbit in the {luckyBastards.people[5].craft} craft.</p>
                <p>{luckyBastards.people[6].name} currently in orbit in the {luckyBastards.people[6].craft} craft.</p>
                <p>{luckyBastards.people[7].name} currently in orbit in the {luckyBastards.people[7].craft} craft.</p>
                <p>{luckyBastards.people[8].name} currently in orbit in the {luckyBastards.people[8].craft} craft.</p>
                <p>{luckyBastards.people[9].name} currently in orbit in the {luckyBastards.people[9].craft} craft.</p>
            </div>
            <div className="liveVideo">
            <h2>ISS - Live Feed</h2>
            <iframe width="600" height="350" src="https://www.youtube.com/embed/86YLFOog4GM?&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </div>
        </>
    )


}


export default PeopleInSpace