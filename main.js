//array
const catalogo = [
  { id: 200, nombre: "mascarilla", categoria: "cosmetica" },
  { id: 201, nombre: "pinza", categoria: "materiales" },
  { id: 202, nombre: "envase", categoria: "materiales" },
  { id: 203, nombre: "crema", categoria: "cosmetica" },
  { id: 204, nombre: "locion", categoria: "cosmetica" },
  { id: 205, nombre: "bolsa", categoria: "varios" },
];
const contenedor = document.querySelector("#contenedor");

// seleccion de boton
const addButton = document.getElementById("addButton");

// evento al hacer click
addButton.addEventListener("click", buscador);

//Funcion
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
