// Maze
var maze = document.getElementById("maze");

var xM1 = maze.getBoundingClientRect().x;
var yM1 = maze.getBoundingClientRect().y;
var xM2 = maze.getBoundingClientRect().x + maze.getBoundingClientRect().width;
var yM2 = maze.getBoundingClientRect().y + maze.getBoundingClientRect().height;

// Maze's walls
var walls = document.getElementsByClassName("wall");

// Element "player"
var player = document.getElementById("player");

var xP1;
var yP1;
var xP2;
var yP2;
var xP12;
var yP12;

// Player move function
function move(e){

    // Player Coordinates
    xP1 = player.getBoundingClientRect().x;
    yP1 = player.getBoundingClientRect().y;
    xP2 = player.getBoundingClientRect().x + player.getBoundingClientRect().width;
    yP2 = player.getBoundingClientRect().y + player.getBoundingClientRect().height;
    var midX = (xP2 - xP1) / 2;
    xP12 = xP1 + midX;
    var midY = (yP2 - yP1) / 2;
    yP12 = yP1 + midY;

    // Collection of wall's position
    var wallsCollPoints = checkPoints();

    switch(e.keyCode){
        case 37:
            if(xP1 <= xM1 + 4){
                clearInterval();
            }else{
                var collision = leftBorder(wallsCollPoints, midPoint);
                if(collision){
                    clearInterval();
                }else{
                    var moveX = player.offsetLeft - 5;
                    player.style.left = moveX + "px";
                }
            }
        break;

        case 38:
            if (yP1 <= yM1 + 4) {
                clearInterval();
            } else {
                var collision = topBorder(wallsCollPoints, midPoint);
                if (collision) {
                    clearInterval();
                }else{
                    var moveY = player.offsetTop - 5;
                    player.style.top = moveY + "px";
                }
            }
        break;

        case 39:
            if (xP2 >= xM2 - 4) {
                clearInterval();
            } else {
                var collision = rightBorder(wallsCollPoints, midPoint);
                if (collision) {
                    clearInterval();
                } else {
                    var moveX = player.offsetLeft + 5;
                    player.style.left = moveX + "px";
                }
            }
        break;

        case 40:
            if (yP2 >= yM2 - 4) {
                clearInterval();
            } else {
                var collision = bottomBorder(wallsCollPoints, midPoint);
                if (collision) {
                    clearInterval();
                } else {
                    var moveY = player.offsetTop + 5;
                    player.style.top = moveY + "px";
                }
            }
        break;
    }
}

// Check possible collision points
function checkPoints(){

    // Array with all wall's coordinates
    var arrayColPoints = [];

    // Wall coordinates
    var x1;
    var y1;
    var x2;
    var y2;

    for (var index = 0; index < walls.length; index++) {
        x1 = walls[index].getBoundingClientRect().x;
        y1 = walls[index].getBoundingClientRect().y;
        x2 = walls[index].getBoundingClientRect().x + walls[index].getBoundingClientRect().width;
        y2 = walls[index].getBoundingClientRect().y + walls[index].getBoundingClientRect().height;

        var array = [x1, y1, x2, y2];

        arrayColPoints[index] = array;
    }

    return arrayColPoints;
}

// Point player TOP-LEFT
function point1(wallsCollPoints) {
    var pum = false;
    for (var wallIndex = 0; wallIndex < wallsCollPoints.length; wallIndex++) {
        var wall = wallsCollPoints[wallIndex];
        
        if (xP1 >= wall[0] - 3 && xP1 <= wall[2] + 3) {
            if (yP1 >= wall[1] - 3 && yP1 <= wall[3] + 3) {
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
function point2(wallsCollPoints) {
    var pum = false;
    for (var wallIndex = 0; wallIndex < wallsCollPoints.length; wallIndex++) {
        var wall = wallsCollPoints[wallIndex];

        if (xP2 >= wall[0] - 3 && xP2 <= wall[2] + 3 ) {
            if (yP1 >= wall[1] - 3 && yP1 <= wall[3] + 3 ) {
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
function point3(wallsCollPoints) {
    var pum = false;
    for (var wallIndex = 0; wallIndex < wallsCollPoints.length; wallIndex++) {
        var wall = wallsCollPoints[wallIndex];

        if (xP1 >= wall[0] - 3 && xP1 <= wall[2] + 3 ) {
            if (yP2 >= wall[1] - 3 && yP2 <= wall[3] + 3 ) {
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
function point4(wallsCollPoints) {
    var pum = false;
    for (var wallIndex = 0; wallIndex < wallsCollPoints.length; wallIndex++) {
        var wall = wallsCollPoints[wallIndex];

        if (xP2 >= wall[0] - 3 && xP2 <= wall[2] + 3 ) {
            if (yP2 >= wall[1] - 3 && yP2 <= wall[3] + 3 ) {
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

function midPoint(corner1, corner2, coordinates){
    
    var midCol;

    if(!corner1 && !corner2){
        midCol = false;
    }else{
        if(corner1 && corner2){
            midCol = true;
        }else{
            for (var index = 0; index < coordinates.length; index++) {
                var wall = coordinates[index];
        
                if (xP12 >= wall[0] - 3 && xP12 <= wall[2] + 3 ) {
                    if (yP12 >= wall[1] - 3 && yP12 <= wall[3] + 3 ) {
                        midCol = true;
                        break;
                    } else {
                        midCol = false
                    }
                } else {
                    midCol = false;
                }
            }
        }
    }

    return midCol;
}


// Check player left border
function leftBorder(wallsCollPoints, midPoint){

    var pointTL = point1(wallsCollPoints);
    var pointBL = point3(wallsCollPoints);
    var colFinal = midPoint(pointTL, pointBL, wallsCollPoints);

    return colFinal;
}

// Check right border
function rightBorder(wallsCollPoints, midPoint) {
    var pointTR = point2(wallsCollPoints);
    var pointBR = point4(wallsCollPoints);
    var colFinal = midPoint(pointTR, pointBR, wallsCollPoints);

    return colFinal;
}

// Check top border
function topBorder(wallsCollPoints, midPoint) {
    var pointTL = point1(wallsCollPoints);
    var pointTR = point2(wallsCollPoints);
    var colFinal = midPoint(pointTL, pointTR, wallsCollPoints);

    return colFinal;
}

// Check bottom border
function bottomBorder(wallsCollPoints, midPoint) {
    var pointBR = point3(wallsCollPoints);
    var pointBL = point4(wallsCollPoints);
    var colFinal = midPoint(pointBR, pointBL, wallsCollPoints);

    return colFinal;
}

// Cheking if arrow key's pressed for movement
setInterval(document.onkeydown = move, 100);