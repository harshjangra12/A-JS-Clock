function updateClock(){
    "use strict";
    const currentDate = new Date();

    let currentHour = currentDate.getHours();
    let currentMinute = currentDate.getMinutes();
    let currentSecond = currentDate.getSeconds();

    let ampm;
    if(currentHour > 12) {
        ampm = "PM";
    }
    else {
        ampm = "AM";
    }

    if(currentHour >= 12) {
        currentHour = currentHour - 12;
    }
    else {
        ampm = "AM";
    }

    const timer = document.getElementById("time");
    let timestring;

    if(currentHour < 10){
        currentHour = "0" + currentHour;
    }

    if(currentMinute < 10){
        currentMinute = "0" + currentMinute;
    }

    if(currentSecond < 10){
        currentSecond = "0" + currentSecond;
    }

    timestring = currentHour + ":" + currentMinute + ":" + currentSecond + " " + ampm;
    timer.innerHTML = timestring;
}