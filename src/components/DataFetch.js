import React, {useState, useEffect} from 'react'
import axios from 'axios'
import PhotoCard from './PhotoCard'
function DataFetch() {
    const [photoInfo, setPhotoInfo] = useState({})
    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=y7LVal7n67ymFfeAnFPKo73dUE8wIp3J4WXllqfW')
            .then(res => {
                console.log(res)
                setPhotoInfo(res.data)
            })
            .catch(error => {
                console.log('I am the error', error)
            })
    }, [])
    return (
        <div>
       
           
        </div>
    )
}

export default DataFetch
