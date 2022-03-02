import React, {useEffect, useState} from "react";

const NasaPhoto = () => {

    const [photoData, setPhotoData] = useState(null)

    useEffect(() => {
        fetchPhoto()
    },[])

    const fetchPhoto = function () {
        fetch('https://api.nasa.gov/planetary/apod?api_key=qh5J2NarfvFJpnvasHmFNGBqoKyBQwhaDC62WIif')
        .then (result => result.json())
        .then (data => setPhotoData(data)
        )
    }
    console.log(photoData)

    if (!photoData) return <div />

    return (

        <div className="photoOfTheDay">
            <div>
                <img src={photoData.url} alt={photoData.title}></img>
            </div>
                <h1>{photoData.title}</h1>
                <p>{photoData.date}</p>
                <p>{photoData.explanation}</p>
        </div>
    )


}


export default NasaPhoto