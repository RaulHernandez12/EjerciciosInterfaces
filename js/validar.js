function validar() {
    var dni, nombre, apellido, correo, pas , repetir , cp  ;
    var expresionDni = /^\d{8}[a-zA-Z]$/;
    var expresionNombreApellido = /[a-z]/;
    var expresionCorreo = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var expresionPas = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    var expresionCp = /^(?:0[1-9]\d{3}|[1-4]\d{4}|5[0-2]\d{3})$/;
    
    dni = document.forms["formulario"]["dni"].value;
    nombre = document.forms["formulario"]["nombre"].value;
    apellido = document.forms["formulario"]["apellido"].value;
    correo = document.forms["formulario"]["correo"].value;
    pas = document.forms["formulario"]["pas"].value;
    repetir = document.forms["formulario"]["repetir"].value;
    cp = document.forms["formulario"]["cp"].value;
    var comentarios = document.getElementById("area").value;
    var palabras = comentarios.trim().split(" ");
    
    
    
   
        if( dni === "" || nombre === "" || apellido === "" || correo === "" || pas === "" || repetir === "" || cp === "" || comentarios === ""){
            document.getElementById("todos").innerHTML = "Todos los campos son obligatorios"
            return false;
        };

        if(!expresionDni.test(dni)){
            document.getElementById("dniP").innerHTML ="DNI incorrecto";
            return false;           
        }
        else{
            document.getElementById("dniP").innerHTML ="DNI correcto";
        }; 

        if(!expresionNombreApellido.test(nombre)){
            document.getElementById("nombreP").innerHTML ="El nombre no puede contener numeros";
            return false;
        }else{
            document.getElementById("nombreP").innerHTML ="El nombre es correcto";
        };

        if(!expresionNombreApellido.test(apellido)){
            document.getElementById("apellidoP").innerHTML ="El apellido no puede contener numeros";
            return false;
        }else{
            document.getElementById("apellidoP").innerHTML ="El apellido es correcto";
        };

        if(!expresionCorreo.test(correo)){
            document.getElementById("correoP").innerHTML ="El correo no es valido";
            return false;
        }else{
            document.getElementById("correoP").innerHTML ="El correo es valido";
        };

        if(!expresionPas.test(pas)){
            document.getElementById("pasP").innerHTML ="La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.";
            return false;
        }else{
            document.getElementById("pasP").innerHTML ="La contraseña es valida";
        };

        if(pas !== repetir){
            document.getElementById("repetirP").innerHTML ="Las contraseñas deben coincidir";
            return false;
        }else{
            document.getElementById("repetirP").innerHTML ="Las contraseñas coinciden correctamente";
        };
        
        if(!expresionCp.test(cp)){
            document.getElementById("cpP").innerHTML ="El codigo postal no es valido";
            return false;
        }else{
            document.getElementById("cpP").innerHTML ="El codigo postal es valido";
        };
        console.log(palabras.length)
        for(var i = 0; i < palabras.length ; i++ ){
            if(palabras[i] == "tonto" || palabras[i] == "idiota" || palabras[i] == "gilipollas"){
                alert("No se permiten insultos");
                return false;
            }
            
        }
        
}