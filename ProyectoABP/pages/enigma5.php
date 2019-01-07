<!DOCTYPE html>
<html lang="es" >

<head>
  <meta charset="UTF-8">
  <title>Gaudi Says</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="/ProyectoABP/css/simon.css">
  
</head>

<body>

<script>
  alert("Congratulations, you are in your last test that will help you reveal the truth about Antoni Gaudi");
</script> 
<a href="/ProyectoABP/pages/totenigmas.php">
  <img src="/ProyectoABP/imagenes/return.png" id="r">
</a>


<!--JUEGO !-->
<div class="simon">
  <div class="botones">
    <button class="simon-button simon-1" id="0"></button>
    <button class="simon-button simon-2" id="1"></button>
    <button class="simon-button simon-3" id="2"></button>
    <button class="simon-button simon-4" id="3"></button>
    
    <div class="marcador">
      <p>
        <span id="play"><i class="fa fa-circle-o"></i></span>
        <a id="link-reset">
          <p id="punt">SCORE</p>
          <span class="score" id="score">0</span>
        </a>
        <!-- Para poder clicar sobre los botones -->
        <a id="link-strict">
          <span class="strict-icon" id="strict"></span>
        </a>
      </p>
    </div>
  </div>
</div>
<script src="/ProyectoABP/js/simon.js"></script>

</body>
</html>
<?php endblock() ?>
