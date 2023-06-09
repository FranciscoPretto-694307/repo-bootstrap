import * as Popper from "../node_modules/@popperjs/core/dist/umd/popper.js" 
import * as bootstrap from "../node_modules/bootstrap/dist/js/bootstrap.js"

var flujo = [
    {"periodo":"enero", "ingreso":1500, "egreso":1500},
    {"periodo":"febrero", "ingreso":2500, "egreso":2500},
    {"periodo":"marzo", "ingreso":86483, "egreso":1155},
    {"periodo":"abril", "ingreso":135353, "egreso":1533},
    {"periodo":"mayo", "ingreso":1535, "egreso":5433},
    {"periodo":"junio", "ingreso":4343354, "egreso":5434543},
    {"periodo":"julio", "ingreso":435453, "egreso":4543},
    {"periodo":"agosto", "ingreso":78351, "egreso":7816},
    {"periodo":"septiembre", "ingreso":1878, "egreso":95634},
    {"periodo":"octubre", "ingreso":48483, "egreso":9433},
    {"periodo":"noviembre", "ingreso":35483, "egreso":53133},
    {"periodo":"diciembre", "ingreso":3843, "egreso":348133}
]

for (var i = 0; i<flujo.length; i++) {
    var difMens = flujoMes (flujo[i].ingreso, flujo[i].egreso)
    console.log ("La diferencia del mes " + flujo[i].periodo + " es: " + difMens)
}

//como hacer para sumar todos los meses para calc dif anual?

function flujoMes (num1, num2) {
    var resultado = num1 - num2 ; 
    return resultado;
}