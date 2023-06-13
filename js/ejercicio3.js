import * as jquery from '/node_modules/jquery/dist/jquery.js'
import * as Popper from "/node_modules/@popperjs/core/dist/umd/popper.js"
import * as bootstrap from '/node_modules/bootstrap/dist/js/bootstrap.bundle.js'

//interfaz para que sea el usuario quien ingrese las categorías que desee, con el nombre de la categoría y el porcentaje que decide destina

const calculoForm = document.getElementById('frm_calculo')

calculoForm.addEventListener('submit', event => {
  event.preventDefault()
  event.stopPropagation()
  var frm = event.target
  var presupuestos = document.getElementById('monto_presupuesto_fld').value
  
  if (frm.checkValidity()) {
    frm.classList.add('was-validated')
    
    for (var i = 0; i<frm.length; i++) {
      console.log(presupuestos)
      var field = frm[i]
      if (field.getAttribute("category") == "true") {
        document.getElementById('resultado').innerHTML += "El presupuesto para su categoría '" + field.value + "' " ;
      } else if (field.getAttribute("porcentaje") == "true") {
        document.getElementById('resultado').innerHTML += "es de: $" + calcPr(presupuestos, field.value) + "<br>" ;
      }
      
    }
    
  }

})


function calcPr (total, pr) {
    var resultado = total * (pr/100);
    return resultado;
}

//funcion con jquery para generar nuevos inputs dinamicamente y que su id tenga un nombre con un contador que se incrementa

$(document).ready(function() {
  var container_fields = $(".container_fields");
  var add_button = $(".add_fields_btn");

  var count = 1;
  $(add_button).click(function(e) {
      e.preventDefault();
      count++;
      $(container_fields).append('<div class="d-flex mb-3"><input type="text" class="form-control" id="categoria_' + count + '_fld" category=true placeholder="Nombre de su categoría">' + '<input type="number" class="form-control" id="pr_categoria_' + count + '_fld" porcentaje=true placeholder="Porcentaje para su categoría" required></div>'); 
  });

});
