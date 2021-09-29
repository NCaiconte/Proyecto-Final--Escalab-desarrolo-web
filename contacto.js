function ValidarDatos(){
    var nombre= document.getElementById("name").value;
    var email= document.getElementById("email").value;

    console.log(nombre);
    console.log(email);

    if(nombre ==''|| email==''){
        alert("Todos los campos son obligatorios");
    }
}