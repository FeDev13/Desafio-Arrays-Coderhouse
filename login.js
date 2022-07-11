function entrar() {
  let usuario = document.getElementById("form2Example11").value;
  let pass = document.getElementById("form2Example22").value;
  console.log(usuario, pass);

  usuario === "fede" && pass === "222"
    ? Swal.fire({
        icon: "success",
        title: "Hola!",
        text: "Bienvenido de vuelta Usuario!",
      })(
        setTimeout(() => {
          window.location.href = "index.html";
        }, 2000)
      )
    : Swal.fire({
        icon: "error",
        title: "Error",
        text: "Los datos ingresados son incorrectos!",
        footer: '<a href="">Solucionar el problema</a>',
      });
}
