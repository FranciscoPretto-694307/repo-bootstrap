import * as Popper from "/node_modules/@popperjs/core/dist/umd/popper.js"
import * as bootstrap from '/node_modules/bootstrap/dist/js/bootstrap.bundle.js'

var costosFijos = parseInt(prompt("Ingrese sus costos fijos: "));
var costosVar = parseInt(prompt("Ingrese sus costos variables: "));
var precVenta = parseInt(prompt("Ingrese su precio de venta: "));


function ptoEquil(num1, num2, num3) {
  var resultado = num1 / (num3 - num2);
  return resultado;
}

var cantVentas = ptoEquil (costosFijos, costosVar, precVenta);

document.getElementById('puntoEquilibrio').innerHTML= "La cantidad de ventas que debe realizar para tener un Punto de Equilibrio es: " + cantVentas 
