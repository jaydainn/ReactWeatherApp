import React from "react"
import {Jumbotron} from "reactstrap"
const style = {
    jumbotron:{
        backgroundColor:"#ffffff"
    }
}
function WeatherCard(props){
    let weatherimg = ""
    if(props.data.weather[0].main === "Thunderstorm"){
        weatherimg = "https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png"

    }
    if(props.data.weather[0].main === "Clouds"){
        weatherimg = "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"

    }
    if(props.data.weather[0].main === "Rain"){
        weatherimg = "https://ssl.gstatic.com/onebox/weather/64/rain.png"

    }
    if(props.data.weather[0].main === "Clear" ||  props.data.weather[0].main == "Haze"){
        weatherimg = "https://ssl.gstatic.com/onebox/weather/64/sunny.png"

    }
    if(props.data.weather[0].main === "Snow"){
        weatherimg = "./data/Snow.png"

    }

    return (
        <div className="text-center">
        <Jumbotron style={style.jumbotron} className="text-center rounded">
            <h1>{props.data.name}</h1>
            <img src={weatherimg} />
            <h2>{Math.floor(props.data.main.temp -273.15)}°C</h2>
            <h2>Wind: {props.data.wind.speed} km/h</h2>
            

        </Jumbotron>
        </div>


    )



    



}






export default WeatherCard