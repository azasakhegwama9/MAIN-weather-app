let weather = [
  {
    city: "paris",
    temp: Math.ceil(19.7),
    humidity: 80,
  },
  {
    city: "tokyo",
    temp: Math.ceil(17.3),
    humidity: 50,
  },
  {
    city: "lisbon",
    temp: Math.round(30.2),
    humidity: 20,
  },
  {
    city: "san francisco",
    temp: Math.ceil(20.9),
    humidity: 100,
  },
  {
    city: "oslo",
    temp: Math.ceil(-5),
    humidity: 20,
  },
];

// write your code here
// Fahrenheit conversion
let fahrenheitParis = Math.round(weather[0].temp * 1.8 + 32);
let fahrenheitTokyo = Math.round(weather[1].temp * 1.8 + 32);
let fahrenheitLisbon = Math.round(weather[2].temp * 1.8 + 32);
let fahrenheitSF = Math.round(weather[3].temp * 1.8 + 32);
let fahrenheitOslo = Math.round(weather[4].temp * 1.8 + 32);

// Change first letter to Uppercase
let myCities = ["paris", "tokyo", "lisbon", "san francisco", "oslo"];

// Prompt to enter city name
let cities = prompt("Enter your city here");
cities = cities.toLowerCase().trim();

// Conditional statements for all cities
if (cities === myCities[0]) {
  alert(
    `It is currently ${weather[0].temp}°C/ ${fahrenheitParis}°F in ${myCities[0]} with a humidity of ${weather[0].humidity}%.`
  );
} else if (cities === myCities[1]) {
  alert(
    `It is currently ${weather[1].temp}°C/ ${fahrenheitTokyo}°F in ${myCities[1]} with a humidity of ${weather[1].humidity}%.`
  );
} else if (cities === myCities[2]) {
  alert(
    `It is currently ${weather[2].temp}°C/ ${fahrenheitLisbon}°F in ${myCities[2]} with a humidity of ${weather[2].humidity}%.`
  );
} else if (cities === myCities[3]) {
  alert(
    `It is currently ${weather[3].temp}°C/ ${fahrenheitSF}°F in ${myCities[3]} with a humidity of ${weather[3].humidity}%.`
  );
} else if (cities === myCities[4]) {
  alert(
    `It is currently ${weather[4].temp}°C/ ${fahrenheitOslo}°F in ${myCities[4]} with a humidity of ${weather[4].humidity}%.`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${cities}`
  );
}
