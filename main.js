//array
const catalogo = [
  { id: 200, nombre: "mascarilla", categoria: "cosmetica" },
  { id: 201, nombre: "pinza", categoria: "materiales" },
  { id: 202, nombre: "envase", categoria: "materiales" },
  { id: 203, nombre: "crema", categoria: "cosmetica" },
  { id: 204, nombre: "locion", categoria: "cosmetica" },
  { id: 205, nombre: "bolsa", categoria: "varios" },
];
const catalogoVacio = [];

//entrada del usuario
let ingresaCategoria = prompt("categoria del producto");

//metodo filter sobre los objetos del array

const nuevoCatalogo = catalogo.filter(
  (elementos) => elementos.categoria === ingresaCategoria
);
catalogoVacio.push(nuevoCatalogo);
console.log(catalogoVacio);

//funcion optativa usando for in y condicional

function agregarArray(arr) {
  let arrayVacio = [];
  for (let obj in arr) {
    if (arr[obj].id > 203) {
      arrayVacio.push(obj);
    }
  }
  return arrayVacio;
}
console.log(agregarArray(catalogo));
