# 5 Day Weather Forecast

## Description

This app will allow a user to get a forecast for 5 days of weather in their city. The current day (1) and then the following 4 days. A user will be presented with a field to input a city, and upon clicking the search button, fields will be auto populated for the city name, temp, humidity, wind and an icon showing them a visual representation of the data.

A lot of elements were included in the making of this project, but the stable behind this was the fetch() function using a server side API call. The server sends a request to openweathermapapi, the server sends a request back, the data is presented in JSON format and we're able to comb through the data to decide what is shown to the user. For the UI, I had a little help thanks to bootstrap, and for the correct time stamp, I had help in the form of moment.js.

This app is very user friendly, and is something I intend to share with family and friends.

## Link to deployed URL

https://bmaggiano.github.io/Weather-App/

## Screenshots

![image](https://user-images.githubusercontent.com/103971233/192665363-231d44e0-e4d9-482d-95d2-9acc96f0623b.png)

![image](https://user-images.githubusercontent.com/103971233/192665398-9641050c-6ae9-4ef6-a6e4-f20c140a4267.png)

![image](https://user-images.githubusercontent.com/103971233/192665456-97581792-8603-4036-99bf-f7bcae9cee79.png)

## Credits

Using Bootstrap for UI. Moment.js for time conversions and formatting. Using Openweathermapapi for our data.

## License

Copyright 2022 Brandon Maggiano

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
