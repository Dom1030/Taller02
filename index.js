// index.js
// Punto de entrada: ejemplos de uso de los módulos y lógica principal.
// Autor: Dom1030

const { agregarEstudiante, listarEstudiantes } = require('./01-estudiantes');
const { crearProducto, listarProductos } = require('./02-productos');
const { validarNombre, validarEdad } = require('./03-validacion');
const { filtrarPorCategoria, filtrarPorCurso } = require('./04-filtros');
const { aJSON } = require('./05-transformacion');

// Ejemplo: agregar y mostrar estudiantes
try {
    if (validarNombre('Juan Perez') && validarEdad(21)) {
        agregarEstudiante('Juan Perez', 21, 'Matemáticas');
    }
    agregarEstudiante('Ana Gómez', 19, 'Física');
    console.log('Listado de estudiantes:', listarEstudiantes());
} catch (e) {
    console.error('Error al agregar estudiante:', e.message);
}

// Ejemplo: crear y mostrar productos
try {
    crearProducto('Cuaderno', 2.5, 'Papelería');
    crearProducto('Calculadora', 15, 'Electrónica');
    console.log('Listado de productos:', listarProductos());
} catch (e) {
    console.error('Error al crear producto:', e.message);
}

// Filtrar estudiantes por curso
console.log('Estudiantes de Física:', filtrarPorCurso(listarEstudiantes(), 'Física'));

// Filtrar productos por categoría
console.log('Productos de Electrónica:', filtrarPorCategoria(listarProductos(), 'Electrónica'));

// Transformar estudiantes a JSON
console.log('Estudiantes en JSON:', aJSON(listarEstudiantes()));