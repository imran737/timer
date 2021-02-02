var min = 01;
var sec = 60;
var showmin = document.getElementById("min")
var showsec = document.getElementById("sec")

function timer (){
    sec--
    showsec.innerHTML = sec
    if(sec == 0){
        min--
        showmin.innerHTML = min
        sec = 60
    }else if (min == 0){
        min--
        showsec.innerHTML = sec
        min = 1
    }
}

function start(){
    document.getElementById("start").style.display = 'none'
    interval = setInterval(timer,1000);
}
function stop(){
    document.getElementById("start").style.display='inline-block'
    clearInterval(interval)
}

function reset(){
    min = 01
    sec = 60
    showmin.innerHTML = min
    showsec.innerHTML = sec
    
}