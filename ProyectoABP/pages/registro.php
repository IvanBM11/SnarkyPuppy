<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>LOGIN</title>
    <link rel="stylesheet" href="/ProyectoABP/css/bootswatch.css">
    <script src="/ProyectoABP/js/jquery-3.3.1.min.js"></script>
    <script src="/ProyectoABP/js/popper.min.js"></script>
    <script src="/ProyectoABP/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="/ProyectoABP/css/registro.css">

    <script>
        
    </script>
</head>
<body>

<div class="container-fluid full-background" id="tot">
    <div class="card border-info mr-5 ml-5 mt-5" id="log_in">
        <div class="card-header bg-info text-center" >
             <h2>Sign Up</h2>    
        </div>
        <div class="card-body">
            <form action="../Controller.php" method="post">
                        <div class="form-group row">
                            <label for="txtMail" class="col-sm-2 col-form-label">e-Mail</label>
                            <div class="col-sm-10">
                                <input type="email" name="txtMail" id="txtMail" placeholder="e-Mail" class="form-control" required/>        
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="txtNombre" class="col-sm-2 col-form-label">Name</label>
                            <div class="col-sm-10">
                                <input type="text" name="txtNombre" id="txtNombre" placeholder="Your Name" maxlength="50" class="form-control" required/>        
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="txtContrasenya" class="col-sm-2 col-form-label">Password</label>
                            <div class="col-sm-10">
                                <input type="password" name="txtContrasenya" id="txtContrasenya" placeholder="**************" maxlength="50" class="form-control" required/>        
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-sm-2"></div>
                            <div class="col-sm-10">
                                <button type="submit" class="btn btn-success" name="buttonaceptar" id="buttonaceptar" style="border-radius: 15px;">ACCEPT</button>
                                <a role="button" class="btn btn-danger" href="home.php" style="border-radius: 15px;">CANCEL</a>
                            </div>
                        </div>
            </form>

        </div>
        <div class="card-footer bg-secondary">
            <p>Do you already have an account?<a href="/ProyectoABP/pages/login.php">  Click here to access your account</a></p>
        </div>
    </div>
</div>
</body>
<footer>
    <!-- IMAGENES PATROCINADORES -->
</footer>
</html>
    