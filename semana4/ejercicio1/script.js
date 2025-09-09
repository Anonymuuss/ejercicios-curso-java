// Inicializar cochera con 5 espacios libres
let cochera = ["Libre", "Libre", "Libre", "Libre", "Libre"];

// Función para mostrar estado
function mostrarCochera() {
  console.log("Estado actual de la cochera:");
  cochera.forEach((espacio, index) => {
    console.log(`Espacio ${index + 1}: ${espacio}`);
  });
}

// Función para ocupar un espacio
function ocuparEspacio(posicion) {
  if (cochera[posicion] === "Libre") {
    cochera[posicion] = "Ocupado";
    console.log(`Espacio ${posicion + 1} ha sido ocupado.`);
  } else {
    console.log(`Espacio ${posicion + 1} ya está ocupado.`);
  }
}

// Función para liberar un espacio
function liberarEspacio(posicion) {
  if (cochera[posicion] === "Ocupado") {
    cochera[posicion] = "Libre";
    console.log(`Espacio ${posicion + 1} ha sido liberado.`);
  } else {
    console.log(`Espacio ${posicion + 1} ya está libre.`);
  }
}

mostrarCochera();
ocuparEspacio(2); 
liberarEspacio(2); 
mostrarCochera();
