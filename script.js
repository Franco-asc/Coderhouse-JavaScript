//Segunda Entrge Proyecto Final

//Creamos un clas para la generacion de objetos
class Articulo {
    constructor (producto, precio, stock) {
        this.producto = producto;
        this.precio = precio;
        this.stock = stock;
    }
}

//Declaracion de base de datos
let base_datos = [];

//Consulta y creacion de localStorage
if(localStorage.getItem('base_datos_articulos')){
    base_datos = JSON.parse(localStorage.getItem('base_datos_articulos'))
}
else {
    localStorage.setItem('base_datos_articulos', JSON.stringify(base_datos))
}

//Declaracion de constantes y llamado a nodos del html
const boton = document.getElementById('formulario_carga')
const div_producto = document.getElementById('productos')

//Accion del formulario
boton.addEventListener ('submit', (e) => {  
    
    e.preventDefault()      

    let nombre_art = document.getElementById('nombre_producto').value;
    let precio_art = parseFloat(document.getElementById('precio_producto').value);
    let stock_art = parseInt(document.getElementById('stock_producto').value);

    const producto1 = new Articulo (nombre_art, precio_art, stock_art);

    base_datos.push(producto1)

    localStorage.setItem('base_datos_articulos', JSON.stringify(base_datos))

    div_producto.innerHTML = " "

    formulario_carga.reset()

    base_datos.forEach((producto,indice) => {
        div_producto.innerHTML +=   `<div class="div_articulo" id="producto${indice}">
                                        <h2>${producto.producto}</h2>
                                        <p>${producto.precio}</p>
                                        <p>${producto.stock}</p>
                                        <input type="button" value="Eliminar" id="eliminar">
                                    </div>`
    })

    base_datos.forEach((producto, indice) => {
            document.getElementById(`producto${indice}`).lastElementChild.addEventListener('click', () => {
            document.getElementById(`producto${indice}`).remove()
            base_datos.splice(indice, 1)
            localStorage.setItem('base_datos_articulos', JSON.stringify(base_datos))
            alert(`${producto.producto} eliminado`)
        })
    })
})

//--------------------------------------------------------------------------------------------------------------

