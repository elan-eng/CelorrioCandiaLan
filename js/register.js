

let form = document.querySelector(".register");
let pass = document.querySelector(".pass");
let pass2 = document.querySelector(".pass2");



form.addEventListener("submit", function(event){

    if (pass.value.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");
        event.preventDefault();

    } else if (pass.value !== pass2.value) {
        alert("La contraseña debe ser la misma");
        event.preventDefault();
    }
    
});