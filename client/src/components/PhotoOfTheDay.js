import React, {useEffect, useState} from "react";

const NasaPhoto = () => {

    const [photoData, setPhotoData] = useState(null)

    useEffect(() => {
        fetchPhoto()
    },[])

    const baseURL = 'https://api.nasa.gov/planetary/apod?api_key=qh5J2NarfvFJpnvasHmFNGBqoKyBQwhaDC62WIif'

    const fetchPhoto = function () {
        fetch(baseURL)
        .then (result => result.json())
        .then (data => setPhotoData(data)
        )
    }
    console.log(photoData)

    if (!photoData) return <div />

    
    // const randomButton = () => {

    //     baseURL = (baseURL + '/&count=1')        
    // }
    
    // console.log(randomButton)

    return (

        <div className="photoOfTheDay">
            <div>
                <img src={photoData.url} alt={photoData.title}></img>
            </div>
                <h1>{photoData.title}</h1>
                <p>{photoData.date}</p>
                <p>{photoData.explanation}</p>
            <div className="picbuttons">
                {/* <button onClick={randomButton}> Random</button> */}
            </div>
            
        </div>


    )


}


export default NasaPhoto