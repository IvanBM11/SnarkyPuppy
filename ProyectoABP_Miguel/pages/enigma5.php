<?php include $_SERVER['DOCUMENT_ROOT'].'/ProyectoABP/templates/master_enigmas.php' ?>
<link rel="stylesheet" href="/ProyectoABP/css/simon.css">

<title><?php startblock('titol') ?><?php endblock()?></title>


<?php startblock('principal2') ?>

<script>
  alert("Congratulations, you are in your last test that will help you reveal the truth about Antoni Gaudi");
</script> 

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


<?php endblock() ?>
