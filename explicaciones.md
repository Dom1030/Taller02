# Explicaciones Técnicas y Prácticas

## ¿Por qué módulos separados?
Para facilitar mantenimiento, extensión y reutilización, cada módulo tiene una responsabilidad concreta. Así el código es más claro y menos propenso a errores.

## Validaciones
Se validan los datos antes de agregarlos para evitar inconsistencias y errores inesperados en la aplicación.

## Filtrado
El filtrado permite obtener solo la información relevante, por ejemplo, estudiantes de un curso concreto o productos de determinada categoría.

## Transformación
JSON es útil para guardar y compartir datos entre sistemas. Por eso se incluyen funciones para convertir entre objetos y JSON.

## Pruebas
Con `test.js` puedes verificar que todo funcione correctamente antes de integrar cambios.

