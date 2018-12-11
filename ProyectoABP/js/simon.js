var buttons = document.getElementsByClassName('simon-button'),
  strict = document.getElementById('link-strict'),
  strictIcon = document.getElementById('strict'),
  reset = document.getElementById('link-reset'),
  num_ronda = document.getElementById('score'),
  play = document.getElementById('play'),
  obligatorio = false,
  round,
  game;

//inicio del jyego colores
for (var button = 0; button < buttons.length; button++) {
  buttons[button].style.opacity = 0.2;
}

function Game() {
  this.playerTurn = false;
  this.pattern = [];
  this.num_ronda = 1;
}

function newGame() {
  game = new Game();
  num_ronda.innerHTML = "1";
  setTimeout(fadeIntro, 400);
  setTimeout(newRound, 2500);
}

function Round() {
  game.pattern.push(Math.floor(Math.random() * 4)); //Elije uno de los 4 botones que hay aleatoriamente
  this.patternLength = game.num_ronda;
  this.pattern = game.pattern;
  this.playerPattern = [];
  this.contador = 0;
  this.speed = 700 - this.patternLength * 4; //tiempo entre boton y boton (a partir de 2a ronda)
}

function newRound() {
  round = new Round(); //Llamamos a una ronda nueva
  showPattern();
  console.log(round.pattern); //Escribe un mensaje en la consola
}

function showPattern() {
  game.playerTurn = false;
  for (var x = 0; x < round.patternLength; x++) {
    setTimeout(buttonGlow.bind(null, round.pattern[x],500), round.speed * x);//La "X" es el tiempo en el que el boton queda iluminado
  } //Muestra los botones elegidos al azar i los resalta
  setTimeout(function() { //Turno del jugador
    game.playerTurn = true;
  }, round.speed * round.patternLength);
}

function buttonClick(button) {
  if (game.playerTurn) {
    var buttonIndex = button.target.id;
    round.playerPattern.push(parseInt(buttonIndex));
    buttonGlow(button);
    check();
  }
}

//Contrla toda la ejecucion
function check() {
  if (round.playerPattern[round.contador] === round.pattern[round.contador]) {
    round.contador++;
    if (round.contador === round.patternLength) {
      game.playerTurn = false;
      game.num_ronda++;
      if (game.num_ronda === 3) { //Puntuacion para ganar
        clearTimeout; 
      } else {
        num_ronda.innerHTML = game.num_ronda ? game.num_ronda : game.num_ronda;
        setTimeout(newRound, 1500);
      }
    }
  } else if (obligatorio) {
    setTimeout(newGame, 2000);
  } else {
    game.playerTurn = false;
    round.contador = 0;
    round.playerPattern = [];
    setTimeout(function() {
      num_ronda.innerHTML = game.num_ronda ? + game.num_ronda : game.num_ronda;
      showPattern();
    }, 1500);
  }
}

//Efecto brillante
function buttonGlow(button, delay, fadeSpeed) {
  var pressed = button.target === undefined ? button : button.target.id;
  buttons[pressed].style.opacity = 1;
  setTimeout(
    fade.bind(null, pressed, fadeSpeed !== undefined ? fadeSpeed : 100),
    delay !== undefined ? delay : 100
  );
}

//Para elegir el boton del color
function toggleStrict() {
  obligatorio = !obligatorio;
  strictIcon.innerHTML = obligatorio;
}

//Hace que los colores uno por uno se iluminen i se apaguen
function fade(buttonIndex, fadeSpeed) {
  buttons[buttonIndex].style.opacity -= 0.1;
  if (buttons[buttonIndex].style.opacity > 0.2) {
    setTimeout(fade.bind(null, buttonIndex), fadeSpeed);
  }
}

function fadeIntro() {
  for (var button = 0; button < buttons.length; button++) {
    setTimeout(buttonGlow.bind(null, button), 400 * button);
  }
}

(function() {
  newGame();
  reset.onclick = newGame;
  strict.onclick = toggleStrict;
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].onmousedown = buttonClick;
  }
})();


