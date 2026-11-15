console.log("Hola CREALIA");
fetch ('https://dummyjson.com/products/category/mobile-accessories')
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        let productos = data.products;
    
        for (let i = 0; i < productos.length; i++) {
        let producto = productos[i];
        console.log(producto); 
    
    }
        console.log(data);
    })
    .catch(function (error){
        console.log('El error es:' + error);
    });

    let seccion = document.querySelector ("#lista-mas-vendidos");
    