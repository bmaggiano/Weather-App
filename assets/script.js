// let weatherUrl = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
let apiKey = "f5f2f5a01947a3884ab3b3064c13c0e2"
let weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=33.4484367&lon=-112.074141&appid=f5f2f5a01947a3884ab3b3064c13c0e2&units=imperial`
let exmaple = "http://api.openweathermap.org/geo/1.0/direct?q=Phoenix&limit=1&appid=f5f2f5a01947a3884ab3b3064c13c0e2"

fetch(weatherUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        console.log(data.city.name)
        console.log(`${data.list[4].main.temp} F`)
        console.log(moment.unix(data.list[4].dt).format('MMMM Do YYYY'))
        console.log(`${data.list[12].main.temp} F`)
        console.log(moment.unix(data.list[12].dt).format('MMMM Do YYYY'))
        console.log(`${data.list[20].main.temp} F`)
        console.log(moment.unix(data.list[20].dt).format('MMMM Do YYYY'))
        console.log(`${data.list[28].main.temp} F`)
        console.log(moment.unix(data.list[28].dt).format('MMMM Do YYYY'))
        console.log(`${data.list[36].main.temp} F`)
        console.log(moment.unix(data.list[36].dt).format('MMMM Do YYYY'))
    })