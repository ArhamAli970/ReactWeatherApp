 import Weather from "./Weather"
 import WeatherCard from "./WeatherCard"
 import './WeatherInf.css'
 import { useState } from "react"
 export default function WeatherInf(){ 

    let [ result,setResult ]=useState({
        temp:0,
        minTemp: 0,
        maxTemp:0,
        humidity: 0,
        feels:  "",
        desc: 0,
        name:""
            })



    return (


    <div className="cardCont">
<h1  style={{textAlign:"center"}}> Today's Weather of City </h1>
<Weather setResult={setResult} />
<WeatherCard result={result}/>

        </div>

    )

 }