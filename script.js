let weather ={
    apiKey: "fe4fff594a4888855d1b1cb52405061f",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city + "&units=metric&appid=" + this.apiKey
        ).then((response) => response.json()).then((data) =>
        this.displayWeather(data));//when "weather.fetchWeather()" is entered in the console or called, it will fetch the data from the weather api
    },
    displayWeather: function(data) {
        //breaking down the data object into variables that I can work with
        const cityName = data.name;
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
        //Professional "debugging" skills 
        console.log(cityName, temperature, humidity, windSpeed, description, icon);
        //replacing the default text with search results info
        document.querySelector(".city").innerText = "Weather in " + cityName;
        document.querySelector(".temperature").innerText = temperature + "°C";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon +"@2x.png";
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerHTML = "Wind Speed: " + windSpeed + "km/h";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ cityName + "')";
    },
    search: function (){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function() {
    weather.search();//search with button click
});

document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if(event.key== "Enter"){
        weather.search();//search with button click
    }
});

//Default load my current city's weather info
weather.fetchWeather("Brampton");