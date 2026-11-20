let titulo = document.querySelector("#titulo-resultados");
let mensaje = document.querySelector("#mensaje-sin-resultados");
let seccionResultados = document.querySelector("#lista-resultados");

if (titulo != null) {
    let parametros = new URLSearchParams(window.location.search);
    let busqueda = parametros.get("buscar");

titulo.innerHTML = `Resultados de búsqueda para: ${busqueda}`;

fetch(`https://dummyjson.com/products/search?q=${busqueda}`)

    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let productos = data.products;

        if (productos.length === 0) {
            mensaje.innerHTML = `No hay resultados para el término: ${busqueda}`;
        } else {
            for (let i = 0; i < productos.length; i++) {
                let producto = productos[i];

               seccionResultados.innerHTML += `
                    <article class="productos">
                        <img src="${producto.images[0]}" alt="${producto.title}">
                        <h3>${producto.title}</h3>
                        <p>${producto.description}</p>
                        <p class="precio">$${producto.price}</p>
                        <a class="ver-detalle" href="./product.html?id=${producto.id}">Ver detalle</a>
                    </article> `;
            }
        }
    })

    .catch(function(error) {
        console.log("El error es: " + error);
    });
}

let formulario = document.querySelector("#form-busqueda");
let buscador = document.querySelector("#busqueda");
let errorBusqueda = document.querySelector("#error-busqueda");

if (formulario != null) {
    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        if (buscador.value == "") {
            errorBusqueda.innerHTML = "El campo de búsqueda no puede estar vacío";
        } else if (buscador.value.length < 3) {
            errorBusqueda.innerHTML = "La búsqueda debe tener al menos 3 caracteres";
        } else {
            errorBusqueda.innerHTML = "";
            this.submit();
        }
    });
}