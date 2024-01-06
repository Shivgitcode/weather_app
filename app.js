// const weather = async () => {
//     // const input = document.querySelector(".search input");
//     // const city = input.value;
//     const city = "london"
//     // console.log(city)

//     const options = {
//         method: 'GET',
//         url: `https://open-weather13.p.rapidapi.com/city/${city}`,
//         headers: {
//             'X-RapidAPI-Key': '55e66f7b3fmshd5743bf86ef0c5cp103ce2jsn5aff67a12567',
//             'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await axios.request(options);
//         // const hum = document.querySelector('humidity');
//         // hum.innerHTML = response.data.
//         console.log(response.data)

//     } catch (error) {
//         console.log(error)
//     }
// }

// // const search = document.querySelector("button");
// // search.addEventListener('click', weather)
// weather()

const weather = async () => {
  const input = document.querySelector("input");
  const city = input.value;

  const options = {
    method: "GET",
    url: "https://openweather43.p.rapidapi.com/weather",
    params: {
      q: city,
      appid: [
        "da0f9c8d90bde7e619c3ec47766a42f4",
        "da0f9c8d90bde7e619c3ec47766a42f4",
      ],
      units: "metric",
    },
    headers: {
      "X-RapidAPI-Key": "55e66f7b3fmshd5743bf86ef0c5cp103ce2jsn5aff67a12567",
      "X-RapidAPI-Host": "openweather43.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    // const response = await axios.request(options);
    const tempData = response.data.main.temp;
    const humData = response.data.main.humidity;
    const winData = response.data.wind.speed;
    const name = response.data.name;
    const temp = document.querySelector(".temp");
    const humidity = document.querySelector(".humidity");
    const windSpeed = document.querySelector(".wind");
    const city = document.querySelector(".city");
    temp.innerHTML = `${tempData}°c`;
    humidity.innerHTML = `${humData}%`;
    windSpeed.innerHTML = `${winData} km/h`;
    city.innerHTML = `${name}`;
    console.log(response.data);
    if (response.data.weather[0].main === "Clouds") {
      const img = document.querySelector(".weather-icon");
      img.src = "./images/clouds.png";
    } else if (response.data.weather[0].main === "Clear") {
      const img = document.querySelector(".weather-icon");
      img.src = "./images/clear.png";
    } else if (response.data.weather[0].main === "Drizzle") {
      const img = document.querySelector(".weather-icon");
      img.src = "./images/drizzle.png";
    } else if (response.data.weather[0].main === "Mist") {
      const img = document.querySelector(".weather-icon");
      img.src = "./images/mist.png";
    } else if (response.data.weather[0].main === "Rain") {
      const img = document.querySelector(".weather-icon");
      img.src = "./images/rain.png";
    } else if (response.data.weather[0].main === "Snow") {
      const img = document.querySelector(".weather-icon");
      img.src = "./images/snow.png";
    }
  } catch (error) {
    console.error(error);
  }
  input.value = "";
};

const search = document.querySelector("button");
search.addEventListener("click", weather);

// cloud_pct
// :
// 100
// feels_like
// :
// 9
// humidity
// :
// 93
// max_temp
// :
// 9
// min_temp
// :
// 9
// sunrise
// :
// 1697693598
// sunset
// :
// 1697732293
// temp
// :
// 9
// wind_degrees
// :
// 0
// wind_speed
// :
// 0.51

// const input = document.querySelector('input');
// const city = input.value;

// const response = await axios.request(options);
// const tempData = response.data.temp;
// const humData = response.data.humidity
// const winData = response.data.wind_speed
// const temp = document.querySelector('.temp');
// const humidity = document.querySelector('.humidity')
// const windSpeed = document.querySelector('.wind')
// temp.innerHTML = `${tempData}°c`
// humidity.innerHTML = `${humData}%`
// windSpeed.innerHTML = `${winData} km/h`

// const search = document.querySelector('button')
// search.addEventListener('click', weather)
