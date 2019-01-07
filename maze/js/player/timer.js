/* Variables for the clues */

// Array of the deleted walls
var deletedWalls = ["wall2"];

// Boolean that activate the clue
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
        var count = 0;
        wallsCollPoints = [];
        for (var indexA = 0; indexA < walls.length; indexA++) {
            for (var indexB = 0; indexB < deletedWalls.length; indexB++) {
                if(walls[indexA].id == deletedWalls[indexB]){
                    walls[indexA].style.visibility = "hidden";
                }else{
                    var x1 = walls[indexA].getBoundingClientRect().x;
                    var y1 = walls[indexA].getBoundingClientRect().y;
                    var x2 = walls[indexA].getBoundingClientRect().x + walls[indexA].getBoundingClientRect().width;
                    var y2 = walls[indexA].getBoundingClientRect().y + walls[indexA].getBoundingClientRect().height;

                    var array = [x1, y1, x2, y2];

                    wallsCollPoints[count] = array;
                }
                count++;
            }
        }
    }
}

setInterval(timer, 1000);
setInterval(clue, 1);
/* ------------------------------------------------------------------- */