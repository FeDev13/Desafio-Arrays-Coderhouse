//array
const catalogo = [
  {
    id: 200,
    nombre: "mascarilla",
    categoria: "cosmetica",
    stock: "true",
    precio: 400,
  },
  {
    id: 201,
    nombre: "pinza",
    categoria: "materiales",
    stock: "true",
    precio: 550,
  },
  {
    id: 202,
    nombre: "envase",
    categoria: "materiales",
    stock: "true",
    precio: 800,
  },
  {
    id: 203,
    nombre: "crema",
    categoria: "cosmetica",
    stock: "false",
    precio: 700,
  },
  {
    id: 204,
    nombre: "locion",
    categoria: "cosmetica",
    stock: "false",
    precio: 220,
  },
  { id: 205, nombre: "bolsa", categoria: "varios", stock: "true", precio: 480 },
];
const carritoVacio = [];

const contenedor = document.getElementById("contenedorProductos");
const carritoContainer = document.getElementById("carrito-contenedor");

catalogo.forEach((producto) => {
  const div = document.createElement("div");
  div.classList.add("productoCard");
  div.innerHTML = `
  <h3>${producto.nombre}</h3>
  <p>${producto.categoria}</p>
  <p>${producto.stock}</p>
  <p>Precio: $ ${producto.precio}</p>
  <button id="${producto.id}" class="botonAgregar"> Agregar <i class="fas fa shopping-cart"></button>
  `;
  contenedor.appendChild(div);

  const boton = document.getElementById("${producto.id}");

  boton.addEventListener("click", () => {
    agregarAlCarrito(producto.id);
  });
});

const agregarAlCarrito = (productoId) => {
  const item = catalogo.find((prod) => prod.id === productoId);
  carritoVacio.push(item);
  console.log(carritoVacio);
};
