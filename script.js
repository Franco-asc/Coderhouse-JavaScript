let usuario = prompt("Ingrese su Nombre").toLowerCase()
alert ("Bienvenida/o " + usuario + " a VillaWolf BarberShop")

let maquina = Number((prompt('Indique con el número correspondiente el producto que desea comprar: \n 1- Cortadora de Pelo Magic Clip Coodless: $54000 \n 2- Cortadora de Pelo Magic Clip 5 Star: $35000  \n 3- Cortadora de Pelo Super Taper: $30000  \n 4- Cortadora de Pelo Senior 5 Star Cordless: $62000 \n 5- Salir')))
let maquinaSeleccionada

function carrito(producto, precio){
    maquina = maquinaSeleccionada
    alert(usuario + " usted a seleccionado: " + producto )

}

switch (maquina) {
    case 1:
        carrito("Cortadora de Pelo Magic Clip Coodless")
            break

    case 2:
        carrito("Cortadora de Pelo Magic Clip 5 Star")
            break

    case 3:
        carrito("Cortadora de Pelo Super Taper")
            break

    case 4:
        carrito("Cortadora de Pelo Senior 5 Star Cordless")
            break
        
    default:
        alert("Gracias por su visita !")
            break    
}

compra = prompt("Desea completar su compra de la maquina Si/No").toLowerCase()

    if (compra === 'si'){
        alert('Gracias por su compra!')
    }

    else {
        alert('Gracias por su visita!')
    }