let city = document.querySelector('#city')
let btn = document.querySelector('button')
let bgImgesCont = document.querySelector('.error-container')
let weatherImg = document.querySelector('.weather-container>img')
console.log(weatherImg);

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
        if (data.cod == 404) {
            bgImgesCont.style.display = 'block'
            document.querySelector('.temp>h1').innerHTML =`0 °C`
            document.querySelector('.city>p').innerHTML = ``
            document.querySelector('.cloud>p').innerHTML = ``
            document.querySelector('.humidity>p').innerHTML = `%`
            document.querySelector('.wind>p').innerHTML = `km/H`
            return
        }
        bgImgesCont.style.display = 'none'
        document.querySelector('.temp>h1').innerHTML =`${Math.round(data.main.temp-273.15)} °C`
        document.querySelector('.city>p').innerHTML = `${data.name}`
        document.querySelector('.cloud>p').innerHTML = `${data.weather[0].description}`
        document.querySelector('.humidity>p').innerHTML = `${data.main.humidity}%`
        document.querySelector('.wind>p').innerHTML = `${data.wind.speed}km/H`


        // images 

        if (data.weather[0].main === 'Clouds') {
            console.log('Cloud');
            document.querySelector('.weather-cont>img').src = `https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80`
        }
        if (data.weather[0].main === 'Clear') {
            console.log('clear');
            document.querySelector('.weather-cont>img').src = `https://images.unsplash.com/photo-1601297183305-6df142704ea2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80`
        }
        if (data.weather[0].main === 'Mist') {
            console.log('mist');
            document.querySelector('.weather-cont>img').src = `https://images.unsplash.com/photo-1593687642750-fed751b4e476?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60`
        }
        if (data.weather[0].main === 'Rain') {
            console.log('rain');
            document.querySelector('.weather-cont>img').src = `https://images.unsplash.com/photo-1523772721666-22ad3c3b6f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80`
        }
        if (data.weather[0].main === 'Snow') {
            console.log('snw');
            document.querySelector('.weather-cont>img').src = `https://images.unsplash.com/photo-1483664852095-d6cc6870702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80`
        }
        if (data.weather[0].main === 'Haze') {
            console.log('haze');
            document.querySelector('.weather-cont>img').src = `https://images.unsplash.com/36/STzPBJUsSza3mzUxiplj_DSC09775.JPG?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGF6ZXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60`
        }

}

