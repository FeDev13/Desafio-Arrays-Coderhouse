let item1 = ["mascarilla", "elemento", 200, "cosmetica"];
let item2 = ["mascarilla", "elemento", 300, "materiales"];
let item3 = ["mascarilla", "elemento", 154, "varios"];
let item4 = ["mascarilla", "elemento", 190, "cosmetica"];

//array
const catalogo = [
  { id: 200, nombre: "mascarilla", categoria: "cosmetica", stock: "true" },
  { id: 201, nombre: "pinza", categoria: "materiales", stock: "true" },
  { id: 202, nombre: "envase", categoria: "materiales", stock: "true" },
  { id: 203, nombre: "crema", categoria: "cosmetica", stock: "false" },
  { id: 204, nombre: "locion", categoria: "cosmetica", stock: "false" },
  { id: 205, nombre: "bolsa", categoria: "varios", stock: "true" },
];
//selectores
const contenedor = document.querySelector("#contenedor");
const tarjetasProductos = document.querySelector(".prodHolder");

// seleccion de boton buscar
const addButton = document.getElementById("addButton");

//seleccion de boton refresh
const refresh = document.getElementsByClassName("bi bi-arrow-clockwise");

// evento al hacer click en buscar
addButton.addEventListener("click", buscador);

//evento al hacer click en refresh

//Funciones
function buscador() {
  let input = document.getElementById("submit").value;
  for (const item of catalogo) {
    if (input === item.nombre) {
      // inserta elemento html si coincide con el input
      let newHtml = `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Mascarilla</h5>
        <p class="card-text">
          Producto animal cruelty free.
        </p>
        <a href="#" class="btn btn-primary">
          Comprar
        </a>
      </div>
    </div>`;
      contenedor.innerHTML += newHtml;
      break;
    } else if (input !== item.nombre) {
      const newDiv = document.createElement("div"); //crea elemento div
      newDiv.classList.add("div-styled"); // estilos css
      const text = document.createTextNode(" no encontrado"); // crea texto dentro del div
      newDiv.appendChild(text); // inserta texto en el div
      document.body.appendChild(newDiv); // inserta div el el DOM */
      break;
    }
  }
}
function crearTarjeta([img, nombre, descripcion, precio, categoria]) {
  let newCard = `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <img src = "${img}">
        <h5 class="card-title">${nombre}</h5>
        <p class="card-text">
          ${descripcion}
        </p>
        <p class = "precio">${precio}</p>
        <p class ="categoria">${categoria}</p>
        <a href="#" class="btn btn-primary">
          Comprar
        </a>
      </div>
    </div>`;
  tarjetasProductos.innerHTML += newCard;
}
crearTarjeta(item1);
crearTarjeta(item2);
crearTarjeta(item3);
crearTarjeta(item4);
crearTarjeta(item1);
crearTarjeta(item2);
