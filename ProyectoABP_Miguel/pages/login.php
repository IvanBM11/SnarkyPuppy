<?php
    session_start();
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Log In</title>
    <link rel="stylesheet" href="/ProyectoABP/css/bootswatch.css">
    <script src="/ProyectoABP/js/jquery-3.3.1.min.js"></script>
    <script src="/ProyectoABP/js/popper.min.js"></script>
    <script src="/ProyectoABP/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="/ProyectoABP/css/registro.css">
</head>
<body>

<div class="container-fluid full-background col-sm-6 col-md-6" id="tot" >
    <div class="card border-info mr-5 ml-5 mt-5" id="log_in">
        <div class="card-header bg-info text-center" >
             <h2>Log In</h2>    
        </div>
        <div class="card-body">

            <form action="../Controller.php" method="post" id="formulario" >
                <div class="form-group row">
                    <label for="txtMail" class="col-sm-3 col-form-label" id="label" >e-Mail</label>
                    <div class="col-sm-9">
                        <input type="email" name="txtMail" id="txtMail" placeholder="E-mail" class="form-control" required/>        
                    </div>
                </div>
                <div class="form-group row">
                    <label for="txtContrasenya" class="col-sm-3 col-form-label" id="label">Password</label>
                    <div class="col-sm-9">
                        <input type="password" name="txtContrasenya" id="txtContrasenya" placeholder="**************" maxlength="50" class="form-control" required/>        
                    </div>
                </div>
                <div class="form-group row">
                
                    <div class="offset-sm-5" style="margin:auto;">
                        <button type="submit" class="btn btn-success" name="btnLogIn" id="Log In" style="border-radius: 15px;">LOG IN</button>
                        <a role="button" class="btn btn-danger" href="home.php" style="border-radius: 15px;">CANCEL</a>
                    </div>
                </div>
            </form>

        </div>
        <div class="card-footer bg-secondary">
            <p class="text-center">Do you not have an account yet?<a href="/ProyectoABP/pages/registro.php"> Click here to create a new account</a></p>
        </div>
    </div>
</div>
</body>
<footer>
    <!-- IMAGENES PATROCINADORES -->
</footer>
</html>