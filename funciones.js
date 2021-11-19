const normal = 6;
const espectador = 4;
const finde = 7.50;
var butacas = document.getElementsByClassName("seleccionado");
var clase = document.getElementsByClassName("libre");
var hora = document.getElementsByClassName("hora"); 
var dia = document.getElementsByClassName("dia");

var matriz = [13][19];



function cambiar(numero){ 
               
        clase[numero].classList.toggle("seleccionado");
                                   
        document.getElementById("entradas").innerHTML = ("<h5>Ha seleccionado "+ butacas.length +  " entradas. </h5>");        
    }


function sesion(numero){
                      
        alert(dia[numero].value +", " +hora[numero].value);
}

function finalizar(){
        if(butacas.length == null || butacas.length == 0){
                document.getElementById("finalizado").innerHTML= ("<h3 id=\"entradas\"> Debe seleccionar al menos una butaca");
                setTimeout("location.href='butacas.html'", 3000);
        }else{
                document.getElementById("finalizado").innerHTML =("<h3 id=\"entradas\"> Su compra ha finalizado</h3>");
                setTimeout("location.href='portada.html'", 3000);
        }
}

function precio(){
        var semana = new Date();
        var dia = semana.getDay();
        if(butacas.length == null || butacas.length == 0){
                document.getElementById("calcular").innerHTML= ("<h3 id=\"entradas\"> Debe seleccionar al menos una butaca");
        }
        else if(dia == 1 || dia == 2 || dia == 4){
                document.getElementById("calcular").innerHTML= ("<h3 id=\"entradas\">El precio es: " + butacas.length*normal+"€");
        }else if(dia == 5 || dia == 6 || dia == 0){
                document.getElementById("calcular").innerHTML= ("<h3 id=\"entradas\">El precio es: " + butacas.length*finde+"€");
        }else{
                document.getElementById("calcular").innerHTML= ("<h3 id=\"entradas\">El precio es: " + butacas.length*espectador+"€");
        }

}


function enlace(){
        
}
/*function crearTabla(){
        var tabla = document.createElement('table');
        var tbody = document.createElement('tbody');

        tabla.appendChild(tbody);
        
        document.getElementById("prueba").appendChild(tabla);
       
        for(i= 0 ; i < 13; i++){
                var fila  = document.createElement('tr');
                tbody.appendChild(fila)
                        for(j=0; j < 20; j++){
                                var columna = document.createElement('td');
                                columna.innerHTML = (j + 1);
                                fila.appendChild(columna);
                                
                        }
               
        }
}*/



