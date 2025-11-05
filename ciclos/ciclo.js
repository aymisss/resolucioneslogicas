/**
 * Función 1: devuelve un valor
 * Calcula la puntuación final al multiplicar el total de aciertos por el valor de cada uno
 * @param {number} aciertos - El número de respuestas correctas
 * @param {number} valorPorAcierto - Valor de cada acierto
 * @returns {number} Puntuación final
 */
function calcularPuntuacion(aciertos, valor_Acierto) {
    let puntuacion_final = aciertos * valor_Acierto;
    return puntuacion_final;
}

/**
 * Función 2: Realiza una acción sin devolver un valor
 * Muestra un mensaje en el documento HTML
 * @param {string} nombre_usuario - El nombre de la persona a saludar.
 */
function mostrarSaludo(nombre_usuario) {
    // Busca un elemento en el HTML con el ID 'resultado_saludo'
    const elemento_saludo = document.getElementById('resultado_saludo');

    // Cambia el contenido de ese elemento
    elemento_saludo.textContent = "¡Hola, " + nombre_usuario + "! Bienvenido al curso.";
}