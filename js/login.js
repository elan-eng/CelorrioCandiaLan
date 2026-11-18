
let form = document.querySelector(".login");
let email = document.querySelector(".email");
let pass = document.querySelector(".pass");
let labelEmail = document.querySelector("#email")
let labelPass = document.querySelector("#pass")



form.addEventListener("submit", function(event){

    event.preventDefault(); 

    if (email.value == "") {
        labelEmail.innerHTML = "El campo esta vacio. El formulario no va a enviarse"

    } else {
        labelEmail.innerHTML = ""
    }


    if (pass.value == "") {
        labelPass.innerHTML = "El campo esta vacio. El formulario no va a enviarse"

    } else if (pass.value.length < 6) {
        labelPass.innerHTML = "La contraseña debe tener al menos 6 caracteres"

    }
    
    
    else {
        labelEmail.innerHTML = ""
        labelPass.innerHTML = ""
        this.submit();
    }
});



