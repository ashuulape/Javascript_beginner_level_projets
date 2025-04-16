const apikey="b00a94dd85208b9632cf266dee83b6b2";
const apiurl=`https://api.openweathermap.org/data/2.5/weather?&units=metric&q=`;

const searchbox= document.querySelector(".search input");
const searchbtn= document.querySelector(".search button");
const card =document.querySelector(".weather");


async function checkWeather(city) {
    card.classList.add("weatherafter");  
    const res= await fetch(apiurl+city+`&appid=${apikey}`);
    var data =await res.json();

    const {main:{temp,humidity},wind:{speed}}=data;
    
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.floor(temp)+`°c`
    document.querySelector(".humidity").innerHTML=humidity+`%`;
    document.querySelector(".wind").innerHTML=speed+`Km/h`;
}

searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value);}
)

 



