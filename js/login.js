
let form = document.querySelector(".login");
let email = document.querySelector(".email");
let pass = document.querySelector(".pass");
let lableEmail = document.querySelector("#email")
let lablePass = document.querySelector("#pass")



form.addEventListener("submit", function(event){

    event.preventDefault(); 

    if (email.value == "") {
        lableEmail.innerHTML = "El campo esta vacio. El formulario no va a enviarse"

    } else {
        lableEmail.innerHTML = ""
    }


    if (pass.value == "") {
        lablePass.innerHTML = "El campo esta vacio. El formulario no va a enviarse"

    } else if (pass.value.length < 6) {
        lablePass.innerHTML = "La contraseña debe tener al menos 6 caracteres"

    }
    
    
    else {
        lableEmail.innerHTML = ""
        lablePass.innerHTML = ""
        this.submit();
    }
});



