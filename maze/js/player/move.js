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

    var point1 = [xP1, yP1];
    var point2 = [xP2, yP1];
    var point3 = [xP1, yP2];
    var point4 = [xP2, yP2];

    switch(e.keyCode){
        case 37:
            if(xP1 <= xM1 + 12){
                clearInterval();
            }else{
                var collision = border(point1, point3, midPoint);
                if(collision){
                    clearInterval();
                }else{
                    var moveX = player.offsetLeft - 5;
                    player.style.left = moveX + "px";
                }
            }
        break;

        case 38:
            if (yP1 <= yM1 + 12) {
                clearInterval();
            } else {
                var collision = border(point1, point2, midPoint);
                if (collision) {
                    clearInterval();
                }else{
                    var moveY = player.offsetTop - 5;
                    player.style.top = moveY + "px";
                }
            }
        break;

        case 39:
            if (xP2 >= xM2 - 12) {
                clearInterval();
            } else {
                var collision = border(point2, point4, midPoint);
                if (collision) {
                    clearInterval();
                } else {
                    var moveX = player.offsetLeft + 5;
                    player.style.left = moveX + "px";
                }
            }
        break;

        case 40:
            if (yP2 >= yM2 - 12) {
                clearInterval();
            } else {
                var collision = border(point3, point4, midPoint);
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

// Cheking if arrow key's pressed for movement
setInterval(document.onkeydown = move, 100);