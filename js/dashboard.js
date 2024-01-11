function dashBoard() {
    const nameHeading = document.getElementById('nameHeading')
    const currentUser = JSON.parse(localStorage.getItem('loggedInUser'))
    nameHeading.innerText = `Hello ${currentUser.name} 👋` // 'Hello ' + currentUser.name 
}

const inputbox = document.querySelector(".input-box")
const searchbtn = document.querySelector(".searchbtn")
const temparature = document.querySelector(".temperature")
const humidity = document.getElementById("humidity")

async function checkweather(city){
    const api_key ="7c004fd4b1f4fd2a2b554a40b7982274"
    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    const weather_data =await fetch(`${api_url }`).then(Response => Response.json())
    console.log(weather_data)

    temparature.innerHTML = `${Math.floor(weather_data.main.temp - 273.15)}°C`
    humidity.innerHTML= `${weather_data.main.humidity}%`
}
searchbtn.addEventListener('click',()=>{
    checkweather(inputbox.value)
})


//current location weather
const currentweather = document.getElementById("current-weather")
const humidity1= document.getElementById("humidity1")

navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const apiKey = '7c004fd4b1f4fd2a2b554a40b7982274';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;
  
   fetch(apiUrl)
      .then(response => response.json())
    //   console.log("location",location)
      .then(data => {
        const temp = data.main.temp;
        const humidt = data.main.humidity
        console.log(`The current temperature is ${temp} degrees Celsius at latitude ${lat} and longitude ${long}.`);
        currentweather.innerHTML = `${Math.floor(temp - 273.15)} °C`
        humidity1.innerHTML = `${humidt} %`

      }) 
      
  });
