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

                <?php
                if(isset($_SESSION['userMail'])){?>
                    <div id="userTg" class="mr-0">
                        <span style="color:black"><b>Welcome <?php echo $_SESSION['userName']?></b></span>
                        <img src="/ProyectoABP/imagenes/user.png" class="navbar-toggler" data-toggle="collapse" data-target="#navbarToggleUser" aria-controls="navbarToggleUser" aria-expanded="false" aria-label="Toggle navigation">
                    </div>
                <?php }else{?>
                    <div id="btnSign" class="mr-0">
                        <a href="/ProyectoABP/pages/login.php">
                            <button class="btn mr-2" style="color:white" type="submit">Sign In</button>
                        </a>
                        <a href="/ProyectoABP/pages/registro.php">
                            <button class="btn mr-2" style="color:white" type="submit">Sign Up</button>
                        </a>
                    </div>
                <?php }
                ?>
            </nav>

            <div class="collapse" id="navbarToggleExternalContent">
                <div class="p-2" id="desplegable">
                    <ul class="navbar-nav">
                        <li class="nav-item menu" ><a href="/ProyectoABP/pages/home.php" style="color:white" class="nav-link">HOME</a></li>
                        <li class="nav-item menu"><a href="/ProyectoABP/pages/who.php" style="color:white" class="nav-link">WHO ARE WE</a></li>                       
                        <li class="nav-item menu"><a href="/ProyectoABP/pages/totenigmas.php" style="color:white" class="nav-link">PUZZLES</a></li>
                    </ul>
                </div>
            </div>

            <div class="collapse ml-auto mr-0 float" id="navbarToggleUser">
                <div  class="p-2" id="desplegableUser">
                    <ul class="navbar-nav">
                        <li class="nav-item menu">
                            <form action="../Controller.php" method="post">
                                <input id="logOut" name="btnLogOut" class="btn" style="color:white" type="submit" value="LOG OUT"></button>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>

            <?php startblock('principal') ?>
            <?php endblock() ?>
    
            <footer>
                <nav id="footContent" class="navbar navbar-expand-lg navbar-dark mt-3">
                <img src="/ProyectoABP/imagenes/logos-de-perros-32.png">
                <span>&nbsp;&nbsp;&nbsp;Copyright© 2018- Snarky Puppy. All rights reserved</span>
                </nav>  
            </footer>       
            
        </div>
    </body>
</html>