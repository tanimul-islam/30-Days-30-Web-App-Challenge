const apiKey ="3b5b3ef74e9b0c8d0beef3ab60605093";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status === 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }

    else{
        var data= await response.json();


        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML =data.main.humidity +"%";
        document.querySelector(".wind").innerHTML =data.wind.speed + " km/h";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src ="/media/clouds.png"
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src ="/media/clear.png"
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src ="/media/rain.png"
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src ="/media/snow.png"
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src ="/media/mist.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src ="/media/drizzle.png"
        }
    
        document.querySelector(".weather").style.display ="block";s
        document.querySelector(".error").style.display="none";

    }
    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
