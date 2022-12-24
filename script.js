alert('Use MODE For Dark/Light Mode');
// variables as Minutes, Seconds and MicroSeconds
let minutes = 00;
let seconds = 00;
let tens = 00;
let count=0;

// Getting All query Selector for span tag
let getMinutes = document.querySelector('.minutes');
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');

// Getting All query Selector for Buttons tag
let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');
let btnReset = document.querySelector('.btn-reset');
let btnTheme = document.querySelector('.theme');
let interval;

// All The Buttons EventListener
btnStart.addEventListener('click',()=>{
    interval = setInterval(startTimer, 10);
})
btnStop.addEventListener('click',()=>{
    clearInterval(interval);
})
btnReset.addEventListener('click',()=>{
    clearInterval(interval);
    minutes = '00';
    tens = '00';
    seconds = '00';
    getMinutes.innerHTML = minutes;
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
})
btnTheme.addEventListener('click',()=>{
    console.log(count);
    if(count%2==0){
        btnTheme.style.color="white";
    document.querySelector('.container').style.background="black";
    let a = document.querySelectorAll('button');
    a[0].style.background="black";a[1].style.background="black";
    a[2].style.background="black";    
    }
    else{
        btnTheme.style.color="black";
    document.querySelector('.container').style.background="white";
    let a = document.querySelectorAll('button');
    a[0].style.background="white";a[1].style.background="white";
    a[2].style.background="white";
    }
    count++;
})

// Timer Function
function startTimer(){
    tens++;
    if(tens<=9)
    {
        getTens.innerHTML = '0' + tens;
    }
    if(tens>9)
    {
        getTens.innerHTML = tens;
    }
    if(tens>99){
        seconds++;
        getSeconds.innerHTML ='0' + seconds;
        tens=0;
        getTens.innerHTML = '0'+ 0;
    }
    if(seconds > 9){
        getSeconds.innerHTML = seconds;
    }
    if(seconds > 59){
        minutes++;
        getMinutes.innerHTML ='0'+minutes;
        seconds = 0;
        getSeconds.innerHTML = '0'+0;
    }
}