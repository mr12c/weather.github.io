const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '59b5b44a85msh78c170b0ff896e3p18faf1jsnacbed3c91e75',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
 document.getElementById("location-of-city").addEventListener("click",function remover(){
    console.log(document.getElementById("location-of-city").value)
    document.getElementById("location-of-city").value=""
 })
 let cityName=document.getElementById("location-of-city")
 console.log(cityName)
 let btn=document.getElementById("enter-btn")
 btn.addEventListener("click",function text(){
    let temprature=document.getElementById("temp")
    let humidity=document.getElementById("humdi")
    let windSpeed=document.getElementById("win")
 fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityName.value}`,options)
 .then(response=> response.json())
 .then((response) => {
    console.log(response['temp'])
    console.log(response.status)
 
      temprature.innerText=response['temp']+"°C"  
      humidity.innerText=response['humidity']+"%"
      windSpeed.innerText=response['wind_speed']+" km/hr"
  
 
 })
 .catch(err=> console.error(err)) 
 })
 //toggle-btn
 let check=0
 let t_btn=document.getElementsByClassName("toggle-btn")[0]
 console.log(t_btn)
 let toggle_box=document.getElementsByClassName("toogle")[0]
 console.log(toggle_box)
 toggle_box.addEventListener("click",function slider(){
   if(check==0){
      t_btn.style="transform:translateX(169%);"
      check=1
      document.getElementsByClassName("container")[0].style="background-image: url(alt-background.jpg);"

   }
   else{
      t_btn.style="transform:translateX(0);"
       check=0
       document.getElementsByClassName("container")[0].style="background-image: url(main-background.jpg);"
   }
  })