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


function weatherAPI() {
fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityForm.value}&appid=f5f2f5a01947a3884ab3b3064c13c0e2&units=imperial`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        citySpan.textContent = (data.city.name)
        tempSpan.textContent = (`${data.list[0].main.temp} F`)
        document.getElementById('icon-one').src = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`
        windSpan.textContent = (`${data.list[0].wind.speed} MPH`)
        humiditySpan.textContent = (`${data.list[0].main.humidity}%`)
        dateSpan.textContent = (moment.unix(data.list[0].dt).format('MMMM Do YYYY'))
        
        
        
        
        dayOneDate.textContent = (moment.unix(data.list[8].dt).format('MMMM Do, YYYY'))
        dayTwoDate.textContent = (moment.unix(data.list[16].dt).format('MMMM Do, YYYY'))
        dayThreeDate.textContent = (moment.unix(data.list[24].dt).format('MMMM Do, YYYY'))
        dayFourDate.textContent = (moment.unix(data.list[32].dt).format('MMMM Do, YYYY'))
        
        dayOneTemp.textContent = (`Temp: ${data.list[8].main.temp} F`)
        document.getElementById('icon-two').src = `http://openweathermap.org/img/wn/${data.list[8].weather[0].icon}.png`
        dayTwoTemp.textContent = (`Temp: ${data.list[16].main.temp} F`)
        document.getElementById('icon-three').src = `http://openweathermap.org/img/wn/${data.list[16].weather[0].icon}.png`
        dayThreeTemp.textContent = (`Temp: ${data.list[24].main.temp} F`)
        document.getElementById('icon-four').src = `http://openweathermap.org/img/wn/${data.list[24].weather[0].icon}.png`
        dayFourTemp.textContent = (`Temp: ${data.list[32].main.temp} F`)
        document.getElementById('icon-five').src = `http://openweathermap.org/img/wn/${data.list[32].weather[0].icon}.png`
        
        dayOneWind.textContent = (`Wind: ${data.list[8].wind.speed} MPH`)
        dayTwoWind.textContent = (`Wind: ${data.list[16].wind.speed} MPH`)
        dayThreeWind.textContent = (`Wind: ${data.list[24].wind.speed} MPH`)
        dayFourWind.textContent = (`Wind: ${data.list[32].wind.speed} MPH`)

        dayOneHumidity.textContent = (`Humidity: ${data.list[8].main.humidity}%`)
        dayTwoHumidity.textContent = (`Humidity: ${data.list[16].main.humidity}%`)
        dayThreeHumidity.textContent = (`Humidity: ${data.list[24].main.humidity}%`)
        dayFourHumidity.textContent = (`Humidity: ${data.list[32].main.humidity}%`)




        const searchedList = document.createElement('button')
        searchedList.textContent = (`${cityForm.value}`)
        localStorage.setItem('searched', cityForm.value)
        searchedEl.appendChild(searchedList)
    
        searchedList.addEventListener('click', function (event) {
            event.preventDefault()
            
            const btnSearch = searchedList.textContent

            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${btnSearch}&appid=f5f2f5a01947a3884ab3b3064c13c0e2&units=imperial`)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data)
                citySpan.textContent = (data.city.name)
                tempSpan.textContent = (`${data.list[0].main.temp} F`)
                windSpan.textContent = (`${data.list[0].wind.speed} MPH`)
                humiditySpan.textContent = (`${data.list[0].main.humidity}%`)
                dateSpan.textContent = (moment.unix(data.list[0].dt).format('MMMM Do YYYY'))
                
                
                
                
                dayOneDate.textContent = (moment.unix(data.list[8].dt).format('MMMM Do, YYYY'))
                dayTwoDate.textContent = (moment.unix(data.list[16].dt).format('MMMM Do, YYYY'))
                dayThreeDate.textContent = (moment.unix(data.list[24].dt).format('MMMM Do, YYYY'))
                dayFourDate.textContent = (moment.unix(data.list[32].dt).format('MMMM Do, YYYY'))
                
                dayOneTemp.textContent = (`Temp: ${data.list[8].main.temp} F`)
                document.getElementById('icon-two').src = `http://openweathermap.org/img/wn/${data.list[8].weather[0].icon}.png`
                dayTwoTemp.textContent = (`Temp: ${data.list[16].main.temp} F`)
                document.getElementById('icon-three').src = `http://openweathermap.org/img/wn/${data.list[16].weather[0].icon}.png`
                dayThreeTemp.textContent = (`Temp: ${data.list[24].main.temp} F`)
                document.getElementById('icon-four').src = `http://openweathermap.org/img/wn/${data.list[24].weather[0].icon}.png`
                dayFourTemp.textContent = (`Temp: ${data.list[32].main.temp} F`)
                document.getElementById('icon-five').src = `http://openweathermap.org/img/wn/${data.list[32].weather[0].icon}.png`
                
                dayOneWind.textContent = (`Wind: ${data.list[8].wind.speed} MPH`)
                dayTwoWind.textContent = (`Wind: ${data.list[16].wind.speed} MPH`)
                dayThreeWind.textContent = (`Wind: ${data.list[24].wind.speed} MPH`)
                dayFourWind.textContent = (`Wind: ${data.list[32].wind.speed} MPH`)
        
                dayOneHumidity.textContent = (`Humidity: ${data.list[8].main.humidity}%`)
                dayTwoHumidity.textContent = (`Humidity: ${data.list[16].main.humidity}%`)
                dayThreeHumidity.textContent = (`Humidity: ${data.list[24].main.humidity}%`)
                dayFourHumidity.textContent = (`Humidity: ${data.list[32].main.humidity}%`)


            console.log(btnSearch)
            })
        })
    })
}
    search.addEventListener('click', function () {
        console.log(cityForm.value)
        weatherAPI()
    })        
    
