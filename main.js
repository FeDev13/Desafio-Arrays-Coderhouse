const productosLista = document.getElementById("contenedorProductos");
const productoscarrito = document.querySelector(".carrito-main");
const sumarCarrito = document.getElementById("carritonav");
const renderDom = document.getElementById("div-vacio");
const avisoDeCompra = document.getElementById("botonFinalizar");

const traerCatalogo = async () => {
  let respuesta = await fetch("./catalogo.json");
  return respuesta.json();
};

let carrito = [];

const renderCards = async () => {
  let productos = await traerCatalogo();
  let productosPanelVista = "";
  productos.forEach((producto) => {
    let { Id, Nombre, Foto, Categoria, Stock, Precio } = producto;
    productosPanelVista += `<div class="col-12 mb-2 col-md-4 col-sm-4 panel">
            <div class="card panel1" style="background-color:#BF8085">
            <div class="card-body">
            <img id="fotoProducto" src="${Foto}" class="card-img-top">
            <h5 id="tituloProducto">${Nombre}</h5>
            <p id="descripcionProducto">${Categoria}</p>
            <p id="precioProducto">$${Precio}</p>
            <button data-id="${Id}" id="mybtn" name="btnComprar" class="btn btn-dark">Agregar al carrito</button>
            </div>
            </div>
            </div>
            `;
  });
  productosLista.innerHTML = productosPanelVista;
};
renderCards();

//evento click para agregar producto
productosLista.addEventListener("click", (e) => {
  if (e.target.id === "mybtn") {
    guardarDatos(e.target.dataset.id);
  }
});

const guardarDatos = async (id) => {
  let productos = await traerCatalogo();
  let productoNuevo = productos.find(
    (producto) => producto.Id === parseInt(id)
  );
  let productoEnStorage = JSON.parse(localStorage.getItem(id));
  if (productoEnStorage === null) {
    localStorage.setItem(id, JSON.stringify({ ...productoNuevo, Cantidad: 1 }));
    recorrerLocalStorage();
  } else {
    let productoExiste = JSON.parse(localStorage.getItem(id));
    productoExiste.Cantidad = productoExiste.Cantidad + 1;
    productoExiste.Precio = productoExiste.Precio + productoNuevo.Precio;
    localStorage.setItem(id, JSON.stringify(productoExiste));
    recorrerLocalStorage();
  }
};

const recorrerLocalStorage = () => {
  carrito.length = 0;
  for (let index = 0; index < localStorage.length; index++) {
    const element = localStorage.key(index);
    carrito.push(JSON.parse(localStorage.getItem(element)));
  }
  renderCart();
  console.log(carrito);
};

const renderCart = () => {
  if (carrito.length > 0) {
    carrito.forEach((producto) => {
      let { Id, Nombre, Foto, Categoria, Stock, Precio } = producto;
      let nuevoDiv = document.createElement("div");
      nuevoDiv.classList.add("cart-item");
      nuevoDiv.innerHTML = `<div class="cart-item">
      <img src="${Foto}" class = "img-fluid"> 
      <div class="details">
          <h5>${Nombre}</h3>
          <button class="btn btn-danger">Quitar producto</button>
      </div>
      <div class="cancel"><i class="fas fa-window-close"></i></div>
   </div>
      `;
      renderDom.appendChild(nuevoDiv);
    });
  } else {
    renderDom.innerHTML += `<div id ="carrito-vacio" class= "card">
                <div class="card-body">
                <h5 id="tituloProducto">${Nombre}</h5>
                <p class = "card-text"> No hay productos</p> 
                </div>
                `;
  }
};

//pop up avisando la compra realizada
avisoDeCompra.addEventListener("click", () => {
  Swal.fire({
    icon: "success",
    title: "La operacion ha sido realizada!",
    text: "Gracias por su compra!",
  });
});

/*
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
