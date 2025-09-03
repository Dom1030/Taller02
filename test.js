// test.js
const {
  estudiantes,
  estudiantesJSConNotaAlta,
  promedioNotas,
  nombresMayoresDe20,
  estudianteConNotaMasAlta,
  Product,
  productos,
  validateEmail,
  validatePassword,
  validateAge,
  validateProduct,
  filtrarPorPrecio,
  agruparPorCategoria,
  productosPorMarca,
  estadisticasPorCategoria,
  agregarPriceWithTax,
  agregarStatus,
  resumenInventarioPorCategoria,
} = require("./index");

// EJERCICIO 1 Tests
console.log("Ejercicio 1 Tests:");
console.log("Estudiantes JS con nota > 80:", estudiantesJSConNotaAlta(estudiantes));
console.log("Promedio de notas:", promedioNotas(estudiantes));
console.log("Nombres mayores de 20:", nombresMayoresDe20(estudiantes));
console.log("Estudiante con nota más alta:", estudianteConNotaMasAlta(estudiantes));

// EJERCICIO 2 Tests
console.log("\nEjercicio 2 Tests:");
console.log("Productos iniciales:");
productos.forEach((p) => {
  if (p instanceof Product) {
    console.log(p.getInfo());
  } else {
    // Si es objeto literal (como en ejercicio 4), mostrar info básica
    console.log(`Product: ${p.name} | Category: ${p.category} | Price: $${p.price.toFixed(2)} | Stock: ${p.stock || 0}`);
  }
});

console.log("Total valor inventario:", Product.getTotalValue(productos.filter(p => p instanceof Product)));

if (productos[0] instanceof Product) {
  productos[0].applyCategoryDiscount("Electronics", 10);
  console.log("Producto 1 con descuento aplicado:", productos[0].getInfo());

  productos[0].updateStock(5);
  console.log("Producto 1 stock actualizado:", productos[0].getInfo());
} else {
  console.log("No hay productos de clase Product para pruebas de métodos OOP.");
}

// EJERCICIO 3 Tests
console.log("\nEjercicio 3 Tests:");
console.log("Validar email 'test@example.com':", validateEmail("test@example.com"));
console.log("Validar email 'bademail@com':", validateEmail("bademail@com"));
console.log("Validar password 'Abc123!@#':", validatePassword("Abc123!@#"));
console.log("Validar password 'weakpass':", validatePassword("weakpass"));
console.log("Validar edad 25:", validateAge(25));
console.log("Validar edad -5:", validateAge(-5));
console.log("Validar producto válido:", validateProduct(productos[0]));
console.log("Validar producto inválido:", validateProduct({ id: "x", name: 123 }));

// EJERCICIO 4 Tests
console.log("\nEjercicio 4 Tests:");
console.log("Filtrar productos precio 30 a 900:", filtrarPorPrecio(productos, 30, 900));
console.log("Agrupar por categoría:", agruparPorCategoria(productos));
console.log("Productos marca 'IKEA':", productosPorMarca(productos, "IKEA"));
console.log("Estadísticas por categoría:", estadisticasPorCategoria(productos));

// EJERCICIO 5 Tests
console.log("\nEjercicio 5 Tests:");
const productosConTax = agregarPriceWithTax(productos);
console.log("Productos con priceWithTax:", productosConTax);

const productosConStatus = agregarStatus(productos);
console.log("Productos con status:", productosConStatus);

const resumen = resumenInventarioPorCategoria(productos);
console.log("Resumen inventario por categoría:", resumen);

