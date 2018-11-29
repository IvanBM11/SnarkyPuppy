<?php


function errorMessage($e){
    if (!empty($e->errorInfo[1])) {
        switch ($e->errorInfo[1]) {
            case 1062:
                $mensaje = 'Duplicated e-Mail!';
                break;
            case 1451:
                $mensaje = 'Related elements!';
                break;
            default:
                $mensaje = $e->errorInfo[1] . ' - ' . $e->errorInfo[2];
                break;
        }
    }
    else {
        switch ($e->getCode()) {
            case 1044:
                $mensaje = "Incorrect User or Password!";
                break;
            case 1049:
                $mensaje = "We don't find the DataBase!";
                break;
            case 2002:
                $mensaje = "We don't find the server!";
                break;
            default:
                $mensaje = $e->getCode() . ' - ' . $e->getMessage();
                break;
        }
    }
    return $mensaje;
}


function openBd(){
    $servername = "localhost";
    $username = "root";
    $password = "";
    try {
        $conn = new PDO("mysql:host=$servername;dbname=proyecto", $username, $password);
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); 

        return $conn;
        }
    catch(PDOException $e)
        {
        echo "Connection failed: " . $e->getMessage();
        }
}

function tancarBd(){
    return null;
}

function inserirUser($user, $mail, $passwd){
try{
        $conn = openBd();

        $sentencia = $conn->prepare("INSERT INTO usuarios VALUES (:nombre_usuario, :email, :contrasenya)");
        $sentencia->bindParam(':nombre_usuario', $user);
        $sentencia->bindParam(':email', $mail);
        $sentencia->bindParam(':contrasenya', $passwd);
     
        $sentencia->execute();
        
}catch(PDOException $e){
    //$_SESSION['error'] = errorMessage($e);
    $_SESSION['error'] = $e;

} 

    $conn = tancarBd();

}


?>