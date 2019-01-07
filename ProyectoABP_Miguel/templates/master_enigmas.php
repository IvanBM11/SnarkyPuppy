<?php 
session_start();
require_once $_SERVER['DOCUMENT_ROOT'].'/ProyectoABP/Librerias/ti.php'
?>
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title><?php startblock('titol') ?><?php endblock()?></title>
        <link rel="stylesheet" href="/ProyectoABP/css/bootswatch.css">
        <link rel="stylesheet" href="/ProyectoABP/css/CSSbasic.css">
        <script src="/ProyectoABP/js/jquery-3.3.1.min.js"></script>
        <script src="/ProyectoABP/js/popper.min.js"></script>
        <script src="/ProyectoABP/js/bootstrap.min.js"></script>

    </head>
    
    <body>

        <div class="container">
            <!-- Header -->
            <nav id="headContent" class="navbar navbar-dark">
            <a href="/ProyectoABP/pages/totenigmas.php">
                <img src="/ProyectoABP/imagenes/return.png" style="width:50px;height:50px;">
            </a>

                <?php
                if(isset($_SESSION['userMail'])){?>
                    <div id="userTg" class="mr-0">
                        <span style="color:black"><b>Welcome <?php echo $_SESSION['userName']?></b></span>
                        <img src="/ProyectoABP/imagenes/user.png" class="navbar-toggler" data-toggle="collapse" data-target="#navbarToggleUser" aria-controls="navbarToggleUser" aria-expanded="false" aria-label="Toggle navigation">
                    </div>
                <?php }else{?>
                    
                <?php }
                ?>
            </nav>
      

            <?php startblock('principal2') ?>
            <?php endblock() ?>
    
        </div>
    </body>
</html>