// Función para formatear nombres
function formatearNombre(nombreCompleto) {
  // Eliminar espacios al principio y al final
  nombreCompleto = nombreCompleto.trim();

  // Dividir el nombre en palabras individuales
  let nombres = nombreCompleto.split(" ");

  // Procesar cada nombre individualmente
  let nombresFormateados = nombres.map(nombre => {
    // Verificar si el nombre está en mayúsculas
    if (nombre === nombre.toUpperCase()) {
      nombre = nombre.toLowerCase(); 
    }

    // Capitalizar la primera letra y dejar el resto en minúsculas
    let primeraLetra = nombre.charAt(0).toUpperCase(); 
    let resto = nombre.slice(1).toLowerCase();       
    return primeraLetra + resto;                     
  });

  return nombresFormateados.join(" "); 
}

let ejemplo1 = "JUAN perez LOPEZ";
let ejemplo2 = "maria JOSE";
let ejemplo3 = "LUIS miguel fernandez";


console.log(formatearNombre(ejemplo1)); 
console.log(formatearNombre(ejemplo2)); 
console.log(formatearNombre(ejemplo3)); 