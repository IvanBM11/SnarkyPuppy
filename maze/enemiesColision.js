/* Variables for the clues */

// Number of colisions the player had with enemies
var numColisionsPlayer = 0;
// Bool to activate the clue
var clueEnemiesActivation = false;
/* ------------------------------------------------ */

/* Code for colision between player and enemies */

// Elements "enemy"
var enemies = document.getElementsByClassName("enemy");

// Element "player"
var player = document.getElementById("player");

var xP1;
var yP1;
var xP2;
var yP2;

// Function that check the colision between the player and the enemies 
function enemyCol(){
    
    xP1 = player.getBoundingClientRect().x;
    yP1 = player.getBoundingClientRect().y;
    xP2 = player.getBoundingClientRect().x + player.getBoundingClientRect().width;
    yP2 = player.getBoundingClientRect().y + player.getBoundingClientRect().height;
    
    var playerCornerArray1 = [xP1, yP1];
    var playerCornerArray2 = [xP2, yP1];
    var playerCornerArray3 = [xP1, yP2];
    var playerCornerArray4 = [xP2, yP2];

    var enemiesColPoints = checkEnemiesPoints();

    var leftCol = borderEnemy(playerCornerArray1, playerCornerArray3, enemiesColPoints);
    var rightCol = borderEnemy(playerCornerArray2, playerCornerArray4, enemiesColPoints);
    var topCol = borderEnemy(playerCornerArray1, playerCornerArray2, enemiesColPoints);
    var bottomCol = borderEnemy(playerCornerArray3, playerCornerArray4, enemiesColPoints);

    if(leftCol){
        player.style.top = 20 + "px";
        player.style.left = 20  + "px";

        numColisionsPlayer++;
        alert("CHOCA");
    }else if(rightCol){
        player.style.top = 20  + "px";
        player.style.left = 20  + "px";

        numColisionsPlayer++;
        alert("CHOCA2");
    }else if(topCol){
        player.style.top = 20 + "px";
        player.style.left = 20 + "px";

        numColisionsPlayer++;
        alert("CHOCA3");
    }else if(bottomCol){
        player.style.top = 20 + "px";
        player.style.left = 20 + "px";

        numColisionsPlayer++;
        alert("CHOCA4");
    }

}

function checkEnemiesPoints(){

    // Array with all enemies's coordinates
    var arrayColPoints = [];

    // Enemy coordinates
    var xE1;
    var yE1;
    var xE2;
    var yE2;

    for (index = 0; index < enemies.length; index++) {
        xE1 = enemies[index].getBoundingClientRect().x;
        yE1 = enemies[index].getBoundingClientRect().y;
        xE2 = enemies[index].getBoundingClientRect().x + enemies[index].getBoundingClientRect().width;
        yE2 = enemies[index].getBoundingClientRect().y + enemies[index].getBoundingClientRect().height;

        var array = [xE1, yE1, xE2, yE2];

        arrayColPoints[index] = array;
    }

    return arrayColPoints;
}

// Check if an especific corner have a colision with the whole enemy
function cornerEnemy(playerCornerArray, enemiesColPoints) {
    var pum = false;
    for (enemyIndex = 0; enemyIndex < enemiesColPoints.length; enemyIndex++) {
        var enemy = enemiesColPoints[enemyIndex];

        if (playerCornerArray[0] >= enemy[0] && playerCornerArray[0] <= enemy[2]) {
            if (playerCornerArray[1] >= enemy[1] && playerCornerArray[1] <= enemy[3]) {
                pum = true;
                break;
            } else {
                pum = false
            }
        } else {
            pum = false;
        }
    }

    return pum;
}

// // Check the colision between the indicated enemy corners with the player ones
function borderEnemy(playerCornerArray1, playerCornerArray2, enemiesColPoints){
    var bolCorner1 = cornerEnemy(playerCornerArray1, enemiesColPoints);
    var bolCorner2 = cornerEnemy(playerCornerArray2, enemiesColPoints);

    var colFinal;

    if (!bolCorner1 && !bolCorner2) {
        colFinal = false;
    } else {
        colFinal = true;
    }

    return colFinal;
}
/* -------------------------------------------------------------------------------- */

// Clues to make the maze easier
function clue(){
    if(numColisionsPlayer == 3 && clueEnemiesActivation == false){
        alert("Epa, te voy a ayudar crack! ;)");
        clueEnemiesActivation = true;
    }
    if(clueEnemiesActivation == true && enemies.length != 0){
        for (var index = 0; index < enemies.length; index++) {
            enemies[index].parentNode.removeChild(enemies[index]);
        }
    }
}

setInterval(enemyCol, 1);
setInterval(clue, 1);