// Ejercicio 2: Calculadora de productos (Paradigma Orientado a Objetos)

class Product {
  constructor(id, name, price, category, stock) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
    this.stock = stock;
  }

  updateStock(amount) {
    this.stock += amount;
  }

  calculateDiscount(discountPercent) {
    return this.price * (1 - discountPercent / 100);
  }

  getInfo() {
    return `Producto: ${this.name} | Precio: $${this.price.toFixed(
      2
    )} | Categoría: ${this.category} | Stock: ${this.stock}`;
  }

  static getTotalValue(products) {
    return products.reduce((total, product) => total + product.price * product.stock, 0);
  }
}

// Crear 5 productos diferentes
const products = [
  new Product(1, "Laptop", 999, "Electronics", 10),
  new Product(2, "Mouse", 25, "Electronics", 50),
  new Product(3, "Desk", 200, "Furniture", 5),
  new Product(4, "Chair", 150, "Furniture", 20),
  new Product(5, "Keyboard", 80, "Electronics", 15)
];

// Método para aplicar descuento por categoría
function applyDiscountByCategory(products, category, discountPercent) {
  products.forEach(product => {
    if (product.category === category) {
      product.price = product.calculateDiscount(discountPercent);
    }
  });
}

module.exports = {
  Product,
  products,
  applyDiscountByCategory
};

