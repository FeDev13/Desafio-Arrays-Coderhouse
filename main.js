const productosLista = document.getElementById("contenedorProductos");
const productoscarrito = document.querySelector(".carrito-main");
const sumarCarrito = document.getElementById("carritonav");

const traerCatalogo = async () => {
  let respuesta = await fetch("./catalogo2.json");
  return respuesta.json();
};

const renderCards = async () => {
  let productos = await traerCatalogo();
  let productosPanelVista = "";
  productos.array.forEach((producto) => {
    let { Id, Nombre, Foto, Categoria, Stock, Precio } = producto;
    productosPanelVista += `<div class="col-12 mb-2 col-md-4 col-sm-4 panel">
            <div class="card panel1" style="background-color:#ffe6e6">
            <div class="card-body">
            <img id="fotoProducto" src="${Foto}" class="card-img-top">
            <h5 id="tituloProducto">${Nombre}</h5>
            <p id="descripcionProducto">${Categoria}</p>
            <p id="precioProducto">$${Precio}</p>
            <button data-id="${Id}" id="mybtn" name="btnComprar" class="btn btn-dark">Comprar</button>
            </div>
            </div>
            </div>
            `;
  });
  productosLista.innerHTML = productosPanelVista;
};
renderCards();

/* //elemento HTML dinamico
const nuevaCard = () => {
  let productosPanelVista = "";
  catalogo.forEach((producto) => {
    let { Id, Nombre, Foto, Categoria, Stock, Precio } = producto;
    {
      productosPanelVista += `<div class="col-12 mb-2 col-md-4 col-sm-4 panel">
            <div class="card panel1" style="background-color:#ffe6e6">
            <div class="card-body">
            <img id="fotoProducto" src="${Foto}" class="card-img-top">
            <h5 id="tituloProducto">${Nombre}</h5>
            <p id="descripcionProducto">${Categoria}</p>
            <p id="precioProducto">$${Precio}</p>
            <button data-id="${Id}" id="mybtn" name="btnComprar" class="btn btn-dark">Comprar</button>
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
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    mostrarCarrito();
  }
});

//se agrega producto al carrito
const agregarProductoCarrito = (producto, id) => {
  console.log(producto);
  let productoEncontrado = catalogo.find((producto) => producto.Id === id);
  let productoCarrito = carrito.find((producto) => producto.Id === id);
  if (carrito.some((producto) => producto.Id === id)) {
    const alertaBoton = document.getElementById("mybtn");
    alertaBoton.addEventListener("click", () => {
      Toastify({
        text: "Producto agregado",
        className: "info",
        style: {
          background: "linear-gradient(#ff3333)",
        },
      }).showToast();
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

function nuevoDiv() {
  let sumarCarrito = document.getElementById("carritonav");
  let newDiv = document.createElement("div");
  newDiv.classList.add("div-styled");
  newDiv.innerHTML = `<h5>Productos en carrito</h3>
  <div class="carrito-main">
    <!--aca van elementos html dinamicos-->
    
  </div>
  <div class="subtotal">subtotal: $0.00</div>
  <div class="checkout">Checkout</div>
  <div><button class = "ver-carrito" onclick="mostrarCarrito()">ver Carrito</button>  </div>
</div>
</div> 
 `;
  let headers = document.getElementsByTagName("header")[0].appendChild(newDiv);
}
 */
