const citySpan = document.getElementById('city');
const tempSpan = document.getElementById('temp');
const windSpan = document.getElementById('wind');
const humiditySpan = document.getElementById('humidity');
const searchedEl = document.getElementById('searched-cities');
const button = document.getElementById('search');
const cityForm = document.getElementById('city-name');
const dateSpan = document.getElementById('date')
// const cityInput = cityForm.value



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
        

        const searchedList = document.createElement('p')
        searchedList.textContent = (`You've searched ${cityForm.value}`)

        searchedEl.appendChild(searchedList)





        console.log(`${data.list[6].main.temp} F`)
        console.log(`${data.list[14].main.temp} F`)
        console.log(moment.unix(data.list[14].dt).format('MMMM Do YYYY'))
        console.log(`${data.list[22].main.temp} F`)
        console.log(moment.unix(data.list[22].dt).format('MMMM Do YYYY'))
        console.log(`${data.list[30].main.temp} F`)
        console.log(moment.unix(data.list[30].dt).format('MMMM Do YYYY'))
        console.log(`${data.list[38].main.temp} F`)
        console.log(moment.unix(data.list[38].dt).format('MMMM Do YYYY'))
    })
}
    button.addEventListener('click', function () {
        console.log(cityForm.value)
        weatherAPI()
    })