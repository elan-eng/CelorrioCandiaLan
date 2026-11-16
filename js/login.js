
let form = document.querySelector(".login");
let email = document.querySelector(".email");
let pass = document.querySelector(".pass");



form.addEventListener("submit", function(event){

    if (pass.value.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");
        event.preventDefault();
    }
    
});



