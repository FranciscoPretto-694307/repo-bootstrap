import * as Popper from "/node_modules/@popperjs/core/dist/umd/popper.js"
import * as bootstrap from '/node_modules/bootstrap/dist/js/bootstrap.bundle.js'

const puntoEquilibrioForm = document.getElementById('frm_punto_equilibrio')

puntoEquilibrioForm.addEventListener('submit', event => {
  event.preventDefault()
  event.stopPropagation()
  var frm = event.target
  if (frm.checkValidity()) {
    frm.classList.add('was-validated')
    var data = {}
    
  var costosFijos = parseInt(document.getElementsByName("costos_fijos_fld")[0].value) ;
  var precioVenta = parseInt(document.getElementsByName("precio_venta_fld")[0].value) ;
  var costosVariables = parseInt(document.getElementsByName("costos_variables_fld")[0].value) ;
  var cantVentas = getPuntoEquilibrio (costosFijos, costosVariables, precioVenta);

//aca se valida si el precio de venta es mayor que los costos variables, ya que si es menor se estaria diviendo por un numero negativo, y si son iguales se dividiria por 0
if (precioVenta>costosVariables) {
  document.getElementById('puntoEquilibrio').innerHTML= "La cantidad de ventas que debe realizar para tener un Punto de Equilibrio es: " + cantVentas 
}
  else {
    alert("El precio de venta debe ser mayor que los costos variables")
}

  }

})

function getPuntoEquilibrio(costoFijo, costoVariable, precioVenta) {
  var resultado = costoFijo / (precioVenta - costoVariable);
  return resultado;
}

