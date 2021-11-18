
function cambiar(numero){ 
    var clase = document.getElementsByClassName("libre");    
    clase[numero].classList.toggle("seleccionado");    
    
    var butacas = document.getElementsByClassName("seleccionado");
    console.log(butacas.length);
    document.getElementById("entradas").innerHTML = ("Ha seleccionado "+ butacas.length + " entradas");
}


function precio(){

   
    
    
    
}



