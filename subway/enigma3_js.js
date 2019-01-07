/*DECLARACION DE VARIABLES GLOBALES QUE USAREMOS EN TODO EL PROGRAMA*/
var puntuacion = 0;
var pos = 350, posi;
var posXObj = 350;
var posYUser = 0;
var colision = -1;
var saltito = 3000;
var errores = -1;
var alturaSalto = 60;
var superados = 0;
var final = false;
var tries = 0;

/*CODIGO JAVASCRIPT PARA EL CONTROL DE LOS OBJETOS(OBSTACULOS)*/
/*mover obstaculos*/

function moveObj() {
  //Recuperamos en elem el div animate (lleva dentro la img del obstaculo)
  var elem = document.getElementById("animate");

  //Llamamos a frame en un intervalo de 5ms
  var id = setInterval(frame, 5);

  //La función frame contempla si la posicion del obstaculo es 590
  //en caso de que lo sea, limpia el interval y suma 1 a superados
  function frame() {
    if (colision == -1) {

      //Si colision es -1, la haremos valer 0 para que entre en el if de la colision
      colision++;
    }

    if (pos == 590) {

      clearInterval(id);
      pos = 0;
      posXObj = 0;
      superados++;

      // Si superados es 5, final sera true y se abrirá el modal del final
      if (superados == 5) {
        $("#modalFinal").modal();
        final = true;
      }

      //Si superados no es 5, final es falso, por tanto, subimos 1 a la posicion
      //mediante innerHTML vamos incrementando el contador de puntuacion
    } else if (final == false) {
      var elemento = document.getElementById("puntuacion").innerHTML = "Puntuacion: " + puntuacion;
      pos++;
      posXObj = pos;
      elem.style.right = posXObj + 'px';
    }
    //Una vez hemos terminado o incrementado la posicion, valoramos si estamos en colision o no
    collide();
  }

}

//La funcion moveObjeto solo le da un intervalo de ejecucion a la funcion contada anteriormente
function moveObjeto() {
  setInterval(moveObj, 2700);
  // ayuda(async1, async2);

}

/*CODIGO JAVASCRIPT PARA EL CONTROL DEL PJ*/
//Mover al personaje

//Llamada a movePjArriba, y de manera asincrona con un timeout de 1200, movePjAbajo
function salto() {
  movePjArriba();
  setTimeout(movePjAbajo, 1200);

}

//movePjArriba y movePjAbajo son funciones muy parecidas, unicamente cambiamos nombres de
//variables para no sobre escribirlas y en uno sumamos margin al bot, y en la otra lo restamos
function movePjArriba() {

  //de igual manera recuperamos el div (que contiene la img del pj) en elem
  var elem = document.getElementById("pj");
  var posi = 0;

  //inicializamos var id2 con el intervalo que nos interesa ahora (llamando a frame2)
  var id2 = setInterval(frame2, 5);

  //la funcion frame2 evalua si posi == alturaSalto (ha llegado a la altura maxima)
  function frame2() {

    //en caso de ser asi, limpia el interval
    if (posi == alturaSalto) {
      clearInterval(id2);

      //Si no ha llegado aun, suma 1 a la posicion
    } else {
      posi++;
      posYUser = posi;
      elem.style.bottom = posi + 'px';
    }
  }
}

//movePjAbajo hace lo mismo que movePjArriba
function movePjAbajo() {
  var elem = document.getElementById("pj");
  var posit = alturaSalto;
  var id3 = setInterval(frame3, 5);

  function frame3() {

    //Pero aqui evaluamos si ha llegado a posicion inicial
    if (posit == 0) {
      clearInterval(id3);

      //En caso que no, seguimos restando 1
    } else {
      posit--;
      posYUser = posit;
      elem.style.bottom = posYUser + 'px';
    }
  }
}


/*CONTROL DEL MUNDO "REAL"*/
//Codigo de control de colisiones
function collide() {

  //para controlar las colisiones, se han de dar 3 cosas: que colision sea 0 (esta inicializada a -1),
  //que la posicion del obstaculo este entre 390 y 580, ya que es justo el rango de valores en el 
  //eje X que está estatico el jugador y por ultimo que el usuario este en una posicion en el eje de Y
  //menor que 25(Limite del salto para no tocar el coche)
  if ((posXObj >= 390 && posXObj <= 580) && posYUser <= 25 && colision == 0) {

    //Incrementamos errores para la puntuacion
    errores++;

    //Llamada a restart, reiniciamos las posiciones iniciales ahi
    restart();

    //Informamos al usuario de que ha colisionado
    alert("You Collide!!! Press accept to restart!!");

    //Gestionamos la puntuacion
    if (errores == 0) {
      puntuacion = puntuacion - 100;
    } else if (errores == 1) {
      puntuacion = puntuacion - 200;
    } else {
      puntuacion = puntuacion - 300;
    }
  } else {
    puntuacion = puntuacion + 10;
  }
}

//El metodo restart, restablece los valores por defecto de las variables del programa
function restart() {
  pos = 0;
  superados = 0;
  posi = alturaSalto;
  posYUser = 0;
  posXObj = 0;
  colision = -1;
  tries++;

  if (tries > 2) {
    ayuda1();
  } else if (tries > 2) {
    ayuda2();
  }
}


/*FUNCIONES PARA LA AYUDA AL PERSONAJE*/

function ayuda1() {

  //informamos al usuario y modificamos el valor de la variable alturaSalto, ahora tendrá que llegar
  //hasta 100 para limpiar el interval
  alert("Primera ayuda, tu personaje salta mas alto");
  alturaSalto = 100;
}

function ayuda2() {

  alert("Segunda ayuda, tu personaje salta mas tiempo");
  saltito = 3500;
}


/*FUNCIONES PARA INICIALIZAR LOS CONTROLES*/

//Llamada a la funcion desde el onload del body
function inicializa() {

  //Añadimos un listener "keypress" a la etiqueta body (tiene id body) y llamamos a move
  document.getElementById("body").addEventListener("keypress", move);
}

//Move comprueba si la letra pulsada es W, en caso que si, llama a salto
function move(e) {

  if (e.code == "KeyW") {
    salto();
  }
}




