import React, {useState, useEffect} from 'react'
import axios from 'axios'
function DataFetch() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=y7LVal7n67ymFfeAnFPKo73dUE8wIp3J4WXllqfW')
            .then(res => {
                console.log('I am the response', res)
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
