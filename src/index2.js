function change(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#input-city");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${cityInput.value}`;
  

  let apiKey = "cabdbda40038ba7d1165b953b1c7bd6c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=metric`;
  
  if (cityInput.value) {
    h1.innerHTML = `${cityInput.value}`;
  } 
  else {
    h1.innerHTML = null;
    h1.innerHTML = `Type a city...`;
  }
    
   
    function displayTemp(response) {
      document.querySelector("h1").innerHTML = response.data.name;

      let temperature = Math.round(response.data.main.temp);
      let humid = Math.round(response.data.main.humidity);
      let description = response.data.weather[0].description;
      let averageWind = Math.round(response.data.wind.speed);
      let totalPressure = response.data.main.pressure;

      let tempChange = document.querySelector("#temp");
      tempChange.innerHTML = `${temperature}`;

      let humidity = document.querySelector("#humid");
      humidity.innerHTML = `Humidity: ${humid}%`;

      let descript = document.querySelector("#description");
      descript.innerHTML = `${description}`;

      let windSpeed = document.querySelector("#wind");
      windSpeed.innerHTML = `Wind: ${averageWind}km/h`;

      let pressure = document.querySelector("#pressure");
      pressure.innerHTML = `Pressure: ${totalPressure}`;

     
      function searchLocation(position) {
        position.coords.latitude;
        position.coords.longitude;
        let apiKey = "cabdbda40038ba7d1165b953b1c7bd6c";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
        axios.get(`${apiUrl}`).then(displayTemp);
      }

      function currentCity(event){
      event.preventDefault();
      navigator.geolocation.getCurrentPosition(searchLocation);

        function search(city) {
          let apiKey = "cabdbda40038ba7d1165b953b1c7bd6c";
          let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
          axios.get(`${apiUrl}`).then(displayTemp);
        }
        search("Belhar");
}
let button = document.querySelector("#changeCity");
button.addEventListener("click", currentCity);



    }     
   axios.get(`${apiUrl}&appid=${apiKey}`).then(displayTemp); 

}
let cityChange = document.querySelector("#input-form");
cityChange.addEventListener("submit", change);




function actualDate() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentDate = new Date();
  let currentDay = days[currentDate.getDay()];
  let TimeH = currentDate.getHours();
  let TimeM = currentDate.getMinutes();

  if (TimeH < 10) {
    TimeH = `0${TimeH}`;
  }

  if (TimeM < 10) {
    TimeM = `0${TimeM}`;
  }

  let h2 = document.querySelector("h2");
  h2.innerHTML = `${currentDay}, ${TimeH} : ${TimeM} `;
}
actualDate();
