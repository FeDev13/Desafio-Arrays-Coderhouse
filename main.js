const productosLista = document.getElementById("contenedorProductos");
const productoscarrito = document.getElementById("carrito");

const catalogo = [
  {
    Id: 1,
    Nombre: "Mascarilla",
    Foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0doS9lRm40raQSBnQLQSHcCxHXXdT2cR1Ag&usqp=CAU",
    Categoria: "cosmetica",
    Stock: 13,
    Precio: 400,
  },
  {
    Id: 2,
    Nombre: "Pinza",
    Foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS--Cr7SOGN9cAgBF_H2treVeXUv163cEheVA&usqp=CAU",
    Categoria: "materiales",
    Stock: 12,
    Precio: 550,
  },
  {
    Id: 3,
    Nombre: "Envase",
    Foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkxznW_aCwLPtWdnuVJuvE7igkbwGP_vNchg&usqp=CAU",
    Categoria: "materiales",
    Stock: 29,
    Precio: 800,
  },
  {
    Id: 4,
    Nombre: "Crema",
    Foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL2viv36rwbueswmDIR58rw1oJd02KfzbuUA&usqp=CAU",
    Categoria: "cosmetica",
    Stock: 5,
    Precio: 700,
  },
  {
    Id: 5,
    Nombre: "Locion",
    Foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlXgfPWFAyWlxPOaL-mZkXpucu3UNr-5D4Cg&usqp=CAU",
    Categoria: "cosmetica",
    Stock: 30,
    Precio: 220,
  },
  {
    Id: 6,
    Foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNQjoY5zC0qJhQU4ZMieEp-_2G84d5i9AT8w&usqp=CAU",
    Nombre: "Bolsa",
    Categoria: "varios",
    Stock: 10,
    Precio: 480,
  },
];

//elemento HTML dinamico
const nuevoarray = catalogo.find((producto) => producto.Id === 1);
console.log(nuevoarray);
const renderCard = () => {
  let productosPanelVista = "";
  catalogo.forEach((producto) => {
    {
      productosPanelVista += `<div class="col-12 mb-2 col-md-4 col-sm-4 panel">
            <div class="card" style="background-color:pink">
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
renderCard();

//evento click para agregar producto
productosLista.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-dark")) {
    agregarProductoCarrito(e.target.parentElement, Number(e.target.dataset.id));
  }
  e.stopPropagation();
});

let carrito = [];

// localStorage
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    renderCarrito();
  }
});

//se agrega producto al carrito
const agregarProductoCarrito = (producto, id) => {
  console.log(producto);
  let productoEncontrado = catalogo.find((producto) => producto.Id === id);
  let productoCarrito = carrito.find((producto) => producto.Id === id);
  if (productoCarrito === undefined) {
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

    const alertaBoton = document.getElementById("mybtn");
    alertaBoton.addEventListener("click", () => {
      Swal.fire("Producto agregado");
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

//muestra el carrito
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
    document.getElementById("carrito").innerHTML = productosCarritoVista;
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
  renderCarrito();
};
