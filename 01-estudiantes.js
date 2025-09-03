// Ejercicio 1: Gestión de estudiantes (Paradigma Funcional)

const students = [
  { id: 1, name: "Ana", age: 20, grade: 85, course: "JavaScript" },
  { id: 2, name: "Carlos", age: 22, grade: 92, course: "Python" },
  { id: 3, name: "María", age: 19, grade: 78, course: "JavaScript" },
  { id: 4, name: "Luis", age: 21, grade: 88, course: "Java" },
  { id: 5, name: "Sofia", age: 20, grade: 95, course: "JavaScript" }
];

// Encuentra todos los estudiantes de JavaScript con nota mayor a 80
function jsStudentsWithHighGrade(students) {
  return students.filter(
    student => student.course === "JavaScript" && student.grade > 80
  );
}

// Calcula el promedio de notas de todos los estudiantes
function averageGrade(students) {
  const total = students.reduce((acc, student) => acc + student.grade, 0);
  return total / students.length;
}

// Obtén un array con solo los nombres de estudiantes mayores de 20 años
function namesOfStudentsOlderThan20(students) {
  return students
    .filter(student => student.age > 20)
    .map(student => student.name);
}

// Encuentra el estudiante con la nota más alta
function studentWithHighestGrade(students) {
  return students.reduce((topStudent, current) =>
    current.grade > topStudent.grade ? current : topStudent
  );
}

// Exportar funciones para pruebas o uso externo
module.exports = {
  students,
  jsStudentsWithHighGrade,
  averageGrade,
  namesOfStudentsOlderThan20,
  studentWithHighestGrade
};

