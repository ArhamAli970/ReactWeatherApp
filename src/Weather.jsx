import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Weather.css'
import { useState } from 'react';

export default function Weather({setResult}){

    let [city,setCity]=useState('');

    function val(evt){ 
        setCity(evt.target.value)
    }
// 

const url="https://api.openweathermap.org/data/2.5/weather";
const API_KEY="92ede27dec2eba28253bbf16ab053af3";



async function WeatherInfo(){ 
   let {data}= await axios.get(`${url}?q=${city}&appid=${API_KEY}&units=metric`);

//    console.log(data);

   let result={
    temp:data.main.temp,
    minTemp: data.main.temp_min,
    maxTemp: data.main.temp_max,
    humidity: data.main.humidity,
    feels:  data.main.feels_like,
    desc: data.weather[0].description,
    name:data.name

   }
console.log(result);
   return result;

}


async function handleSub(evt){  
        evt.preventDefault();
        console.log(city);
        setCity('');
        let result=await WeatherInfo();
        setResult(result);
}

    return(
<div className='box' onSubmit={handleSub}>
      {/* <h2>Weather Of City</h2> */}
      <form >
      <TextField id="outlined-basic" onChange={val} value={city} label="City Name" variant="outlined" required/>
      <br /><br />
      <Button variant="contained" type='submit'>Search</Button>
      </form>
</div>

    )
}

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}