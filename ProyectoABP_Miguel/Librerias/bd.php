<?php

function errorMessage($e)
{
    if (!empty($e->errorInfo[1]))
    {
        switch ($e->errorInfo[1])
        {
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
    else
    {
        switch ($e->getCode())
        {
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

// Open Connection BD
function openBd()
{
    $servername = "hostingmysql328.nominalia.com";
    $username = "daw2a06";
    $password = "snarkypuppy2018";
    try
    {
        $conn = new PDO("mysql:host=$servername;dbname=snarkypuppy", $username, $password);
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); 

        return $conn;
    }
    catch(PDOException $e)
    {
        echo "Connection failed: " . $e->getMessage();
    }
}

// Close Connection BD
function tancarBd(){
    return null;
}

// Insert User BD
function inserirUser($user, $mail, $passwd){
    try
    {
            $conn = openBd();

            $sentencia = $conn->prepare("INSERT INTO user VALUES (:username, :mail, :passwd)");
            $sentencia->bindParam(':username', $user);
            $sentencia->bindParam(':mail', $mail);
            $sentencia->bindParam(':passwd', $passwd);
        
            $sentencia->execute();
            
    }
    catch(PDOException $e)
    {
        //$_SESSION['error'] = errorMessage($e);
        $_SESSION['error'] = $e->getCode() . ' - ' . $e->getMessage();

    }
    finally
    {
        $conn = tancarBd();
    }

}

// Log In User BD
function logInUser($email, $pass){

    try
    {
        $conn = openBD();

        $sentence = $conn->prepare("SELECT username FROM user WHERE mail=:mail AND passwd=:passwd");
        $sentence->bindParam(':mail', $email);
        $sentence->bindParam(':passwd', $pass);
        $sentence->execute();

        $result = $sentence->fetchAll();

        return $result;
    }
    catch(PDOException $e)
    {
        $_SESSION['error'] = $e->getCode() . ' - ' . $e->getMessage();
    }
    finally
    {
        $conn = tancarBd();
    }
    
}


?>