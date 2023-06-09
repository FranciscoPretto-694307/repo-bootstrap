import * as Popper from "../node_modules/@popperjs/core/dist/umd/popper.js" 
import * as bootstrap from "../node_modules/bootstrap/dist/js/bootstrap.js"

var ofertas = [
    {"nombre":"plan001", "capital":150000, "plazo":30, "tasa":15},
    {"nombre":"plan002", "capital":300000, "plazo":180, "tasa":10},
    {"nombre":"plan003", "capital":485000, "plazo":60, "tasa":23} 
]


for (var i = 0 ; i<ofertas.length ; i++) {
    console.log (ofertas[i])
    var interes = calcInt (ofertas[i].capital, ofertas[i].plazo, ofertas[i].tasa)
    console.log ("El interes es del plan '" + ofertas[i].nombre + "' es: " + interes)
}



function calcInt (capital, plazo, tasa) {
    var interes = (capital * plazo * tasa) / 100 ; 
    return interes;
}