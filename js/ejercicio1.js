import * as Popper from "../node_modules/@popperjs/core/dist/umd/popper.js" 
import * as bootstrap from "../node_modules/bootstrap/dist/js/bootstrap.js"

const edadSubmitFrm = document.getElementById('frm_edad')

edadSubmitFrm.addEventListener('submit', event => {
  event.preventDefault()
  event.stopPropagation()
  var frm = event.target
  if (frm.checkValidity()) {
    frm.classList.add('was-validated')
    var data = {}
    
  var edad = document.getElementsByName("frm_edad_fld")[0].value ;

    if (edad >= 18) {
      // alert("Edad validada! Usted es mayor de edad. (" + edad + ")");
      document.getElementById('edadValidada').innerText = "Usted es mayor de 18. Su edad es: " + edad;
    }   else {
            // alert("Edad no validada! Usted es menor de edad. (" + edad + ")")
            document.getElementById('edadValidada').innerText = "Usted es menor de 18. Su edad es: " + edad;
        } 

  }

})

