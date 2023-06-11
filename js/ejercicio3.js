import * as Popper from "/node_modules/@popperjs/core/dist/umd/popper.js"
import * as bootstrap from '/node_modules/bootstrap/dist/js/bootstrap.bundle.js'


//interfaz para que sea el usuario quien ingrese las categorías que desee, con el nombre de la categoría y el porcentaje que decide destina


const porcentajesForm = document.getElementById('frm_presupuesto')

porcentajesForm.addEventListener('submit', event => {
  event.preventDefault()
  event.stopPropagation()
  var frm = event.target
  if (frm.checkValidity()) {
    frm.classList.add('was-validated')
    var data = {}
    
  var importeTotal = document.getElementsByName("monto_presupuesto_fld")[0].value ;
  var prCategoria1 = parseInt(document.getElementsByName("pr_categoria1_fld")[0].value) ;
  var prCategoria2 = parseInt(document.getElementsByName("pr_categoria2_fld")[0].value) ;
  var prCategoria3 = parseInt(document.getElementsByName("pr_categoria3_fld")[0].value) ;
  var categoria1 = document.getElementsByName("categoria1_fld")[0].value ;
  var categoria2 = document.getElementsByName("categoria2_fld")[0].value ;
  var categoria3 = document.getElementsByName("categoria3_fld")[0].value ;
  var gastos1 = calcPr (importeTotal, prCategoria1);
  var gastos2 = calcPr (importeTotal, prCategoria2);
  var gastos3 = calcPr (importeTotal, prCategoria3);

  if (prCategoria1+prCategoria2+prCategoria3==100){
    document.getElementById('presupuesto').innerHTML= "El presupuesto para la categoria '" + categoria1 + "' es de: $" + gastos1 +  "<br> El presupuesto para la categoria '" + categoria2 + "' es de: $" + gastos2 + "<br> El presupuesto para la categoria '" + categoria3 + "' es de: $" + gastos3 ;
} else {
    document.getElementById('presupuesto').innerHTML="La suma de los porcentajes ingresados no da 100, por favor verifiquelos y vuelva a intentarlo.";
}

}
  
})


function calcPr (total, pr) {
    var resultado = total * (pr/100);
    return resultado;
}

//investigando como hacer funcion que añada nuevos input para seguir escribiendo nuevas categorias
function addField (){

}