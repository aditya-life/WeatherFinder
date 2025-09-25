import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ weatherInfo }) {

    let rainUrl = "https://images.unsplash.com/uploads/14116603688211a68546c/30f8f30b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let hotUrl = "https://images.unsplash.com/photo-1615752592676-f6bd84f9419d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let coldUrl = "https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="InfoBox">
            <Card sx={{ maxWidth: 360 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={
                        weatherInfo.humidity > 80 && weatherInfo.temp > 20
                        ? rainUrl
                        : weatherInfo.temp > 15
                        ? hotUrl
                        : coldUrl
                    }
                    alt="image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {weatherInfo.city} &nbsp;
                        {weatherInfo.humidity > 80 && weatherInfo.temp > 20
                        ? <ThunderstormIcon ontSize='small' />
                        : weatherInfo.temp > 15
                        ? <WbSunnyIcon fontSize='small' />
                        : <AcUnitIcon ontSize='small' />
                        }
                    </Typography>
                    <Typography variant="body2" component="div" sx={{ color: 'text.secondary' }}>
                        <p>Temprature: {weatherInfo.temp}℃</p>
                        <p>Humidity: {weatherInfo.humidity}</p>
                        <p>Max. Temprature: {weatherInfo.tempMax}℃</p>
                        <p>Min. Temprature: {weatherInfo.tempMin}℃</p>
                        <p> The weather can be described as {weatherInfo.weather} and feels like {weatherInfo.feelsLike}.</p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}