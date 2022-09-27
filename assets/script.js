const citySpan = document.getElementById('city');
const tempSpan = document.getElementById('temp');
const windSpan = document.getElementById('wind');
const humiditySpan = document.getElementById('humidity');
const searchedEl = document.getElementById('searched-cities');
const search = document.getElementById('search');
const cityForm = document.getElementById('city-name');
const dateSpan = document.getElementById('date');
const dayOneDate = document.getElementById('day-one-date');
const dayTwoDate = document.getElementById('day-two-date');
const dayThreeDate = document.getElementById('day-three-date');
const dayFourDate = document.getElementById('day-four-date');
const dayOneTemp = document.getElementById('day-one-temp');
const dayTwoTemp = document.getElementById('day-two-temp');
const dayThreeTemp = document.getElementById('day-three-temp');
const dayFourTemp = document.getElementById('day-four-temp');
const dayOneWind = document.getElementById('day-one-wind');
const dayTwoWind = document.getElementById('day-two-wind');
const dayThreeWind = document.getElementById('day-three-wind');
const dayFourWind = document.getElementById('day-four-wind');
const dayOneHumidity = document.getElementById('day-one-humidity');
const dayTwoHumidity = document.getElementById('day-two-humidity');
const dayThreeHumidity = document.getElementById('day-three-humidity');
const dayFourHumidity = document.getElementById('day-four-humidity');

// let apiKey = "f5f2f5a01947a3884ab3b3064c13c0e2"
// let weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityForm.value}&appid=f5f2f5a01947a3884ab3b3064c13c0e2&units=imperial`


function weatherAPI() {
fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityForm.value}&appid=f5f2f5a01947a3884ab3b3064c13c0e2&units=imperial`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        citySpan.textContent = (data.city.name)
        tempSpan.textContent = (`${data.list[6].main.temp} F`)
        windSpan.textContent = (`${data.list[6].wind.speed} MPH`)
        humiditySpan.textContent = (`${data.list[6].main.humidity}%`)
        dateSpan.textContent = (moment.unix(data.list[6].dt).format('MMMM Do YYYY'))
        
        
        const searchedList = document.createElement('button')
        searchedList.textContent = (`${cityForm.value}`)
        searchedList.setAttribute = ('data-id', cityForm.value)
        const listItem = searchedList.getAttribute('data-id')
        searchedEl.appendChild(searchedList)
        
        searchedList.addEventListener('click', function () {
        })

        dayOneDate.textContent = (moment.unix(data.list[14].dt).format('MMMM Do, YYYY'))
        dayTwoDate.textContent = (moment.unix(data.list[22].dt).format('MMMM Do, YYYY'))
        dayThreeDate.textContent = (moment.unix(data.list[30].dt).format('MMMM Do, YYYY'))
        dayFourDate.textContent = (moment.unix(data.list[38].dt).format('MMMM Do, YYYY'))
        
        dayOneTemp.textContent = (`Temp: ${data.list[14].main.temp} F`)
        dayTwoTemp.textContent = (`Temp: ${data.list[22].main.temp} F`)
        dayThreeTemp.textContent = (`Temp: ${data.list[30].main.temp} F`)
        dayFourTemp.textContent = (`Temp: ${data.list[38].main.temp} F`)

        dayOneWind.textContent = (`Wind: ${data.list[14].wind.speed} MPH`)
        dayTwoWind.textContent = (`Wind: ${data.list[22].wind.speed} MPH`)
        dayThreeWind.textContent = (`Wind: ${data.list[30].wind.speed} MPH`)
        dayFourWind.textContent = (`Wind: ${data.list[38].wind.speed} MPH`)

        dayOneHumidity.textContent = (`Humidity: ${data.list[14].main.humidity}%`)
        dayTwoHumidity.textContent = (`Humidity: ${data.list[22].main.humidity}%`)
        dayThreeHumidity.textContent = (`Humidity: ${data.list[30].main.humidity}%`)
        dayFourHumidity.textContent = (`Humidity: ${data.list[38].main.humidity}%`)
    })
}
    search.addEventListener('click', function () {
        console.log(cityForm.value)
        weatherAPI()
    })