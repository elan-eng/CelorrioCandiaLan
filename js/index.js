console.log("Hola CREALIA");
fetch ('https://dummyjson.com/products/category/mobile-accessories')
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        let productos = data.products;
    
        for (let i = 0; i < productos.length; i++) {
        let producto = productos[i];

   seccion.innerHTML += `
        <article class="productos">
            <img src="${producto.thumbnail}" alt="${producto.title}">
            <h3>${producto.title}</h3>
            <p>${producto.description}</p>
            <p class="precio">$${producto.price}</p>
            <a class="ver-detalle" href="./product.html?id=${producto.id}">Ver detalle</a>
        </article>
    `;

        console.log(producto); 
    
    }
        console.log(data);
    })
    .catch(function (error){
        console.log('El error es:' + error);
    });

fetch ('https://dummyjson.com/products/category/kitchen-accessories')
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        let productos = data.products;
    
        for (let i = 0; i < productos.length; i++) {
        let producto = productos[i];

   seccionAleatorios.innerHTML += `
        <article class="productos">
            <img src="${producto.thumbnail}" alt="${producto.title}">
            <h3>${producto.title}</h3>
            <p>${producto.description}</p>
            <p class="precio">$${producto.price}</p>
            <a class="ver-detalle" href="./product.html?id=${producto.id}">Ver detalle</a>
        </article>
    `;

        console.log(producto); 
    
    }
        console.log(data);
    })
    .catch(function (error){
        console.log('El error es:' + error);
    });


    let seccion = document.querySelector ("#lista-mas-vendidos");
    let seccionAleatorios = document.querySelector ("#lista-productos-aleatorios");
    