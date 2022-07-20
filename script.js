//Segunda Entrge Proyecto Final

//Class para la generacion de objetos
class Articulo {
    constructor (producto, precio, stock) {
        this.producto = producto;
        this.precio = precio;
        this.stock = stock;
    }
}

let baseDatos = [];

//Consulta y creacion de localStorage
if(localStorage.getItem('base_datos_articulos')){
    baseDatos = JSON.parse(localStorage.getItem('base_datos_articulos'))
}
else {
    localStorage.setItem('base_datos_articulos', JSON.stringify(baseDatos))
}

//constantes y llamado a nodos 
const boton = document.getElementById('formulario_carga')
const div_producto = document.getElementById('productos')

//Formulario
boton.addEventListener ('submit', (e) => {  
    
    e.preventDefault()      

    let nombre_art = document.getElementById('nombre_producto').value;
    let precio_art = parseFloat(document.getElementById('precio_producto').value);
    let stock_art = parseInt(document.getElementById('stock_producto').value);

    const producto1 = new Articulo (nombre_art, precio_art, stock_art);

    baseDatos.push(producto1)

    localStorage.setItem('base_datos_articulos', JSON.stringify(baseDatos))

    div_producto.innerHTML = " "

    formulario_carga.reset()

    baseDatos.forEach((producto,indice) => {
        div_producto.innerHTML +=   `<div class="div_articulo" id="producto${indice}">
                                        <h2>${producto.producto}</h2>
                                        <p>${producto.precio}</p>
                                        <p>${producto.stock}</p>
                                        <input type="button" value="Eliminar" id="eliminar">
                                    </div>`
    })

    baseDatos.forEach((producto, indice) => {
            document.getElementById(`producto${indice}`).lastElementChild.addEventListener('click', () => {
            document.getElementById(`producto${indice}`).remove()
            baseDatos.splice(indice, 1)
            localStorage.setItem('base_datos_articulos', JSON.stringify(baseDatos))
            alert(`${producto.producto} eliminado`)
        })
    })
})


