const changeLocation = document.getElementById('change-location')
const card = document.getElementById('card')
const details = document.getElementById('details')
const weatherIcon = document.getElementById('weather-icon')
const overlay = document.getElementById('overlay')


// overlay
function loader(state) {
    if(state) {
        overlay.classList.remove('d-none');
    } else {
        overlay.classList.add('d-none');
    }
}

// update UI
const updateUi = (weither) => {
    card.classList.remove('d-none');
    details.innerHTML = `
        <h5 class="mb-3">${weither.name}, ${weither.sys.country}</h5>
          <p class="mb-3">${weither.weather[0].main}</p>
          <div class="display-4 mb-3">
            <span>${Math.round(weither.main.temp)}</span>
            <span>&deg;C</span>
        </div>
    `

    weatherIcon.src = `https://openweathermap.org/img/wn/${weither.weather[0].icon}@2x.png`
}

// get weather
const getWeather = async (city) => {
    const data = await getData(city);

    return data;
}

// change location
changeLocation.addEventListener('submit', (e)=> {
    e.preventDefault();
    const cityName = changeLocation.city.value.trim();
    changeLocation.reset();
    getWeather(cityName).then((data)=> {
        updateUi(data)
    })

})