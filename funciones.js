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
          if(dia[numero].value == "" || dia[numero].value == null){
                  alert("Debe seleccionar un día de la semana");
                  
          }else{
                alert(dia[numero].value +", " +hora[numero].value);                
          }            
        
}

function finalizar(){
        if(butacas.length == null || butacas.length == 0){
                document.getElementById("finalizado").innerHTML= ("<h5 id=\"entradas\"> Debe seleccionar al menos una butaca</h5>");
                
        }else{
                document.getElementById("finalizado").innerHTML =("<h5 id=\"entradas\"> Su compra ha finalizado</h5>");
                setTimeout("location.href='portada.html'", 3000);
        }
}

function precio(){
        var semana = new Date();
        var dia = semana.getDay();
        if(butacas.length == null || butacas.length == 0){
                document.getElementById("calcular").innerHTML= ("<h5 id=\"entradas\"> Debe seleccionar al menos una butaca</h5>");               
        }
        else if(dia == 1 || dia == 2 || dia == 4){
                document.getElementById("calcular").innerHTML= ("<h5 id=\"entradas\">El precio es: " + butacas.length*normal+"€</h5>");
        }else if(dia == 5 || dia == 6 || dia == 0){
                document.getElementById("calcular").innerHTML= ("<h5 id=\"entradas\">El precio es: " + butacas.length*finde+"€</h5>");
        }else{
                document.getElementById("calcular").innerHTML= ("<h5 id=\"entradas\">El precio es: " + butacas.length*espectador+"€</h5>");
        }

}


function enlace(numero){
        if(dia[numero].value == "" || dia[numero].value == null || hora[numero].value == "" || hora[numero].value == null ){
                alert("Debe seleccionar un día de la semana y la hora");
               
        }else{
               setTimeout("location.href='butacas.html'");
                
        }
        
}


function sala(){
        var aleatorio = Math.floor(Math.random() * 5) + 1;
        document.getElementById("sala"). innerHTML = ("Sala " + aleatorio);
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



