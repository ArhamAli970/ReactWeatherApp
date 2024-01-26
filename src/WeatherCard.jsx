import Card from '@mui/material/Card';
import './WeatherCard.css';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import UmbrellaIcon from '@mui/icons-material/Umbrella';

import Typography from '@mui/material/Typography';

export default function WeatherCard({result}){ 

  const COLD_URL="https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const HOT_URL="https://images.unsplash.com/photo-1633319953844-13fd81b2feac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdCUyMHdlYXRoZXIlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D";
  const RAINY_URL="https://images.unsplash.com/photo-1694153309338-0a20492af0d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbnklMjB3ZWF0aGVyJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D";


    return(
    <div className='cardC'>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={result.humidity>80?RAINY_URL: result.temp<=16 ? COLD_URL : HOT_URL }
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <h3><span>{result.name}</span> <span>{result.humidity>80?<UmbrellaIcon/>: result.temp<=16 ? <AcUnitIcon/> : <WbSunnyIcon/> }</span></h3> 
          </Typography>
          <Typography variant="body2" color="text.secondary">
           <p>Temperature: { result.temp } </p> 
           <p>Max-Temperature: { result.maxTemp } </p> 
           <p>Min-Temperature: { result.minTemp } </p> 
           <p>Humidity: { result.humidity } </p> 
           <p>Feels: { result.feels } </p> 
           <p> Description:{ result.desc } </p>

          </Typography>
        </CardContent>
       
      </Card>
      </div>
    )
}