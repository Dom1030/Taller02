// Ejercicio 4: Filtros avanzados (Paradigma Funcional)

const products = [
  { id: 1, name: "Laptop", price: 999, category: "Electronics", brand: "HP" },
  { id: 2, name: "Mouse", price: 25, category: "Electronics", brand: "Logitech" },
  { id: 3, name: "Desk", price: 200, category: "Furniture", brand: "IKEA" },
  { id: 4, name: "Chair", price: 150, category: "Furniture", brand: "IKEA" },
  { id: 5, name: "Keyboard", price: 80, category: "Electronics", brand: "Corsair" }
];

// Filtra productos por rango de precio (min, max)
function filterByPriceRange(products, min, max) {
  return products.filter(product => product.price >= min && product.price <= max);
}

// Agrupa productos por categoría
function groupByCategory(products) {
  return products.reduce((groups, product) => {
    if (!groups[product.category]) {
      groups[product.category] = [];
    }
    groups[product.category].push(product);
    return groups;
  }, {});
}

// Encuentra productos de una marca específica
function findByBrand(products, brand) {
  return products.filter(product => product.brand.toLowerCase() === brand.toLowerCase());
}

// Calcula estadísticas por categoría (promedio, total, cantidad)
function statsByCategory(products) {
  const grouped = groupByCategory(products);
  const stats = {};
  for (const category in grouped) {
    const items = grouped[category];
    const total = items.reduce((sum, p) => sum + p.price, 0);
    const average = total / items.length;
    stats[category] = {
      totalPrice: total,
      averagePrice: average,
      count: items.length
    };
  }
  return stats;
}

module.exports = {
  products,
  filterByPriceRange,
  groupByCategory,
  findByBrand,
  statsByCategory
};

