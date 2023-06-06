 function change(event) {
   event.preventDefault();
   let cityInput = document.querySelector("#input-city");
   let h1 = document.querySelector("h1");
   h1.innerHTML = `${cityInput.value}`;
   
   if (cityInput.value) {
    h1.innerHTML = `${cityInput.value}`;
   }
   else {
    h1.innerHTML = null;
    h1.innerHTML = `Type a city...`;
   }
 }
 let cityChange = document.querySelector("#input-form");
 cityChange.addEventListener("submit", change);


function linkF(event) {
  event.preventDefault();
  let fah = document.querySelector("#temp");
  fah.innerHTML = Math.round(32 * (9 / 5) + 32);
}
let buttonLink = document.querySelector("#fahreinheit");
buttonLink.addEventListener("click", linkF);


function linkC(event) {
  event.preventDefault();
 let cel = document.querySelector("#temp"); 
  cel.innerHTML = Math.round(90 - 32 * (9 / 5));
}

let buttonLink1 = document.querySelector("#celcius");
buttonLink1.addEventListener("click", linkC);

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



