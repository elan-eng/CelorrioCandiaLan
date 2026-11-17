let titulo = document.querySelector("#titulo-resultados");
let mensaje = document.querySelector("#mensaje-sin-resultados");
let seccionResultados = document.querySelector("#lista-resultados");

// let titulo: Sirve para crear una variable que contenga el elemento HTML con el id "titulo-resultados", en este caso el elemento HTML es un h2 que contiene el titulo de los resultados de búsqueda
// let mensaje: Sirve para crear una variable que contenga el elemento HTML con el id "mensaje-sin-resultados", en este caso el elemento HTML es un p que contiene el mensaje de que no hay resultados de búsqueda
// let seccionResultados: Sirve para crear una variable que contenga el elemento HTML con el id "lista-resultados", en este caso el elemento HTML es un div que contiene los resultados de búsqueda

if (titulo != null) {
    // if (titulo != null): Sirve para verificar si el elemento HTML con el id "titulo-resultados" existe en la página, en este caso si el elemento HTML existe, se ejecuta el código dentro del if
    let parametros = new URLSearchParams(window.location.search);
    let busqueda = parametros.get("buscar");

    // let parametros: Sirve para crear una variable que contenga los parámetros de la URL, en este caso los parámetros de la URL son un objeto que contiene los parámetros de la URL
    // new URLSearchParams: Sirve para crear un objeto que contenga los parámetros de la URL, en este caso los parámetros de la URL son un objeto que contiene los parámetros de la URL
    // window.location.search: Sirve para acceder a los parámetros de la URL, en este caso los parámetros de la URL son un string que contiene los parámetros de la URL
    // let busqueda: Sirve para crear una variable que contenga el valor del parámetro "buscar" de la URL, en este caso el valor del parámetro "buscar" es un string que contiene el término de búsqueda
    // parametros.get("buscar"): Sirve para obtener el valor del parámetro "buscar" de la URL, en este caso el valor del parámetro "buscar" es un string que contiene el término de búsqueda



titulo.innerHTML = `Resultados de búsqueda para: ${busqueda}`;

// titulo.innerHTML: Sirve para acceder al contenido HTML del elemento con el id "titulo-resultados", en este caso el contenido HTML del elemento es un string que contiene el titulo de los resultados de búsqueda
// `Resultados de búsqueda para: ${busqueda}`: Sirve para crear un string que contenga el titulo de los resultados de búsqueda, en este caso el titulo de los resultados de búsqueda es un string que contiene el término de búsqueda

fetch(`https://dummyjson.com/products/search?q=${busqueda}`)


// fetch: Sirve para hacer una solicitud a la API, en este caso la solicitud es a la API de DummyJSON para buscar productos que coincidan con el término de búsqueda
// `https://dummyjson.com/products/search?q=${busqueda}`: Sirve para crear la URL de la solicitud a la API, en este caso la URL de la solicitud es un string que contiene la URL de la API con el término de búsqueda

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
                        <img src="${producto.thumbnail}" alt="${producto.title}">
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


// let formulario: Sirve para crear una variable que contenga el elemento HTML con el id "form-busqueda", en este caso el elemento HTML es un formulario que contiene el campo de búsqueda
// let buscador: Sirve para crear una variable que contenga el elemento HTML con el id "busqueda", en este caso el elemento HTML es un input que contiene el campo de búsqueda
// let errorBusqueda: Sirve para crear una variable que contenga el elemento HTML con el id "error-busqueda", en este caso el elemento HTML es un p que contiene el mensaje de error de la búsqueda


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

// if (formulario != null): Sirve para verificar si el elemento HTML con el id "form-busqueda" existe en la página, en este caso si el elemento HTML existe, se ejecuta el código dentro del if


// formulario.addEventListener("submit", function(event)): Sirve para agregar un evento al formulario que se ejecuta cuando se envía el formulario, en este caso el evento es una función que recibe un objeto event
// event.preventDefault(): Sirve para evitar que el formulario se envíe automáticamente, en este caso se evita que el formulario se envíe automáticamente para poder validar el campo de búsqueda


// if (buscador.value == ""): Sirve para verificar si el valor del campo de búsqueda está vacío, en este caso si el valor del campo de búsqueda está vacío, se ejecuta el código dentro del if
// errorBusqueda.innerHTML = "El campo de búsqueda no puede estar vacío": Sirve para mostrar un mensaje de error en el elemento con el id "error-busqueda", en este caso el mensaje de error es un string que indica que el campo de búsqueda no puede estar vacío


// else if (buscador.value.length < 3): Sirve para verificar si el valor del campo de búsqueda tiene menos de 3 caracteres, en este caso si el valor del campo de búsqueda tiene menos de 3 caracteres, se ejecuta el código dentro del else if
// errorBusqueda.innerHTML = "La búsqueda debe tener al menos 3 caracteres": Sirve para mostrar un mensaje de error en el elemento con el id "error-busqueda", en este caso el mensaje de error es un string que indica que la búsqueda debe tener al menos 3 caracteres


// else: Sirve para ejecutar el código dentro del else si ninguna de las condiciones anteriores se cumple, en este caso se ejecuta el código dentro del else si el valor del campo de búsqueda no está vacío y tiene al menos 3 caracteres
// errorBusqueda.innerHTML = "": Sirve para limpiar el mensaje de error en el elemento con el id "error-busqueda", en este caso se limpia el mensaje de error para poder enviar el formulario


// this.submit(): Sirve para enviar el formulario automáticamente, en este caso se envía el formulario automáticamente si el valor del campo de búsqueda no está vacío y tiene al menos 3 caracteres