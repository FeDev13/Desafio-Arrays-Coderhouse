const checkForm = document.getElementById("cart-item");

/* const renderForm = () => {
  checkForm.innerText = "";
  Object.keys(localStorage).forEach((key) => {
    let { Id, Nombre, Foto, Categoria, Stock, Precio } = key;
    let nuevoDiv = document.createElement("div");
    nuevoDiv.classList.add("cart-item");
    nuevoDiv.innerHTML = `<div class="cart-item">
              <p>${key[1]}</p>
           </div>
              `;
    checkForm.appendChild(nuevoDiv);
  });
};
renderForm(); */

const recorrerLocalStorage = () => {
  for (let index = 0; index < localStorage.length; index++) {
    const element = localStorage.key(index);
    const retrieve = JSON.parse(localStorage.getItem(element));
    let { Id, Nombre, Foto, Categoria, Stock, Precio } = retrieve;
    let nuevoDiv = document.createElement("div");
    nuevoDiv.classList.add("cart-item");
    nuevoDiv.innerHTML = `<div class="cart-item">
              <p>${Nombre}</p>
           </div>
              `;
    checkForm.appendChild(nuevoDiv);
  }
};
recorrerLocalStorage();
/* Object.keys(localStorage).forEach((key) => {
  let nuevoDiv = document.createElement("div");
  nuevoDiv.classList.add("cart-item");
  nuevoDiv.innerHTML = `<div class="cart-item">
              <p>${key.Nombre}</p>
           </div>
              `;
  checkForm.appendChild(nuevoDiv);
}); */

/* for (var i = 0; i < localStorage.length; i++) {
  alert(localStorage.getItem(localStorage.key(i)));
}
 */
