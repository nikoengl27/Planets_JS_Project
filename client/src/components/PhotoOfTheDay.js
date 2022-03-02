import { registerRendererType } from "highcharts";
// import $ from "jquery";
import React, {useEffect, useState} from "react";

const NasaPhoto = () => {

    const [photoData, setPhotoData] = useState([])

    useEffect(() => {
        fetchPhoto()
    },[])

    const baseURL = 'https://api.nasa.gov/planetary/apod?api_key=qh5J2NarfvFJpnvasHmFNGBqoKyBQwhaDC62WIif&count=1'

    const fetchPhoto = function () {
        fetch(baseURL)
        .then (result => result.json())
        .then (data => setPhotoData(data[0])
        )
    }
    
    console.log(photoData[0]);

    if (!photoData) return <div />
    
    
    return (

        <div className="photoOfTheDay">
            <div>
                <img src={photoData.url} alt={photoData.title}></img>
            </div>
                <h1>{photoData.title}</h1>
                <p>{photoData.date}</p>
                <p>{photoData.explanation}</p>
            <div className="picbuttons">
                {/* <button onClick={$( "#photoOfTheDay" ).load(window.location.href + " #photoOfTheDay" )}> Random</button> */}
            </div>  
        </div>
    )
}

export default NasaPhoto