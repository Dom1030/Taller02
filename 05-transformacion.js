// Ejercicio 5: Transformación de datos (Paradigma Funcional)

const products = [
  { id: 1, name: "Laptop", price: 999, category: "Electronics", brand: "HP", stock: 10 },
  { id: 2, name: "Mouse", price: 25, category: "Electronics", brand: "Logitech", stock: 50 },
  { id: 3, name: "Desk", price: 200, category: "Furniture", brand: "IKEA", stock: 5 },
  { id: 4, name: "Chair", price: 150, category: "Furniture", brand: "IKEA", stock: 20 },
  { id: 5, name: "Keyboard", price: 80, category: "Electronics", brand: "Corsair", stock: 15 }
];

// Agrega campo "priceWithTax" (19% IVA)
function addPriceWithTax(products) {
  return products.map(product => ({
    ...product,
    priceWithTax: +(product.price * 1.19).toFixed(2)
  }));
}

// Agrega campo "status" basado en stock (High, Medium, Low)
function addStockStatus(products) {
  return products.map(product => {
    let status;
    if (product.stock > 20) status = "High";
    else if (product.stock >= 10) status = "Medium";
    else status = "Low";
    return { ...product, status };
  });
}

// Crea un resumen de inventario por categoría
function inventorySummary(products) {
  return products.reduce((summary, product) => {
    if (!summary[product.category]) {
      summary[product.category] = {
        totalStock: 0,
        totalValue: 0
      };
    }
    summary[product.category].totalStock += product.stock;
    summary[product.category].totalValue += product.price * product.stock;
    return summary;
  }, {});
}

module.exports = {
  products,
  addPriceWithTax,
  addStockStatus,
  inventorySummary
};

