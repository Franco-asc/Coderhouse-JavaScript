const dolar = 210
const euro = 300
const multiplicacion = (num1,moneda) => num1 * moneda 

let num1
let moneda

do {
    num1 = parseFloat(prompt("ingresar su valor en pesos"))
    moneda= prompt("igresar en que moneda queres convertirla (dolar o euro)").toLowerCase()
}while ((isNaN(num1)) || (moneda != "dolar") && (moneda != "euro"))

switch(moneda) {
    case "dolar":
        alert(multiplicacion(num1,dolar))
    break

    case "euro":
        alert(multiplicacion(num1,euro))
    break

    default:
        alert("operacion no valida")
    break
}