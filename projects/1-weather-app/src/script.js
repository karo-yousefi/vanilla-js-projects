// Variables
const weatherIconContainer = document.querySelector(".weather-icon-container");
const tempText = document.querySelector(".temp-text");
const windText = document.querySelector(".wind-text");
const buttons = document.querySelectorAll(".button");
const daysText = document.querySelectorAll(".day");
const datesText = document.querySelectorAll(".date");
const weatherCodeIcon = document.querySelector("#weather-code-icon");

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let selectedDate = null; // Selected date by the user between the 3 option they have
let previousDate;
let todayDate;
let nextDayDate;
let formatedData;

buttons[1].classList.add("day-selected"); // Selecting "today" as the default stating day


// Getting the coords of the user, the user has to allow the browswer to access it
const getLocation = new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(
    (location) => {
      resolve(location.coords);;
    },
    (error) => {
      reject(error);
    }
  )
})

// formating the data from the API based to one object
const formatData = (time, temperature_2m, weather_code, wind_speed_10m) => {
  let formatedData = {};
  for (let i = 0; i < time.length; i++) {
    formatedData[time[i]] = [temperature_2m[i], weather_code[i], wind_speed_10m[i]];
  }
  return formatedData;
}


// Updating the data and day
const updateDate = (data) => {
  formatedData = formatData(data.hourly.time, data.hourly.temperature_2m, data.hourly.wind_speed_10m, data.hourly.weather_code);

  // Dates
  previousDate = Object.keys(formatedData)[0];
  todayDate = Object.keys(formatedData)[24];
  nextDayDate = Object.keys(formatedData)[48];

  datesText[0].innerHTML = previousDate.split("T")[0].split("-")[2];
  datesText[1].innerHTML = todayDate.split("T")[0].split("-")[2];
  datesText[2].innerHTML = nextDayDate.split("T")[0].split("-")[2];

  // Days
  const previousDay = daysOfWeek[new Date(previousDate).getDay()];
  const today = daysOfWeek[new Date(todayDate).getDay()];
  const nextDay = daysOfWeek[new Date(nextDayDate).getDay()];
  
  daysText[0].innerHTML = previousDay;
  daysText[1].innerHTML = today;
  daysText[2].innerHTML = nextDay;
  
  selectedDate = todayDate;

  // Sending the temp, wind speed and weather code data to be shown on the screen
  updateInfo(formatedData, todayDate);
}

// Updating the UI based on the info
const updateInfo = (data, today) => {
  tempText.innerHTML = data[today][0] + "°C"; // Setting the temp
  windText.innerHTML = data[today][1] + "KM/H"; // Setting the wind speed

  const todayWeatherCode = data[today[2]]; // Today's weather code

  // Weather codes translation
  const sunnyCode = [0, 1];
  const cloudyCode = [2, 3, 45, 48];
  const rainCode = [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82];
  const snowCode = [71, 73, 75, 77, 85, 86];
  const thunderCode = [95, 96, 99];
  
  // Updating the weather icon based on the weather code
  if(sunnyCode.includes(todayWeatherCode)) { // Sunny
    weatherCodeIcon.className = "";
    weatherCodeIcon.classList.add("fa-solid", "fa-sun");
  }
  else if(cloudyCode.includes(todayWeatherCode)) { // Cloudy
    weatherCodeIcon.className = "";
    weatherCodeIcon.classList.add("fa-solid", "fa-cloud-sun");
  }
  else if(rainCode.includes(todayWeatherCode)) { // Rainy
    weatherCodeIcon.className = "";
    weatherCodeIcon.classList.add("fa-solid", "fa-cloud-rain");
  }
  else if(snowCode.includes(todayWeatherCode)) { // Snowy
    weatherCodeIcon.className = "";
    weatherCodeIcon.classList.add("fa-solid", "fa-snowflake");
  }
  else if(thunderCode.includes(todayWeatherCode)) { // Thunder
    weatherCodeIcon.className = "";
    weatherCodeIcon.classList.add("fa-solid", "fa-cloud-bolt");
  }
}


// Changing the API based on the user's location and fetching the data 
getLocation
  .then(data => {
    return `https://api.open-meteo.com/v1/forecast?latitude=${data.latitude}&longitude=${data.longitude}&hourly=temperature_2m,weather_code,wind_speed_10m&past_days=1&forecast_days=2`;
  })
  .then(API => {
    fetch(API)
    .then(response => response.json())
    .then(data => updateDate(data))
    .catch(error => console.log(`FETCH ERROR ${error}`))
  })
  .catch(error => {
    alert(`Error: ${error.message}`)
})

// Event listener for the buttons
buttons[0].addEventListener("click", () => { // Previous day
  updateInfo(formatedData, today=previousDate); // Updating the info based on this day
  buttons.forEach((button) => button.classList.remove("day-selected")); // Removing the selected style from all the buttons
  buttons[0].classList.add("day-selected"); // Adding back the style to the selected button
});
buttons[1].addEventListener("click", () => { // Today
  updateInfo(formatedData, today=todayDate);
  buttons.forEach((button) => button.classList.remove("day-selected"));
  buttons[1].classList.add("day-selected");
});
buttons[2].addEventListener("click", () => { // Next day
  updateInfo(formatedData, today=nextDayDate);
  buttons.forEach((button) => button.classList.remove("day-selected"));
  buttons[2].classList.add("day-selected");
});
