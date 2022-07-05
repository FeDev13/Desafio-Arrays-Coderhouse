const productosLista = document.getElementById("contenedorProductos");
const productoscarrito = document.querySelector(".carrito-main");

const catalogo = [
  {
    Id: 1,
    Nombre: "Mascarilla",
    Foto: "https://i.ibb.co/NNmjrDY/IMG-20210603-221712421.jpg",
    Categoria: "Cosmetica",
    Stock: 13,
    Precio: 400,
  },
  {
    Id: 2,
    Nombre: "Serum lifting tensor",
    Foto: "https://i.ibb.co/f8zHrgf/14-4-2021-10-36-26-p-m.png",
    Categoria: "Materiales",
    Stock: 12,
    Precio: 550,
  },
  {
    Id: 3,
    Nombre: "Serum con Dmae",
    Foto: "https://i.ibb.co/Wgh19g8/14-4-2021-10-04-24-p-m.png",
    Categoria: "Materiales",
    Stock: 29,
    Precio: 800,
  },
  {
    Id: 4,
    Nombre: "Crema de limpieza",
    Foto: "https://i.ibb.co/NZbDX9r/IMG-20210703-163356577.jpg",
    Categoria: "Cosmetica",
    Stock: 5,
    Precio: 700,
  },
  {
    Id: 5,
    Nombre: "Locion hidratante",
    Foto: "https://i.ibb.co/jJbjQ70/IMG-20210703-163402020.jpg",
    Categoria: "Cosmetica",
    Stock: 30,
    Precio: 220,
  },
  {
    Id: 6,
    Nombre: "Crema acne balance",
    Foto: "https://i.ibb.co/9hpYwVP/acne-balance-removebg-preview.png",
    Categoria: "Varios",
    Stock: 10,
    Precio: 480,
  },
];

//elemento HTML dinamico
const nuevaCard = () => {
  let productosPanelVista = "";
  catalogo.forEach((producto) => {
    {
      productosPanelVista += `<div class="col-12 mb-2 col-md-4 col-sm-4 panel">
            <div class="card panel1" style="background-color:#ffe6e6">
            <div class="card-body">
            <img id="fotoProducto" src="${producto.Foto}" class="card-img-top">
            <h5 id="tituloProducto">${producto.Nombre}</h5>
            <p id="descripcionProducto">${producto.Categoria}</p>
            <p id="precioProducto">$${producto.Precio}</p>
            <button data-id="${producto.Id}" id="mybtn" name="btnComprar" class="btn btn-dark">Comprar</button>
            </div>
            </div>
            </div>
            `;
    }
  });
  document.getElementById("contenedorProductos").innerHTML =
    productosPanelVista;
};
nuevaCard();

//evento click para agregar producto
productosLista.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-dark")) {
    agregarProductoCarrito(e.target.parentElement, Number(e.target.dataset.id));
  }
  e.stopPropagation();
});

let carrito = [];

// localStorage
/* document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    mostrarCarrito();
  }
}); */

//se agrega producto al carrito
const agregarProductoCarrito = (producto, id) => {
  console.log(producto);
  let productoEncontrado = catalogo.find((producto) => producto.Id === id);
  let productoCarrito = carrito.find((producto) => producto.Id === id);
  if (carrito.some((producto) => producto.Id === id)) {
    const alertaBoton = document.getElementById("mybtn");
    alertaBoton.addEventListener("click", () => {
      Swal.fire("Producto ya agregado");
    });
  } else if (productoCarrito === undefined) {
    carrito.push({
      Id: id,
      Nombre: producto.querySelector("#tituloProducto").textContent,
      Descripcion: producto.querySelector("#descripcionProducto").textContent,
      Precio: Number(
        producto.querySelector("#precioProducto").textContent.slice(1)
      ),
      Foto: producto.querySelector("#fotoProducto").getAttribute("src"),
      Cantidad: 1,
    });
  } else {
    const prodIndex = carrito.findIndex((prod) => prod.Id === Number(id));
    carrito[prodIndex].Cantidad = carrito[prodIndex].Cantidad + 1;
    carrito[prodIndex].Precio =
      carrito[prodIndex].Precio + productoEncontrado.Precio;
    const alertaBoton = document.getElementById("mybtn");
    alertaBoton.addEventListener("click", () => {
      Swal.fire("Producto agregado");
    });
  }
  console.log(carrito);
};

///muestra el carrito
const mostrarCarrito = () => {
  productoscarrito.classList.toggle("verCarrito");
  updateCarrito();
};

const updateCarrito = () => {
  let productosCarritoVista = "";
  carrito.forEach((producto) => {
    {
      productosCarritoVista += `<div class="col-12 mb-2 col-md-4 col-sm-4 ">
            <div class="card">
            <div class="card-body">
            <img id="fotoProducto" src="${producto.Foto}" class="card-img-top">
            <h5 id="tituloProducto">Nombre: ${producto.Nombre}</h5>
            <p id="descripcionProducto">Descripcion: ${producto.Descripcion}</p>
            <p id="precioProducto">Precio: $${producto.Precio}</p>
            <p id="precioProducto">Cantidad: ${producto.Cantidad}</p>
            <button data-id="${producto.Id}" id="mybtnclear" name="btnBorrar" class="btn btn-danger">Borrar</button>
            </div>
            </div>
            </div>
            `;
    }
    document.querySelector(".carrito-main").innerHTML = productosCarritoVista;
  });
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

productoscarrito.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-danger")) {
    borrarProductoCarrito(Number(e.target.dataset.id));
  }
  e.stopPropagation();
});

const borrarProductoCarrito = (id) => {
  const prodIndex = carrito.findIndex((prod) => prod.Id === Number(id));
  carrito.splice(prodIndex, 1);
  updateCarrito();
};
