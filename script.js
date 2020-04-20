function showTime(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();


    let formatHours = convertFormat(hours)
    hours = addZero(hours)
    minutes = addZero(minutes)
    seconds = addZero(seconds) 
    document.getElementById('clock').innerHTML=`${hours} : ${minutes} : ${seconds} ${formatHours}`
}
// Adding the PM and AM
function convertFormat(time){
    let format ='AM'
    if(time >=12){
        format = 'PM'
    }
    return format;
}
// I dont want the time to display in GMT, I want it to display in WAT
function checkTime(time){
    if(time >12){
        time= time-12;
    }
// When it is 12Am I dont want the time to display 00
    if(time===0){
        time=12;
    }
    return time;

}

// adding zero when the time is less than 10   i.e 09:02:05
function addZero(time){
    if(time < 10){
        time="0" + time;
      
    }
    return time;
}
// calling the function to start working
showTime()

setInterval(showTime,1000)