
let city = ''; 
let outerlayer = document.querySelector('.outerlayer');
let main = document.querySelector('.main');

let search = document.getElementById('search');
let submit = document.getElementById('submit');

let name = document.querySelector('.name');
let icon = document.querySelector('.icon');
let description = document.querySelector('.description');

submit.addEventListener('click', async (e) => {
  e.preventDefault();
  city = search.value; 

  
try {
  let res= await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=46f80a02ecae410460d59960ded6e1c6&units=metric`)

  
  let data = await res.json();
  
  description.innerText= `${data.main.temp} °C 😨`
       name.innerText=`${data.name} 🌎`;

  icon.innerHTML=`<img src="http://openweathermap.org/img/wn/${data.weather[0].icon
}.png"  class=" h-24 w-24" alt="Weather Icon">`

document.querySelector('.sublayer1').innerText=`Feels LiKe: ${Math.floor(data.main.feels_like)} °C 😅`
document.querySelector('.sublayer2').innerText=`Humidity: ${data.main.humidity}% 🔥`
document.querySelector('.sublayer3').innerText=`Wind Speed: ${data.wind.speed}m/s ⚡`
document.querySelector(".alert").style.display="none"


outerlayer.style.display = 'flex';
main.style.display = 'flex';


} catch (error) {
document.querySelector(".alert").style.display="flex"
outerlayer.style.display = 'none';
main.style.display = 'none';
}
  
 

});