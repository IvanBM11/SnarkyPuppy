<?php
session_start();
include $_SERVER['DOCUMENT_ROOT'] . '/proyectoABP/Librerias/bd.php';

// Sign Up
if (isset($_POST['buttonaceptar']))
{
    inserirUser($_POST['txtNombre'], $_POST['txtMail'], $_POST['txtContrasenya']);

    if (isset($_SESSION['error']))
    {
        header('Location: /ProyectoABP/pages/registro.php');
        //exit();
    }
    else
    {
        $_SESSION['userName'] = $_POST['txtNombre'];
        $_SESSION['userMail'] = $_POST['txtMail'];
        header('Location: /ProyectoABP/pages/home.php');
    }
}

// Log in
if (isset($_POST['btnLogIn']))
{
    $result = logInUser($_POST['txtMail'], $_POST['txtContrasenya']);
    $name = $result[0]['username'];

    if (isset($_SESSION['error']))
    {
        var_dump($_SESSION['error']);
        header('Location: /ProyectoABP/pages/login.php');
        //exit();
    }
    else
    {
        $_SESSION['userName'] = $name;
        $_SESSION['userMail'] = $_POST['txtMail'];
        header('Location: /ProyectoABP/pages/home.php');
    }
}

// Log out
if(isset($_POST['btnLogOut'])){
    session_destroy();
    session_abort();
    header('Location: /ProyectoABP/pages/home.php');
}
?>