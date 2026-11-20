let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let categoria = queryStringObj.get("category");
let seccionCategoria = document.querySelector(".contenedor-productos");
fetch(`https://dummyjson.com/products/category/${categoria}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let productos = data.products;
        seccionCategoria.innerHTML = `<h2>${categoria}</h2>`;
        if (productos.length == 0) {
            seccionCategoria.innerHTML = "<h2>No hay productos en esta categoría</h2>";
        }
        for (let i = 0; i < productos.length; i++) {
            let producto = productos[i];
            seccionCategoria.innerHTML += `
                <article class="productos">
                    <img src="${producto.images[0]}" alt="${producto.title}">
                    <h3>${producto.title}</h3>
                    <p>${producto.description}</p>
                    <p class="precio">$${producto.price}</p>
                    <a class="ver-detalle" href="./product.html?id=${producto.id}">Ver detalle</a>
                </article>
            `;
        }
    })
    .catch(function (error) {
        console.log("El error es: " + error);
    });
