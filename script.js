// VARIABLES

let nombre, apellido, edad, categoria, repetirIngreso;

// ALUMNOS 

class Persona{
    constructor (nombre, apellido, edad, categoria) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.categoria =  categoria;
    }
}

const miembros = [];

alert("Bienvenido a la inscripción virtual de Basquet del Club Atlantic Sportmen de Rosario");

nombre = prompt("Ingresa tu nombre aqui, porfavor!!")

do {
    estado = prompt ("Hola " + nombre + " ya sos parte del Club Atlantic Sportmen de Rosario?").toLowerCase();
}while (estado != "si" && estado != "no");

if (estado == "si") {
    estado = "Miembro activo";
    console.log(estado);
    alert ("Gracias por ser parte del Club Atlantic Sportmen de Rosario!");
} else {
    do {
        ingreso = prompt("No te preocupes " + nombre + " nunca es tarde para disfrutar de un buen basquet y hacer muchos amigos! Te gustaria arrancar a entrenar?").toLowerCase()
    } while (estado != "si" && estado != "no");
    if(ingreso == "si"){
        alert("Perfecto " + nombre + ", Comencemos con tu inscripción!");
        apellido = prompt(nombre + " cuál es tu apellido?");
        
        do{
            edad = parseFloat(prompt(nombre + " ! Cuántos años tenés?"));
            console.log(edad)
        }while (isNaN (edad));

        if (edad < 7 ) {
            categoria="Cebollita"
            console.log(categoria)
        }
        
        else if (edad < 9) {
            categoria = "Escuelita"
            console.log(categoria)
        }
        
        else if (edad < 10) {
            categoria= "Mini"
            console.log(categoria)
        }
        
        else if (edad < 13) {
            categoria = "Sub-13"
            console.log(categoria)
        }

        else if (edad < 15) {
            categoria="Sub-15"
            console.log(categoria)
        }

        else if (edad < 17) {
            categoria="Sub-17"
            console.log(categoria)
        }

        else if (edad < 19) {
            categoria="Sub-19"
            console.log(categoria)
        }

        else if (edad > 20) {
            categoria="Primera"
            console.log(categoria)
        }

        function contacto (nombre, categoria) {
            alert (nombre + " si es que quieres continuar con tu inscripción para unirte a la categoria " + categoria + " acercate al club asi terminamos la inscripcion, te esperamos!!! ")
        }

        contacto(nombre, categoria);

        const persona1 = new Persona(nombre, apellido, edad, categoria);
        console.log (persona1)

        miembros.push(persona1)
        console.table(miembros)

    } else {
        estado = "Visita";
        console.log(estado);
    }
}
alert("Gracias por visitar nuestra pagina wed, que tenga un gran dia!!!");




