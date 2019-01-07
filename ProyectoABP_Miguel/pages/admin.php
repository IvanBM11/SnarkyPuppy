<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ADMIN</title>
    <link rel="stylesheet" href="/ProyectoABP/css/bootswatch.css">
    <link rel="stylesheet" href="/ProyectoABP/css/admin.css">
    <script src="/ProyectoABP/js/jquery-3.3.1.min.js"></script>
    <script src="/ProyectoABP/js/popper.min.js"></script>
    <script src="/ProyectoABP/js/bootstrap.min.js"></script>
</head>
<body>  

    

<div class="container full-background" id="tot">
    <form action="/ProyectoABP/Controller.php" method="post">
    <div class="card-group">
        <div class="card mr-2 carta">
           <button type="button" class="btn btn-primary bot" name="suscribe"><strong>SUSCRIBE</strong></button> 
        </div>
        <div class="card mr-2 carta">
            <button type="button" class="btn btn-secondary bot" name="modify"><strong>MODIFY</strong></button>
        </div>
        <div class="card carta">
            <button type="button" class="btn btn-danger bot" name="delete"><strong>DELETE</strong></button>
        </div>
    </div>
    </form>
</div>

<script>
        
    alert("¡WAIT!, you are in ADMIN mode.");
    
</script>

</body>
</html>