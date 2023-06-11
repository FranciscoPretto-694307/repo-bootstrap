//interfaz para que sea el usuario quien ingrese las categorías que desee, con el nombre de la categoría y el porcentaje que decide destina

/*
const porcentajesForm = document.getElementById('frm_presupuesto')

porcentajesForm.addEventListener('submit', event => {
  event.preventDefault()
  event.stopPropagation()
  var frm = event.target
  if (frm.checkValidity()) {
    frm.classList.add('was-validated')
    var data = {}
    
  var importeTotal = document.getElementsByName("monto_presupuesto_fld")[0].value ;
  var prGastosNecesarios = parseInt(document.getElementsByName("pr_gastos_nec_fld")[0].value) ;
  var prGastosOpcionales = parseInt(document.getElementsByName("pr_gastos_opc_fld")[0].value) ;
  var prAhorro = parseInt(document.getElementsByName("pr_ahorro_fld")[0].value) ;
  var gastosNecesarios = calcPr (importeTotal, prGastosNecesarios);
  var gastosOpcionales = calcPr (importeTotal, prGastosOpcionales);
  var gastosAhorro = calcPr (importeTotal, prAhorro);

  if (prGastosNecesarios+prGastosOpcionales+prAhorro==100){
    document.getElementById('presupuesto').innerHTML="Según los porcentajes que usted ingresó, debe dedicar $" + gastosNecesarios + " para los gastos necesarios, un monto de: $" + gastosOpcionales + " para gastos opcionales, y por último, un total de: $" + gastosAhorro + " para gastos de inversiones y ahorro." ;
} else {
    document.getElementById('presupuesto').innerHTML="La suma de los porcentajes ingresados no da 100, por favor verifiquelos y vuelva a intentarlo.";
}

}
  
})


function calcPr (total, pr) {
    var resultado = total * (pr/100);
    return resultado;
}
*/
