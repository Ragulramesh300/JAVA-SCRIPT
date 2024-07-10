let ampm = document.getElementById("ampm")
function displaytime(){
let dateTime = new Date();
let Hr = padZero(dateTime.getHours());
let Min = padZero (dateTime.getMinutes());
let Sec = padZero (dateTime.getSeconds());
document.getElementById('hours').innerHTML = Hr
document.getElementById('minutes').innerHTML = Min
document.getElementById('seconds').innerHTML = Sec
if(Hr>12)
    Hr=Hr-12
    ampm.innerHTML="Pm"

function padZero(num){
    return num<10? "0"+num:num
}
}
setInterval (displaytime,500)