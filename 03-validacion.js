// Ejercicio 3: Validación de datos (Paradigma Procedural)

// Verifica formato de email
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Verifica fortaleza de contraseña
// Requisitos: mínimo 8 caracteres, al menos una mayúscula, una minúscula, un número y un carácter especial
function validatePassword(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  return regex.test(password);
}

// Verifica edad válida (entre 0 y 120)
function validateAge(age) {
  return Number.isInteger(age) && age > 0 && age <= 120;
}

// Valida objeto producto completo
function validateProduct(product) {
  if (
    typeof product !== "object" ||
    product === null ||
    typeof product.id !== "number" ||
    typeof product.name !== "string" ||
    typeof product.price !== "number" ||
    typeof product.category !== "string" ||
    typeof product.stock !== "number"
  ) {
    return false;
  }
  return product.price >= 0 && product.stock >= 0;
}

module.exports = {
  validateEmail,
  validatePassword,
  validateAge,
  validateProduct
};

