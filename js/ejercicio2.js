import * as Popper from "/node_modules/@popperjs/core/dist/umd/popper.js"
import * as bootstrap from '/node_modules/bootstrap/dist/js/bootstrap.bundle.js'

var importeTotal = parseInt(prompt("Ingrese su importe total: "));

function gastosNec (num1) {
    var resultado = num1 * 0.5;
    return resultado;
}

function gastosOpc (num1) {
    var resultado = num1 * 0.3;
    return resultado;
}

function gastosInv (num1) {
    var resultado = num1 * 0.2;
    return resultado;
}

var gastosNecesarios = gastosNec (importeTotal);
var gastosOpcionales = gastosOpc (importeTotal);
var gastosInversion = gastosInv (importeTotal);


document.getElementById('presupuesto').innerHTML="Según nuestro modelo de presupuesto usted debe dedicar un monto de: $" + gastosNecesarios + " para los gastos necesarios, un monto de: $" + gastosOpcionales + " para gastos opcionales, y por último, un total de: $" + gastosInversion + " para gastos de inversiones y ahorro." ;