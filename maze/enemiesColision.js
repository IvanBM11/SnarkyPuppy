// Elements "enemy"
var enemies = document.getElementsByClassName("enemy");

// Element "player"
var player = document.getElementById("player");

var xP1;
var yP1;
var xP2;
var yP2;

function enemyCol(){
    
    xP1 = player.getBoundingClientRect().x;
    yP1 = player.getBoundingClientRect().y;
    xP2 = player.getBoundingClientRect().x + player.getBoundingClientRect().width;
    yP2 = player.getBoundingClientRect().y + player.getBoundingClientRect().height;

    var enemiesColPoints = checkEnemiesPoints();

    // colision(leftEnemyBorder(enemiesColPoints), rightEnemyBorder(enemiesColPoints), topEnemyBorder(enemiesColPoints), bottomEnemyBorder(enemiesColPoints));

    var leftCol = leftEnemyBorder(enemiesColPoints);
    var rightCol = rightEnemyBorder(enemiesColPoints);
    var topCol = topEnemyBorder(enemiesColPoints);
    var bottomCol = bottomEnemyBorder(enemiesColPoints);

    if(leftCol){
        player.style.top = 20 + "px";
        player.style.left = 20  + "px";
        alert("CHOCA");
    }else if(rightCol){
        player.style.top = 20  + "px";
        player.style.left = 20  + "px";
        alert("CHOCA2");
    }else if(topCol){
        player.style.top = 20 + "px";
        player.style.left = 20 + "px";
        alert("CHOCA3");
    }else if(bottomCol){
        player.style.top = 20 + "px";
        player.style.left = 20 + "px";
        alert("CHOCA4");
    }

}

// function colision(leftEnemyBorder, rightEnemyBorder, topEnemyBorder, bottomEnemyBorder){
//     var leftCol = leftEnemyBorder(enemiesColPoints);
//     var rightCol = rightEnemyBorder(enemiesColPoints);
//     var topCol = topEnemyBorder(enemiesColPoints);
//     var bottomCol = bottomEnemyBorder(enemiesColPoints);

//     if(leftCol){
//         player.style.top = 20 + "px";
//         player.style.left = 20  + "px";
//         alert("CHOCA");
//     }else if(rightCol){
//         player.style.top = 20  + "px";
//         player.style.left = 20  + "px";
//         alert("CHOCA2");
//     }else if(topCol){
//         player.style.top = 20 + "px";
//         player.style.left = 20 + "px";
//         alert("CHOCA3");
//     }else if(bottomCol){
//         player.style.top = 20 + "px";
//         player.style.left = 20 + "px";
//         alert("CHOCA4");
//     }
// }

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

// Point player TOP-LEFT
function pointEnemy1(enemiesColPoints) {
    var pum = false;
    for (enemyIndex = 0; enemyIndex < enemiesColPoints.length; enemyIndex++) {
        var enemy = enemiesColPoints[enemyIndex];

        if (xP1 >= enemy[0] && xP1 <= enemy[2]) {
            if (yP1 >= enemy[1] && yP1 <= enemy[3]) {
                pum = true;
                break;
            } else {
                pum = false;
            }
        } else {
            pum = false;
        }
    }

    return pum;
}

// Point player TOP-RIGHT
function pointEnemy2(enemiesColPoints) {
    var pum = false;
    for (enemyIndex = 0; enemyIndex < enemiesColPoints.length; enemyIndex++) {
        var enemy = enemiesColPoints[enemyIndex];

        if (xP2 >= enemy[0] && xP2 <= enemy[2]) {
            if (yP1 >= enemy[1] && yP1 <= enemy[3]) {
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

// Point player BOTTOM-LEFT
function pointEnemy3(enemiesColPoints) {
    var pum = false;
    for (enemyIndex = 0; enemyIndex < enemiesColPoints.length; enemyIndex++) {
        var enemy = enemiesColPoints[enemyIndex];

        if (xP1 >= enemy[0] && xP1 <= enemy[2]) {
            if (yP2 >= enemy[1] && yP2 <= enemy[3]) {
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

// Point player BOTTOM-RIGHT
function pointEnemy4(enemiesColPoints) {
    var pum = false;
    for (enemyIndex = 0; enemyIndex < enemiesColPoints.length; enemyIndex++) {
        var enemy = enemiesColPoints[enemyIndex];

        if (xP2 >= enemy[0] && xP2 <= enemy[2]) {
            if (yP2 >= enemy[1] && yP2 <= enemy[3]) {
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

// Check player left border
function leftEnemyBorder(enemiesColPoints) {

    var pointTL = pointEnemy1(enemiesColPoints);
    var pointBL = pointEnemy3(enemiesColPoints);

    var coll;

    if (!pointTL && !pointBL) {
        coll = false;
    } else {
        coll = true;
    }

    return coll;
}

// Check right border
function rightEnemyBorder(enemiesColPoints) {
    var pointTR = pointEnemy2(enemiesColPoints);
    var pointBR = pointEnemy4(enemiesColPoints);

    var coll;

    if (!pointTR && !pointBR) {
        coll = false;
    } else {
        coll = true;
    }

    return coll;
}

// Check top border
function topEnemyBorder(enemiesColPoints) {
    var pointTL = pointEnemy1(enemiesColPoints);
    var pointTR = pointEnemy2(enemiesColPoints);

    var coll;

    if (!pointTL && !pointTR) {
        coll = false;
    } else {
        coll = true;
    }

    return coll;
}

// Check bottom border
function bottomEnemyBorder(enemiesColPoints) {
    var pointBR = pointEnemy3(enemiesColPoints);
    var pointBL = pointEnemy4(enemiesColPoints);

    var coll;

    if (!pointBR && !pointBL) {
        coll = false;
    } else {
        coll = true;
    }

    return coll;
}

setInterval(enemyCol, 1);