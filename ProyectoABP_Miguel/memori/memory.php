<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
  <script src="../js/jquery.min.js"></script>
	<script src="../js/memoria.js"></script>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
  <title>Enigma1</title>


    
	<link rel="stylesheet" type="text/css" href="/ProyectoABP/css/bootswatch.css">
	<link rel="stylesheet" type="text/css" href="../css/memoria.css">




</head>

<body>
<div class="modal"  tabindex="-1" role="dialog" id="modalh">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Welcome to this adventure</h5>
      </div>
      <div class="modal-body">
        <p>We are in La Pedrera, one of the most visited places in Barcelona, 
        ​​looking for clues about Masons, but be careful not to discover us, 
        we enter a room and see many Masons symbols. Can you remember them all?</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Start</button>
      </div>
    </div>
  </div>
</div>

<div class="modal"  tabindex="-1" role="dialog" id="modalf">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Congratulations!</h5>

          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>You have managed to solve the puzzle,
         but have you fixed that symbol with a 33? What can it mean? 
         Go to the next riddle to continue investigating!</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>


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
				<?php }?>
                    
               
			</nav>

			
<h1>Memory</h1>
	<div id="divContenedor">
		<ul>
            
        </ul>
		<div id="divInicio">
			<div id="divInferior" >
				<input type="button" value="Jugar" id="btnJugar" >
			</div>
		</div>

	</div>






</body>

</html>
   


	
