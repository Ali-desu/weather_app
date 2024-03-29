document.addEventListener('DOMContentLoaded',function(){

    const apiKey = "15ea9e20c5640dce60ba0edc1fbee1e3";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
    const weatherIcon = document.querySelector('.weather-icon');

    document.getElementById("city_button").addEventListener('click',function(){
        const cityName = document.getElementById("input_city").value;
        checkWeather(cityName);
    });

    document.getElementById("input_city").addEventListener('keydown',function(e){
        if(e.key === 'Enter'){
        e.preventDefault();
        const cityName = document.getElementById("input_city").value;
        checkWeather(cityName);
        }
    });
    
    async function checkWeather(city){

        
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        const data = await response.json();

        

        if(response.status == 404){
            document.querySelector('.error').style.display="block";
            document.querySelector('.weather').style.display="none";
        }
        
        else{
        document.querySelector('.error').style.display="none";

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = (data.main.temp - 273.15).toFixed(0) + "°C";
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "images/snow.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Wind"){
            weatherIcon.src = "images/wind.png";
        }
       document.querySelector('.weather').style.display = "block";
    }

    }

  
}); 