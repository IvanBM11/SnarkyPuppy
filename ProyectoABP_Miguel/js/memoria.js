//variables globales para el juego
var iPuntosObtenidos=0,objPrimero;
var blnJuegoFinalizado=false;

$(document).ready(function(){
	$('#modalh').modal();
	//establecer la cantidad de figuras distintas que tenemos
	//y cuantas veces debemos iterar para dibujar la cuadricula correctamente
	var strCuadros=[1,2,3,4,5,6,7,8,9,10,11,12], iRepeticiones=2;
	
	//evento al hacer clic en los items de la lista
	$('ul li').live('click',function(){
		if(!blnJuegoFinalizado && $(this).css('opacity')!=0){
			var strImagen='img/obras/'+$(this).attr('rel')+'.png';
			if(objPrimero==undefined){
				objPrimero=$(this);
				objPrimero.stop(true,true).animate({opacity:.9}).css('background-image','url('+strImagen+')');
			}else{
				var objSegundo=$(this);
				objSegundo.stop(true,true).animate({opacity:.9}).css('background-image','url('+strImagen+')');
			
				//nos aseguramos que no se este clickeando sobre el mismo elemento
				if(objPrimero.index()!=objSegundo.index()){
					//el usuario encontro una pareja (los dos elementos coinciden)
					if(objPrimero.attr('rel')==objSegundo.attr('rel')){
						//ocultamos la pareja para que no aparezca mas
						$(objPrimero).stop(true,true).animate({opacity: 1}).delay(700).animate({opacity: 0});
						$(objSegundo).stop(true,true).animate({opacity: 1}).delay(700).animate({opacity: 0});
						
						//finalizamos el juego porque ya encontro todas las parejas
						if(iPuntosObtenidos==$('ul li').length/2) 
						
						$.fntFinalizarJuego();
					
					
					}else{
						//el usuario no encontro una pareja, no coinciden los elementos
						//borramos el contenido de los elementos seleccionados por el usuario
						$(objPrimero).stop(true,true).animate({opacity: 1},1000,function(){$(this).css('background-image','none');});
						$(objSegundo).stop(true,true).animate({opacity: 1},1000,function(){$(this).css('background-image','none');});
					}
				}else{
					//se esta clickeando sobre el mismo elemento, entonces le devolvemos su opacidad original
					$(this).stop(true,true).animate({opacity: 1},1000,function(){$(this).html('&nbsp;');});
				}
				//limpiamos la variable que contiene al primer elemento
				objPrimero=undefined;
			}
		}else{
			//el juego finalizo o el elemento clickeado ya fue descubierto
			$('#modalf').modal();
		}
	});
	

	
	//funcion para finalizar el juego
	$.fntFinalizarJuego=function(){
	
		$('#divContenedor ul').html('');

		//finalizar el juego
		blnJuegoFinalizado=true;


		
	};
	
	//funcion para iniciar el juego
	$.fntIniciarJuego=function(){

		
		//creamos la cuadricula
		for(var iCont=0;iCont<iRepeticiones;iCont++){
			//desordenamos el array
			strCuadros=strCuadros.sort(function(){
				return Math.random() - 0.5
			});
			
			//agregamos los items a la lista (inicialmente vacios)
			for(var iCuadros=0;iCuadros<strCuadros.length;iCuadros++){
				$('#divContenedor ul').append('<li rel="'+strCuadros[iCuadros]+'">&nbsp;</li>');
			}
		}
		

		//ocultamos la capa inicial
		$('#divInicio').stop(true,true).fadeOut(1500,function(){
			//iniciamos el conteo de tiempo
			blnJuegoFinalizado=false;
		});
	};
	
	//clic en el boton jugar
	$('#btnJugar').on('click',function(){
		//iniciamos el juego
		$.fntIniciarJuego();
	});






});