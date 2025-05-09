const input = document.getElementById("cityinput");
const btn1 = document.getElementById("searchbtn");



const cityname   = document.getElementById('cityname')
const localtime = document.getElementById('citytime')
const temperature = document.getElementById("citytemp")






async function getdata(user){
   const promise  = await  fetch(`http://api.weatherapi.com/v1/current.json?key=34cf5f1ff10443fd923122434250905&q=${user}&aqi=yes
`);
return await promise.json()
}


//api 
// http://api.weatherapi.com/v1/current.json?key=34cf5f1ff10443fd923122434250905&q=London&aqi=yes


btn1.addEventListener("click", async ()=> {
     const value  = input.value
     const res = await getdata(value);
     console.log(res);
     cityname.innerText = `City --> ${res.location.name} \n State --> ${res.location.region}  \n Country -->  ${res.location.country}`;
     localtime.innerText  = `localTime -->   ${res.location.localtime}`
     temperature.innerText =  `Temperature --> ${res.current.temp_c}`
});