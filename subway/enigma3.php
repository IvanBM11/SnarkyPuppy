<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <script src="./js.js"></script>
  <link rel="stylesheet" href="./css/bootstrap.min.css">

  <script src="./js/jquery-3.3.1.min.js"></script>
  <script src="./js/popper.min.js"></script>
  <script src="./js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="./css.css">

</head>

<body id="body" onload="inicializa()" style="background-color:gray">



  <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Scape... NOW!!!!!!!</h5>
          <button onclick="moveObjeto()" type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          Come on!! They are really near to us, we have to run!!
        </div>
        <div class="modal-footer">
          <button onclick="moveObjeto()" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="modalFinal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">YOU SCAPED!!!!!!</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          CONGRATULATIONS!!! U SCAPED SO FAST!!! NEXT STATION IS NEAR PARK GÜELL, THERE WILL BE UR NEXT CODE
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>



  <div id="puntuacion" style="background-color:blueviolet; width:200px; height:50px">Puntuacion: </div>
  <div>

    <div id="container">
      <div id="animate">
        <img src="./580b585b2edbce24c47b2c34.png" id="imagenobs">
      </div>
      <div>
        <img src="./3be3a8bc7a7fbfd36c21944d2ee1a746.png" id="imgnube1">
        <img src="./580b585b2edbce24c47b2633.png" id="imgnube2">
      </div>

      <div id="fondo">

        <img src="./vinilo-decorativo-skyline-sydney.jpg" style="opacity:0.4; margin-top: -190px; margin-left:-25px; width:750px;">

      </div>


      <div id="suelo"></div>
      <div id="carretera"></div>
      <div id="pj">
        <img id="imagen" src="http://i54.tinypic.com/23m3iw4.jpg">
      </div>

    </div>
  </div>


</body>
<script>
  $("#modal").modal();

</script>

</html>