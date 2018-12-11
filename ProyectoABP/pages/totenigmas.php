<?php include $_SERVER['DOCUMENT_ROOT'].'/ProyectoABP/templates/master.php' ?>
<link rel="stylesheet" href="/ProyectoABP/css/totenigmas.css">


<?php startblock('titol') ?>PUZZLE(enigmas)<?php endblock()?>

<?php startblock('principal') ?>

<div class="card text-center mt-3" id="cabezera">
  <div class="card-header">
    <h2><strong>PUZZLES</strong></h2>
  </div>
</div>

<div class="card-group">
  <div class="card" id="1">
    <img class="card-img-top" src="/ProyectoABP/imagenes/foto_enigma1.jpg" height="170px;">
    <div class="card-body">
      <h5 class="card-title">La pedrera</h5>
      <p class="card-text">It is the most emblematic civil building of Antoni Gaudí, both for its constructive and functional innovations and for ornamental and decorative solutions. It is a total work of art.</br>
It is called "La Pedrera" because of its outer appearance, similar to an open-air quarry, it presents forms extracted from nature.</p>
    </div>
    <div class="card-footer text-center">
        <a href="">
            <button type="button" class="btn btn-success">PLAY PUZZLE</button>
        </a>
    </div>
  </div>
  <div class="card" id="2">
    <img class="card-img-top" src="/ProyectoABP/imagenes/foto_enigma2.jpg" height="170px;">
    <div class="card-body">
      <h5 class="card-title">Sagrada Familia</h5>
      <p class="card-text">The Sagrada Familia is the most famous and characteristic monument of Barcelona that thousands of tourists come every day to contemplate the curious but unfinished temple.
To design the interior, Gaudí was inspired by the forms of nature, creating columns shaped like a tree trunk that turn the interior of the temple into a huge stone forest.</p>
    </div>
    <div class="card-footer text-center">
        <a href="">
            <button type="button" class="btn btn-success">PLAY PUZZLE</button>
        </a>
    </div>
  </div>
  <div class="card" id="3">
    <img class="card-img-top" src="/ProyectoABP/imagenes/foto_enigma3.jpg" height="170px;">
    <div class="card-body">
      <h5 class="card-title">Plaza Real</h5>
      <p class="card-text">It is located next to La Rambla, in the Old Town of Barcelona. It was called thus because it was wanted to dedicate to Ferran VII, that had been king during the time of construction.</br>
It is one of the places with more life and atmosphere, both day and night.</p>
    </div>
    <div class="card-footer text-center">
        <a href="">
            <button type="button" class="btn btn-success">PLAY PUZZLE</button>
        </a>
    </div>
  </div>
  <div class="card" id="4">
    <img class="card-img-top" src="/ProyectoABP/imagenes/foto_enigma4.jpg" height="170px;">
    <div class="card-body">
      <h5 class="card-title">Park Guell</h5>
      <p class="card-text">It is a large garden with architectural elements located in the upper part of Barcelona, on the slope of the Carmel hill overlooking the sea, not far from the Tibidabo.</p>
    </div>
    <div class="card-footer text-center">
        <a href="">
            <button type="button" class="btn btn-success">PLAY PUZZLE</button>
        </a>
    </div>
  </div>
  <div class="card" id="5">
    <img class="card-img-top" src="/ProyectoABP/imagenes/foto_enigma5.jpeg" height="170px;">
    <div class="card-body">
      <h5 class="card-title">Casa Batllo</h5>
      <p class="card-text">The Batlló house is the result of the total renovation of an old conventional house. </ Br> In 1900, the estate was acquired by Josep Batlló. It is thought that at this point there had previously been a farmhouse because in the basement was a cave made as a warehouse that Gaudí wanted to preserve.</p>
    </div>
    <div class="card-footer text-center">
        <a href="/ProyectoABP/pages/enigma5.php">
            <button type="button" class="btn btn-success">PLAY PUZZLE</button>
        </a>
    </div>
  </div>

</div>

<?php endblock()?>