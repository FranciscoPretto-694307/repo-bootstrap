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
    
    for (var i = 0; i<frm.length; i++) {
      var field = frm[i]
      if (field.getAttribute("submitable") == "true") {
        data[field.name] = field.value;
      }
      
    }
    if (data["frm_edad_fld"] >= 18) {
      alert("Edad validada! Usted es mayor de edad. (" + data["frm_edad_fld"] + ")");
      document.getElementById('edadValidada').innerText = "MAYOR. Su edad es: " + data["frm_edad_fld"];
    }   else {
            alert("Edad no validada! Usted es menor de edad. (" + data["frm_edad_fld"] + ")")
            document.getElementById('edadValidada').innerText = "MENOR. Su edad es: " + data["frm_edad_fld"];
        } 

  }

})

