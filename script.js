'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'

let city = document.querySelector('#city')
let btn = document.querySelector('button')
// console.log(btn);

btn.addEventListener('click',(e)=>{
    e.preventDefault()
    weatherTemp(city.value)
    // console.log('hello');

})

async function weatherTemp(city){
    const api_key = 'dd3ec2941c1a9fe2c45f626976aecc5d'
    let url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)
    let data = await await url.json()
    console.log(data.wind); 
    document.querySelector('.temp>h1').innerHTML =`${Math.round(data.main.temp-273.15)} °C`
    document.querySelector('.city>p').innerHTML = `${data.name}`
    document.querySelector('.cloud>p').innerHTML = `${data.weather[0].description}`
    document.querySelector('.humidity>p').innerHTML = `${data.main.humidity}%`
    document.querySelector('.wind>p').innerHTML = `${data.wind.speed}km/H`

}

