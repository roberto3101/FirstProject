//validación del nombre

document.querySelector('input[name="txtnombre"]').addEventListener("keypress",function(event){

    var ascii=event.keyCode || event.wich;
    if(ascii>=48 && ascii<=57){
        window.event.preventDefault();
        alert("Solo se permite texto...");
        return;
    } 
});

//validación del apellido

document.querySelector('input[name="txtapellido"]').addEventListener("keypress",function(event){

    var ascii=event.keyCode || event.wich;
    if(ascii>=48 && ascii<=57){
        window.event.preventDefault();
        alert("Solo se permite texto...");
        return;
    } 
});

//validación del celular

document.querySelector('input[name="txtcelular"]').addEventListener("keypress",function(event){
var longitud=document.querySelector('input[name="txtcelular"]').value.length;
if(longitud>=9){
    window.event.preventDefault();
    alert("Maximo 9 digitos...");
    return;
}

    var ascii=event.keyCode || event.wich;
    if(ascii<48 || ascii>57){
        window.event.preventDefault();
        alert("Solo números...");
        return;
    }
})



//expresiones regulares

function nuevo(frm){
    let test=/^\d{9}$/;
    if(!test.test(frm.txtcelular.value)){
        window.event.preventDefault();
        alert("Ingresar Correctamente el número...");
        return;
    }

    test=/^\s*$/;
    if(test.test(frm.txtnombre.value)){
        window.event.preventDefault();
        alert("Ingresa Correctamente el nombre...");
        return;
    }

    test=/^\s*$/;
    if(test.test(frm.txtapellido.value)){
        window.event.preventDefault();
        alert("Ingresa Correctamente el nombre...");
        return;
    }
    test=/^([a-zA-Z0-9])+[@]([a-z])+[.][a-z]{2,3}$/;
    if(!test.test(frm.txtemail.value)){
        window.event.preventDefault();
        alert("Formato incorrecto...");
        return;
    }
    if(contrasenia.value == contrasenia2.value){
    }
    if(contrasenia2.value != contrasenia.value){
        alert("Segunda contraseña incorrecta")
    }
    else{
        localStorage.setItem("usuario",frm.txtemail.value);
        localStorage.setItem("contra",frm.contrasenia.value);
        alert("Datos Ingresados Correctamente");
        window.location="login.html"
    }
}

//validación de la contraseña
const contrasenia =document.getElementById("contrasenia");
const contrasenia2 =document.getElementById("repetircontrasenia")
const form =document.getElementById("form");

form.addEventListener("submit", (a) =>{
    a.preventDefault();
    let condicion=validacioncontraseñas();
})