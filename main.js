//funcion constructura
function Producto(id, nombre, precio, stock) {
  this.id = id;
  this.nombre = nombre;
  this.precio = parseFloat(precio);
  this.stock = stock;
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
  let descuentoEnEfectivo = obj.precio * 0.2;
  while (obj.nombre !== "" && obj.id < 8748) {
    for (const prop in obj) {
      if (
        obj.nombre === "crema limpiadora" ||
        obj.nombre === "envase retornable"
      ) {
        return descuentoEnEfectivo;
      } else {
        return "precio normal";
      }
    }
  }
}
console.log(hayStock(producto1));
