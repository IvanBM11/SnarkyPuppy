// Element "player"
var player = document.getElementById("player");

// Elements "enemy"
var walls = document.getElementsByClassName("wall");

// Collection of wall's position
var wallsCollPoints = checkPoints();

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

function corner(coordinate){
    var checkCol = false;
    for (var wallIndex = 0; wallIndex < wallsCollPoints.length; wallIndex++) {
        var wall = wallsCollPoints[wallIndex];

        if (coordinate[0] >= wall[0] - 3 && coordinate[0] <= wall[2] + 3 ) {
            if (coordinate[1] >= wall[1] - 3 && coordinate[1] <= wall[3] + 3 ) {
                checkCol = true;
                break;
            } else {
                checkCol = false
            }
        } else {
            checkCol = false;
        }
    }
    
    return checkCol;
}

// Check if the middle point between the corners get by parameter have a colision with the wall
function midPoint(bolCorner1, bolCorner2){
    
    var midCol;

    if(!bolCorner1 && !bolCorner2){
        midCol = false;
    }else{
        if(bolCorner1 && bolCorner2){
            midCol = true;
        }else{
            for (var index = 0; index < wallsCollPoints.length; index++) {
                var wall = wallsCollPoints[index];
        
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

// Check the colision between the indicated corners and the middle point between them
function border(corner1, corner2, midPoint){
    var bolCorner1 = corner(corner1);
    var bolCorner2 = corner(corner2);
    var colFinal = midPoint(bolCorner1, bolCorner2);

    return colFinal;
}