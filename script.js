let nombre, apellido, edad, categoria, repetirIngreso;

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

do{
    nombre = prompt ("Ingresa tu nombre");
    console.log(nombre)

    apellido = prompt ("Ingresa tu Apellido, Porfavor");
    console.log(apellido)

    do {
        edad = parseFloat(prompt("Hola " + nombre + " ! Cuántos años tenés?"));
        console.log(edad)
    }while (isNaN (edad)) ;

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

    repetirIngreso = prompt ("Desea inscribir a alguien más? Si/No").toLocaleLowerCase()
    
} while (repetirIngreso == "si");
alert("Gracias por visitar nuestra pagina y facilitar nuestro trabajo!!!");
