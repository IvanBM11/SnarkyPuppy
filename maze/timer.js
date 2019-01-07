/* Variables for the clues */

var clueTimeActivation = false;

/* -------------------------- */

/* Code to set the timer for the maze */
// Units of time
var minutes = 0;
var seconds = 0;

// Cronometer
var crono = document.getElementById("timer");

function timer(){
    seconds++;
    if(seconds == 60){
        minutes++;
        seconds = 0;
    }

    if(minutes < 10){
        if(seconds < 10){
            crono.innerHTML = "0" + minutes + " : " + "0" + seconds;
        }else{
            crono.innerHTML = "0" + minutes + " : " + seconds;
        }
    }else{
        if(seconds < 10){
            crono.innerHTML = minutes + " : " + "0" + seconds;
        }else{
            crono.innerHTML = minutes + " : " + seconds;
        }
    }
}

crono.innerHTML = "0" + minutes + " : " + "0" + seconds;

function clue(){
    if(minutes == 2 && seconds == 30 && clueTimeActivation == false){
        alert("Maquina, si no lo consigues ahora, haztelo mirar.");
        var maxWalls = walls.length;
        clueTimeActivation = true;
    }
    if(clueTimeActivation == true && walls.length == maxWalls){
        for (var index = 0; index < walls.length; index++) {
            if(walls[index].id == "wall2"){
                walls[index].parentNode.removeChild(walls[index]);
            }
            
        }
    }
}

setInterval(timer, 1000);
setInterval(clue, 1);
/* ------------------------------------------------------------------- */