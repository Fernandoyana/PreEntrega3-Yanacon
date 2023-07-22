
let botones = document.querySelectorAll(".products button");

for (const boton of botones) {
  boton.addEventListener("click", function() {

    let nombre = this.parentElement.querySelector("h2").textContent;
    let precio = this.parentElement.querySelector("h3").textContent;

    const producto = {
      Nombre: nombre,
      Precio: precio
    };

    let productoJSON = JSON.stringify(producto);

    localStorage.setItem("Producto - ID: " + Date.now(), (productoJSON));
  });
}