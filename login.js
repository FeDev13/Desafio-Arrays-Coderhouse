function entrar() {
  let usuario = document.getElementById("user").value;
  let pass = document.getElementById("password").value;
  console.log(usuario, pass);

  usuario === "fede" && pass === "222"
    ? Swal.fire({
        icon: "success",
        title: "Hola!",
        text: "Bienvenido de vuelta Usuario!",
        footer: '<a href="">Solucionar el problema?</a>',
      })(
        setTimeout(() => {
          window.location.href = "index.html";
        }, 2000)
      )
    : Swal.fire({
        icon: "error",
        title: "Error",
        text: "Los datos ingresados son incorrectos!",
        footer: '<a href="">Solucionar el problema?</a>',
      });
}
