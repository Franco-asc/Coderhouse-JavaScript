// ALERTA DE BIENVENIDA 

alert("Bienvenido a la inscripción virtual de Basquet del Club Atlantic Sportmen de Rosario");

// INSCRIPCION 

class alumno {
    constructor(nombre, apellido, edad, categoria) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.categoria = categoria
    }
}
const alumnos = []

const form = document.getElementById("#idForm")
const divAlumnos = document.getElementById('#divAlumnos')

form.addEventListener('submit' , (e) => {
    e.preventDefault()
    let nombre = document.getElementById('idNombre').value
    let apellido = document.getElementById('idApellido').value
    let edad = parseFloat(document.getElementById('idEdad').value) 
    let categoria = document.getElementById('idCategoria').value

    const alumno = new alumno(nombre, apellido, edad, categoria)
    
    alumno.push(alumnos)
    console.log(alumnos)

    form.reset()
})

document.querySelector('#botonAlumnos').addEventListener('click' , () =>{
    alumnos.forEach(alumno => {
        divAlumnos.innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Alumno Inscripto</h5>
                <p class="card-text">${alumno.nombre}</p>
                <p class="card-text">${alumno.apellido}</p>
                <p class="card-text">${alumno.edad}</p>
                <p class="card-text">${alumno.categoria}</p>
                <button class="btn btn-danger">Desincribirse</button>
            </div>
        </div>
        `
    })
})


