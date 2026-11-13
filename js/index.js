console.log("Hola CREALIA");
fetch ('https://dummyjson.com/products/category/mobile-accessories')
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        console.log(data);
    })
    .catch(function (error){
        console.log('El error es:' + error);
    });

    let seccion = document.querySelector ("#mas-vendidos");
    