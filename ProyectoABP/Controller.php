<?php

include $_SERVER['DOCUMENT_ROOT'] . '/proyectoABP/Librerias/bd.php';

if (isset($_POST['buttonaceptar'])) {
    inserirUser($_POST['txtMail'], $_POST['txtNombre'], $_POST['txtContrasenya']);

    if (isset($_SESSION['error'])) {
        var_dump($_SESSION);
        header('Location: /ProyectoABP/pages/registro.php');
        //exit();
    }
    else{
        header('Location: /ProyectoABP/pages/home.php');
        
    }
}

?>