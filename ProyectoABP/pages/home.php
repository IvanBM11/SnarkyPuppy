<?php include $_SERVER['DOCUMENT_ROOT'].'/ProyectoABP/templates/master.php' ?>
<link rel="stylesheet" href="/ProyectoABP/css/carousel.css">

<?php startblock('titol') ?>HOME<?php endblock()?>

<?php startblock('principal') ?>
<div class="container mt-3">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100" src="/ProyectoABP/imagenes/img1.jpg">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="/ProyectoABP/imagenes/img2.jpeg">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="/ProyectoABP/imagenes/img3.jpg">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="/ProyectoABP/imagenes/img4.jpg">
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" id="boton" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" id="boton" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</div>
<?php endblock() ?>