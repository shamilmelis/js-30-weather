const boxPost = document.querySelector('.col-get')
const input = document.querySelector('.getSearch')
const getBtn = document.querySelector('.getSearchValue')
const cardsArray = []
const getWeather = () => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=b3843cd20ef442c198f55818232807&q=${weatherVal}`)
        .then(res => res.json())
        .then(data => {
            const card = document.createElement('div')
            card.className = 'box-card';
            card.innerHTML = `<p class="region-name">${data.location.name}</p>
                    <p class="region-country">${data.location.country}</p>
                    <p class="region-time">${data.location.localtime}</p>
                    <div class="inner-box">
                        <div class="col-6">
                            <div class="box">
                                <p class="region-temperature">${data.current.temp_c}°C</p>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="box">
                                <img src=${data.current.condition.icon} alt="weather" class="weather-type">
                            </div>
                        </div>
                    </div>
                    <div class="inner-box-2">
                        <div class="col-12">
                            <div class="weather-percent-box">
                                <p class="rain-percent">*Ощущается как ${data.current.feelslike_c}°C</p>
                            </div>
                        </div>
                    </div>`
            cardsArray.push(card)
            if (cardsArray.length > 1) {
                cardsArray.splice(0, 1)
                boxPost.children[1].remove()
            } else {
                console.log('Weather')
            }
            console.log(data)
            console.log(cardsArray)
            boxPost.append(cardsArray[0])
            input.value = ''
        })
        .catch(error => console.log(error))
}

let weatherVal

getBtn.addEventListener('click', () => {
    if (input.value) {
        weatherVal = input.value
        getWeather()
    } else {
        alert('Напишите название города!')
    }
})