import * as Popper from "../node_modules/@popperjs/core/dist/umd/popper.js" 
import * as bootstrap from "../node_modules/bootstrap/dist/js/bootstrap.js"


const loginSubmitFrm = document.getElementById('frm_login')

loginSubmitFrm.addEventListener('submit', event => {
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

    var usuario = data["frm_user_fld"];
    var password = data["frm_pwd_fld"];

    if (usuario == "admin" && password == "1234") {
      alert("Su ingreso ha sido validado. Bienvenido: " + usuario);
      document.getElementById('bienvenido').innerHTML = "BIENVENIDO: " + usuario;
    }   else {
            alert("Su usuario o contraseña son incorrectos. Por favor verifique y vuelva a intentar.")
            document.getElementById('bienvenido').innerHTML = " " ;

        } 

  }

})