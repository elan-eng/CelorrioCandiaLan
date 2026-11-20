
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let idProducto = queryStringObj.get("id");
let detalleProducto = document.querySelector(".Producto");
let seccionReviews = document.querySelector(".reviews");
fetch(`https://dummyjson.com/products/${idProducto}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let marca = "" ;
        if (data.brand == undefined) {
            marca = "Sin marca";
        } else {
            marca = data.brand;
        }
        let tags = "";
        for (let i = 0; i < data.tags.length; i++) {
            if (i < 3) {
                tags += `<li>${data.tags[i]}</li>`;
            }
        }
        detalleProducto.innerHTML = `
            <img class="FotoProducto" src="${data.thumbnail}" alt="${data.title}">
            <div class="InfoProducto">
                <h1>${data.title}</h1>
                <p>Marca: ${marca}</p>
                <p class="DescripciónProducto">${data.description}</p>
                <p class="PrecioProducto">Precio: $${data.price}</p>
                <p>Categoría: <a href="./category.html?category=${data.category}">${data.category}</a></p>
                <p>Stock: ${data.stock} unidades disponibles</p>
                <ul class="Materiales">
                    ${tags}
                </ul>
            </div>
        `;
        seccionReviews.innerHTML = "<h2>Opiniones de compradores</h2>";
        for (let i = 0; i < data.reviews.length; i++) {
            let review = data.reviews[i];

            seccionReviews.innerHTML += `
                <div class="review1">
                    <p>${review.reviewerName} - ${review.rating}/5 ★</p>
                    <p>${review.comment}</p>
                    <p>${review.date}</p>
                </div>
            `;
        }
    })
    .catch(function (error) {
        console.log("El error es: " + error);
    });