<?php require_once $_SERVER['DOCUMENT_ROOT'].'/ProyectoABP/Librerias/ti.php' ?>
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>
            <?php startblock('titol') ?>
            <?php endblock()?>
        </title>

        <link rel="stylesheet" href="/ProyectoABP/css/bootswatch.css">
        <link rel="stylesheet" href="/ProyectoABP/css/CSSbasic.css">
        <?php startblock('css') ?>
        <?php endblock()?>

        <script src="/ProyectoABP/js/jquery-3.3.1.min.js"></script>
        <script src="/ProyectoABP/js/popper.min.js"></script>
        <script src="/ProyectoABP/js/bootstrap.min.js"></script>

    </head>
    
    <body>

        <div class="container">
            <!-- Header -->
            <nav id="headContent" class="navbar navbar-dark">
                <button class="navbar-toggler bg-info" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

            <div class="mr-0">
                <a href="/ProyectoABP/pages/login.php">
                    <button class="btn btn-info mr-2" style="color:white" type="submit">Sign In</button>
                </a>
                <a href="/ProyectoABP/pages/registro.php">
                    <button class="btn btn-info mr-2" style="color:white" type="submit">Sign Up</button>
                </a>
            </div>
            </nav>

            <div class="collapse" id="navbarToggleExternalContent">
                <div class="p-2" id="desplegable">
                    <ul class="navbar-nav">
                        <li class="nav-item menu" ><a href="/ProyectoABP/pages/home.php" style="color:white" class="nav-link">HOME</a></li>
                        <li class="nav-item menu"><a href="/ProyectoABP/pages/who.php" style="color:white" class="nav-link">WHO ARE WE</a></li>
                        <li class="nav-item menu"><a href="/ProyectoABP/pages/contact.php" style="color:white" class="nav-link">CONTACT US</a></li>
                    </ul>
                </div>
            </div>

              <?php startblock('principal') ?>
              <?php endblock() ?>
    
            <footer>
                <nav id="footContent" class="navbar navbar-expand-lg navbar-dark mt-3"></nav> 
            </footer>       
            
        </div>
    </body>
</html>