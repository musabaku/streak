
let hourEl = document.getElementById("hour")
let minuteEl = document.getElementById("minute")
let secondEl = document.getElementById("second")
let amEl = document.getElementById("ampm")

function clock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let am = "AM"

    hourEl.innerHTML = h;
    minuteEl.innerHTML = m;
    secondEl.innerHTML = s;
    amEl.innerHTML = am;
    
    if(h>12){
        h = h-12;
        am = "PM"
    }
    hourEl.innerHTML = h;

    setTimeout(()=>{
        clock()
    },1000);
}

clock()