//funcion constructura
function Producto(id, nombre, precio, stock) {
  this.id = id;
  this.nombre = nombre;
  this.precio = parseFloat(precio);
  this.stock = stock;
  //metodo
  this.descuentoEnEfectivo = function () {
    this.precio = this.precio * 0.2;
  };
}

//se instancian los objetos nuevos

const producto1 = new Producto(8745, "crema limpiadora", 123, false);
console.log(producto1);
const producto2 = new Producto(8746, "envase retornable", 130, true);
console.log(producto2);
const producto3 = new Producto(8747, "mascarilla", 140, true);
console.log(producto3);

//funcion iteradora sobre un objeto

function hayStock(obj) {
  while (obj.nombre !== "" && obj.id < 8748) {
    for (const prop in obj) {
      if (obj.stock === true) {
        return "en stock";
      } else {
        return "sin stock";
      }
    }
  }
}
console.log(hayStock(producto1));
