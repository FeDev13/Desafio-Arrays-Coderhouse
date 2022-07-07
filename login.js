function entrar() {
  let usuario = document.getElementById("user").value;
  let pass = document.getElementById("password").value;
  console.log(usuario, pass);

  usuario === "fede" && pass === "222"
    ? (window.location.href = "index.html")
    : Swal.fire({
        icon: "error",
        title: "Error",
        text: "Los datos ingresados son incorrectos!",
        footer: '<a href="">Solucionar el problema</a>',
      });
}
