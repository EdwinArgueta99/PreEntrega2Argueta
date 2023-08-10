// Función para crear un personaje
function crearPersonaje() {
  let personaje = {};
  
  personaje.nombre = prompt("Ingresa el nombre del personaje:");
  personaje.edad = parseInt(prompt("Ingresa la edad del personaje:"));
  personaje.sexo = prompt("Ingresa el sexo del personaje (masculino/femenino):");

  const armasDisponibles = ["navaja", "cuchillo", "martillo"];
  let armaElegida = prompt("Selecciona un arma: " + armasDisponibles.join(", ") +" si la oppcion es invalida se hara al azar");
  if (armasDisponibles.includes(armaElegida)) {
    personaje.arma = armaElegida;
  } else {
    alert("Arma no válida. La seleccion sera al azar");
    let armaAzar=Math.floor(Math.random()*armasDisponibles.length);
    personaje.arma=armasDisponibles[armaAzar];
    alert("su arma elegida es "+ personaje.arma);
  }
  
  const habilidadesDisponibles = ["suerte", "fuerza", "rapidez"];
  let habilidadElegida = prompt("Selecciona una habilidad: " + habilidadesDisponibles.join(", ")+" si la oppcion es invalida se hara al azar");
  if (habilidadesDisponibles.includes(habilidadElegida)) {
    personaje.habilidad = habilidadElegida;
  } else {
   alert ("Habilidad no disponible, sera elegida al azar");
    let habilidadAzar=Math.floor(Math.random()*habilidadesDisponibles.length);
    personaje.habilidad=habilidadesDisponibles[habilidadAzar];
    alert("Su habilidad es "+ personaje.habilidad);
  }
  return personaje;
}

let cantidad= prompt("cuantos personajes desea crear?");

let personajesCreados = [];

for (let i=0; i< cantidad;i++ ){
  let nuevoPersonaje=crearPersonaje();
  personajesCreados.push(nuevoPersonaje);
}


for (let i = 0; i < personajesCreados.length; i++) {
  let personaje = personajesCreados[i];
  alert("Detalles del personaje " + (i + 1) + ":\n\n" +
  "Nombre: " + personaje.nombre + "\n" +
  "Edad: " + personaje.edad + "\n" +
  "Sexo: " + personaje.sexo + "\n" +
  "Arma: " + personaje.arma + "\n" +
  "Habilidad: " + personaje.habilidad);
}

// Comienza el filtro
let personajefiltrado = [];
let clave = prompt("Ingrese el número de personaje que quiere visualizar ej, 1, 2, 3 ");


let indicesArray = clave.split(",").map(function(index) {
  let numero = parseInt(index.trim()) - 1;
  return numero;
});

for (let i = 0; i < indicesArray.length; i++) {
  let index = indicesArray[i];
  if (index >= 0 && index < personajesCreados.length) {
    personajefiltrado.push(personajesCreados[index]);
  }
}

// Mostrar el personaje filtrado
for (let i = 0; i < personajefiltrado.length; i++) {
  let personaje = personajefiltrado[i];
  alert("Detalles del personaje " + (i + 1) + ":\n\n" +
  "Nombre: " + personaje.nombre + "\n" +
  "Edad: " + personaje.edad + "\n" +
  "Sexo: " + personaje.sexo + "\n" +
  "Arma: " + personaje.arma + "\n" +
  "Habilidad: " + personaje.habilidad);
}
  
alert("fin del programa");







