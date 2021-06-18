var sec = 0, min = 0, hr = 0, temp;

function timestarts(){
        sec++;
        
        if(sec > 59){
            min++;
            sec = 0;
        }
        if(min > 59){
            hr++;
            min = 0; sec = 0;
        }
        if (sec < 10){
        sec = '0' + parseInt(sec);
        }
        if (min < 10){
        min = '0' + parseInt(min);
        }
        if (hr < 10){
        hr = '0' + parseInt(hr);
        }
        document.getElementById("displayTime").innerText = hr + ":" + min + ":" + sec;
    }


function startBtn(){
        temp = setInterval(timestarts, 1000);
        document.getElementById("startTime").disabled = true;
        document.getElementById("stopTime").disabled = false;
        document.getElementById("pauseTime").disabled = false;   
}

function pauseBtn(){
        if(document.getElementById("pauseTime").innerText == "PAUSE"){
        document.getElementById("pauseTime").innerText = "CONTINUE";   
        clearInterval(temp);
    }
    else{
        document.getElementById("pauseTime").innerText = "PAUSE";
        startBtn();
    }
}

function stopBtn(){
    document.getElementById("startTime").disabled = false;
    document.getElementById("stopTime").disabled = true;
    document.getElementById("pauseTime").disabled = true;
    document.getElementById("pauseTime").innerText = "PAUSE";
    
    document.getElementById("displayTime").innerText = "00:00:00";
    clearInterval(temp);
    sec=0; min=0; hr=0;
}