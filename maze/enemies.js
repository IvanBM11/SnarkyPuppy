var positions = [];

function oddOrEven(number) {
    return (number & 1) ? false : true;
}

function enemyMove() {
    // var elem = document.getElementById("enemy1");
    var elems = document.getElementsByClassName("enemy");
    var arrayEnemy = [];
    for (index = 0; index < elems.length; index++) {
        
        var turnBol = false;
        var x = elems[index].offsetLeft;
        var y = 0;
        var posMvX = x;
        var posMvY = y;
        arrayEnemy = [x, y, posMvX, posMvY, turnBol];
        positions[index] = arrayEnemy;
    }

    function turn() {
        for (index = 0; index < positions.length; index++) {
            var enemy = positions[index];
            var x = enemy[0];
            var y = enemy[1];
            if (oddOrEven(index)){
                if (enemy[2] == x + 150) {
                    enemy[4] = true;
                } else if (enemy[2] == x) {
                    enemy[4] = false;
                }
            }else{
                if (enemy[3] == y + 100) {
                    enemy[4] = true;
                } else if (enemy[3] == y) {
                    enemy[4] = false;
                }
            }
            
        }
    }
    function move() {
        for (index = 0; index < positions.length; index++) {
            var enemy = positions[index];
            if (oddOrEven(index)){
                if (enemy[4] == false) {
                    enemy[2]++;
                    elems[index].style.left = enemy[2] + 'px';
                } else {
                    enemy[2]--;
                    elems[index].style.left = enemy[2] + 'px';
                }
            }else{
                if (enemy[4] == false) {
                    enemy[3]++;
                    elems[index].style.top = enemy[3] + 'px';
                } else {
                    enemy[3]--;
                    elems[index].style.top = enemy[3] + 'px';
                }
            }
            
        }
    }
    setInterval(turn, 5);
    setInterval(move, 10);
}

enemyMove();