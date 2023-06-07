import * as Popper from "../node_modules/@popperjs/core/dist/umd/popper.js" 
import * as bootstrap from "../node_modules/bootstrap/dist/js/bootstrap.js"

// calculadora con 3 variables, 2 numeros y un operador
var numA = 7
var numB = 8
var operador = "*"

switch (operador) {
    case "+": 
        console.log (numA + numB);
        break;

    case "-":
        console.log (numA - numB);
        break;
    
    case "/":
        console.log (numA / numB);
        break;
    
    case "*":
        console.log (numA * numB);
        break;
    
    default:
        console.log ("No escribiste un operador correcto");
        break;
}

/* calculadora con funciones

var operacion = prompt("Ingrese la operación que desee realizar en mayúscula (RESTA, SUMA, MULTIPLICACION o DIVISION");
var num1 = parseInt(prompt("Ingrese el primer numero"));
var num2 = parseInt(prompt("Ingrese el segundo numero"));
var ret = null;

switch (operacion){

    case "SUMA":
        ret = suma(num1, num2);
        break;

    case "RESTA":
        ret = resta(num1, num2);
        break;

    case "DIVISION":
        ret = division(num1, num2);
        break;

    case "MULTIPLICACION":
        ret = multiplicacion(num1, num2);
        break;

    default: 
        alert("Algo salio mal, refresque la página");
        break;

}

alert("El resultado de su " + operacion + " es: " + ret);

function suma(num1, num2){
    var resultado = num1 + num2;
    return resultado;
}

function resta(num1, num2){
    var resultado = num1 - num2;
    return resultado;
}

function division(num1, num2){
    var resultado = num1 / num2;
    return resultado;
}

function multiplicacion(num1, num2){
    var resultado = num1 * num2;
    return resultado;
}
*/

// calculadora hecha en clase 
const operations = {
    SUMAR: (a, b) => a + b ,
    RESTAR: (a, b) => a - b ,
    DIVIDIR: (a, b) => a / b ,
    MULTIPLICAR: (a, b) => a * b 
}

function calcular(operation, valorA, valorB) {
    operation = operation.toUpperCase();
    return operations[operation](valorA, valorB)
}


// current date 
var d = new Date ();
console.log (d)

var listaPersonas = [
    {"nombre":"Marcelo", "apellido":"Perez", edad:35},
    {"nombre":"Marcelo", "apellido":"Gomez", edad:40},
    {"nombre":"Mario", "apellido":"Gonzales", edad:38},
    {"nombre":"Lucio", "apellido":"Perez", edad:45}
]

var aceptados = []
var rechazados = []

// FOR (DEF indice ; Alcance o Condicion verdadera ; MOD indice)

for (var i = 0 ; i<listaPersonas.length ; i++) {
    var per=listaPersonas[i];

    console.log(listaPersonas[i])    
    if (per.nombre == "Marcelo") {
        console.log("Candidato: " + per.nombre + ", edad: " + per.edad);
        aceptados.push(i); 
      } else {
        console.log("Rechazado: " + per.nombre + ", edad: " + per.edad);
        rechazados.push(i);
      }
}

console.log ("aceptados: " + aceptados);
console.log ("rechazados: " + rechazados);

// otra forma de recorrer una lista en java
for (var i in listaPersonas) {
    console.log (listaPersonas[i])
}

var mensaje = "Estas en la lista";
var i = 0;

//While bucle
while (i<listaPersonas.length) {
    mensaje += listaPersonas[i].nombre
    i++
}

console.log(mensaje)


//function
function sumar(a, b) {
    return a + b;
  }

var total = sumar(1, 5);
console.log(total);

//function con un argumento minimo pero sin maximo
function logear(a, ...b) {
    var templateLog = a ;
    for(var i= 0; i<b.length; i++) {
      templateLog += " " + b[i];
    }
    console.log(templateLog);
  }
  logear("Hola")
  
  logear("Hola", "Como estas?", "Todo bien?", "Creo que si", "te parece?", "")
  
  // bucle para los botones donde le asigno una funcion al onclick

/* alerta a los botones 
  var boton = document.getElementsByTagName("button")

  for (i=0; i<boton.length; i++) {
    boton[i].onclick = function () {
        saludar (this.innerHTML)
    };
  }

  function saludar (nombre) {
    alert ("Hola boton: " + nombre);
  }
*/

const cardModal = document.getElementById('cardModal')

cardModal.addEventListener('show.bs.modal', event => {
  // Button that triggered the modal
  const button = event.relatedTarget
  // Extract info from data-bs-* attributes
  const cardId = button.getAttribute('data-bs-ref-id')
  const title = button.getAttribute('data-bs-title')
  
  const card = document.getElementById(cardId)
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  const modalTitle = cardModal.querySelector('.modal-title')
  const modalBodyInput = cardModal.querySelector('.modal-body')

  modalTitle.textContent = title
  modalBodyInput.innerHTML = card.innerHTML
})

const loginSubmitFrm = document.getElementById('login_frm')

loginSubmitFrm.addEventListener('submit', event => {
  event.preventDefault()
  event.stopPropagation()
  var frm = event.target
  if (frm.checkValidity()) {
    frm.classList.add('was-validated')
    var data = {}
    /*var data = {"username":document.getElementById("username_fld").value, 
    "pwd": document.getElementById("password_fld").value};*/
    for (var i = 0; i<frm.length; i++) {
      var field = frm[i]
      if (field.getAttribute("submitable") == "true") {
        data[field.name] = field.value;
      }
      
    }
    if (data["username"] == "francisco" && data["pwd"] == "1234") {
      alert("Gracias por ingresar Francisco");
    }   else {
            alert("Usuario o contraseña invalido")
        } 
    console.log(data);
  }

})