console.log("Hola CREALIA");    // Sirve para verificar que el JS este funcionando correctamente

fetch ('https://dummyjson.com/products/category/mobile-accessories') 

// FETCH: Sirve para traer datos de una API, en este caso de la API DummyJSON
                                                                        
    .then(function (response){ 
        // .then: Sirve para ejecutar una funcion cuando la promesa se resuelva correctamente, en este caso cuando la API responda correctamente
        // function (response): Sirve para recibir la respuesta de la API, en este caso la respuesta es un objeto Response

        return response.json();
        // response.json(): Sirve para convertir la respuesta de la API en un objeto JSON
        // return: Sirve para devolver el resultado de la funcion, en este caso el objeto JSON
    })
    .then(function (data){
        // function (data): Sirve para recibir el objeto JSON, en este caso el objeto JSON es un objeto que contiene un array de productos

        let productos = data.products;
        // let productos: Sirve para crear una variable que contenga el array de productos, en este caso el array de productos es un array de objetos que contienen la informacion de cada producto

    
        for (let i = 0; i < productos.length; i++) {
            // for: Sirve para recorrer el array de productos, en este caso el array de productos es un array de objetos que contienen la informacion de cada producto
            // let i = 0: Sirve para crear una variable que contenga el indice del array, en este caso el indice del array es un numero que empieza en 0
            // i < productos.length: Sirve para establecer la condicion del bucle, en este caso la condicion es que el indice del array sea menor que la longitud del array
            // i++: Sirve para incrementar el indice del array en 1, en este caso el indice del array se incrementa en 1 cada vez que se ejecuta el bucle


        let producto = productos[i];
        // let producto: Sirve para crear una variable que contenga el objeto del producto, en este caso el objeto del producto es un objeto que contiene la informacion de un producto
        // productos[i]: Sirve para acceder al objeto del producto en el indice i del array de productos, en este caso el objeto del producto es un objeto que contiene la informacion de un producto

   seccion.innerHTML +=
   // innerHTML: Sirve para acceder al contenido HTML de un elemento, en este caso el contenido HTML del elemento es un string que contiene el codigo HTML de un producto
   //seccion.innerHTML +=: Sirve para agregar el contenido HTML de un elemento, en este caso el contenido HTML del elemento es un string que contiene el codigo HTML de un producto
   
   `
        <article class="productos">
            <img src="${producto.images[0]}" alt="${producto.title}">
            <h3>${producto.title}</h3>
            <p>${producto.description}</p>
            <p class="precio">$${producto.price}</p>
            <a class="ver-detalle" href="./product.html?id=${producto.id}">Ver detalle</a>
        </article>
    `;
    // `: Sirve para crear un string que contenga el codigo HTML de un producto, en este caso el codigo HTML de un producto es un string que contiene el codigo HTML de un producto
    // images[0]: Sirve para acceder a la primera imagen del array de imagenes del objeto producto, en este caso la propiedad images es un array que contiene las URLs de las imagenes del producto
    // ${producto.images[0]}: Sirve para acceder a la primera imagen del array de imagenes del objeto producto, en este caso la propiedad images es un array que contiene las URLs de las imagenes del producto
    // ${producto.title}: Sirve para acceder a la propiedad title del objeto producto, en este caso la propiedad title es un string que contiene el titulo del producto

        console.log(producto); 
        // console.log: Sirve para mostrar en la consola del navegador el objeto producto, en este caso el objeto producto es un objeto que contiene la informacion de un producto
    
    }
        console.log(data);
    })
    .catch(function (error){
        // .catch: Sirve para ejecutar una funcion cuando la promesa se rechace, en este caso cuando la API no responda correctamente
        // function (error): Sirve para recibir el error de la promesa, en este caso el error es un objeto que contiene la informacion del error
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
            <img src="${producto.images[0]}" alt="${producto.title}">
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
    
    //let seccion: Sirve para crear una variable que contenga el elemento HTML con el id "lista-mas-vendidos", en este caso el elemento HTML es un div que contiene los productos mas vendidos
    //document.querySelector ("#lista-mas-vendidos"): Sirve para acceder al elemento HTML con el id "lista-mas-vendidos", en este caso el elemento HTML es un div que contiene los productos mas vendidos
    //let seccionAleatorios: Sirve para crear una variable que contenga el elemento HTML con el id "lista-productos-aleatorios", en este caso el elemento HTML es un div que contiene los productos aleatorios
    //document.querySelector ("#lista-productos-aleatorios"): Sirve para acceder al elemento HTML con el id "lista-productos-aleatorios", en este caso el elemento HTML es un div que contiene los productos aleatorios
    //document.querySelector: Sirve para acceder a un elemento HTML, en este caso el elemento HTML es un div que contiene los productos mas vendidos o aleatorios