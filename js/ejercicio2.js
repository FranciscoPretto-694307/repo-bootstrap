import * as Popper from "../node_modules/@popperjs/core/dist/umd/popper.js" 
import * as bootstrap from "../node_modules/bootstrap/dist/js/bootstrap.js"

var ofertas = [
    {"nombre":"plan001", "capital":150000, "plazo":30, "tasa":0.15},
    {"nombre":"plan002", "capital":300000, "plazo":180, "tasa":0.10},
    {"nombre":"plan003", "capital":485000, "plazo":60, "tasa":0.23} 
]

var intereses = [];

for (var i = 0 ; i<ofertas.length ; i++) {
    console.log (ofertas[i])
    var interes = calcInt (ofertas[i].capital, ofertas[i].plazo, ofertas[i].tasa)
    intereses.push({"nombre":ofertas[i].nombre, "interes":interes})
}

console.log(intereses)

for (var i = 0 ; i<intereses.length ; i++) {
    document.getElementById('interes_generado').innerHTML += ("El interés generado del plan ' " + intereses[i].nombre + " ' es de: $" + intereses[i].interes + "<br>")
}

function calcInt (capital, plazo, tasa) {
    var interes = (capital * plazo * tasa) / 100 ; 
    return interes;
}

