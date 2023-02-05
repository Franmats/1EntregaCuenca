let monto = Number(prompt("Ingrese monto de deposito inicial"))
let porcentaje = Number(prompt("Ingrese el porcentaje de rendimiento anual del banco ejem: 70"))
let meses = Number(prompt("Ingrese cantidad de meses a invertir"))
let mail = prompt("¿Quieres que enviemos los resultados a tu mail? Resp: SI o NO").toUpperCase()

if (mail == "SI") {
    let askAgain = true 
    let userEmail = ""
    let comfirmUserEmail=""
    do {
        userEmail = prompt("ingrese su correo")
        comfirmUserEmail = prompt("confirme su correo")
        if (userEmail == comfirmUserEmail){
            alert("El correo: " + userEmail+ " fue guardado con exito")
            alert("Ahora te mostramos los resultados")
            askAgain = false 
        } else {
            alert("Los correos deben ser iguales") 
        }
    } while (askAgain);
}
for (let i=1; i<=meses; i++) {

    let porcentajeFinal = ((porcentaje/100)/12) 
    let subresultado = porcentajeFinal * monto
    let resultado = subresultado + monto 
    monto = resultado
    nombreMes = "primer mes"
    switch (i) {
        case 2:
            nombreMes ="segundo mes"
            break;
        case 3:
            nombreMes ="tercer mes"
            break;
        case 4:
            nombreMes ="cuarto mes"
            break;
        case 5:
            nombreMes ="quinto mes"
            break;
        case 6:
            nombreMes ="sexto mes"
            break;
        case 7:
            nombreMes ="septimo mes"
            break;
        case 8:
            nombreMes ="octavo mes"
            break;
        case 9:
            nombreMes ="noveno mes"
            break;
        case 10:
            nombreMes ="decimo mes"
            break;
        case 11:
            nombreMes ="onceavo mes"
            break;
        case 12:
            nombreMes ="doceavo mes"
            break;

        default:
            break;
    }

    alert("En el " +nombreMes+ " obtendras un saldo total de " + "$" + resultado.toFixed(2))
    let rendimiento = 0
    function rendir() {
        let rendimiento = monto - (monto/(((porcentaje/100)/12)+1))
        alert("con un rendimiento en el mes de: " + rendimiento.toFixed(2))
    }
    rendir()
}


