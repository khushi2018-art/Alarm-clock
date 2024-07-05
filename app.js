let time = document.getElementById("clock2");
let audio= new Audio('sound.wav');
setInterval('update()', 1000)
function update() {
    let date = new Date();
let hour=date.getHours()
let minutes=date.getMinutes()
let seconds=date.getSeconds()
if(hour<10)hour="0"+hour;
if(minutes<10)minutes="0"+minutes;
if(seconds<10)seconds="0"+seconds;

    time.innerText = `${hour} : ${minutes} : ${seconds} `;
    matchTime=`${hour}:${minutes}`
  
 
 if(getTime.value==matchTime)
 { 
    audio.play();
 sucess.innerHTML=`<div class="alert alert-success" role="alert" style="text-align:center;font-weight: bolder;">
 <button type="button" class="btn btn-dark btn-lg" id="off" onclick="done()">OFF</button>
</div>`

}

}
let sucess = document.getElementById("sucess")
let getTime = document.getElementById("gettime")
let setalarm = document.getElementById('setalarm');
let change = document.getElementById("change")

//setting alarm

setalarm.addEventListener('click', function () {
if(getTime.value==null){
changeDisplay()
}else{
    setalarm.style.display = "none";
    getTime.style.display = "none";
    change.style.display = "block";
    sucess.innerHTML=` <div class="alert alert-warning" role="alert" style="text-align:center;font-weight: bolder;">
      Alarm Has Been Set For ${getTime.value}
     </div>` 
  
}
    
})

//changing alarm
change.addEventListener('click', function () {
    changeDisplay()
    sucess.innerHTML="";
    getTime.value=null
 
})

//off alarm
function done()
{
    sucess.innerHTML="";
    audio.pause();
    getTime.value=null
    changeDisplay()
}
function changeDisplay()
{
    setalarm.style.display = "block";
    getTime.style.display = "block";
    change.style.display = "none";

}