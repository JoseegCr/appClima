import axios from '../_snowpack/pkg/axios.js';


const image = document.querySelector('img');
const clima = document.querySelector('#clima');
const ciudad = document.querySelector('#ciudad');
const temperatura = document.querySelector('#temperatura');
const search = document.querySelector('#search');
const form =  document.querySelector('form');

const apiKey = 'd23a1ce2f2961252cbdab5be4a975343';
const iconUrl = 'http://openweathermap.org/img/wn/';

const getData = async ()=>{
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Apizaco&appid=${apiKey}&units=metric`);
    const info = res.data.weather[0];

    const icon = info.icon;
    const climaTemp = info.main;
    const cityName = res.data.name;
    const temp = res.data.main.temp;

    image.src=`${iconUrl}/${icon}@2x.png`;
    clima.textContent = climaTemp;
    ciudad.textContent = cityName;
    temperatura.textContent = `${temp}°C`;
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const city = search.value;
    console.log(city);
});

getData();