
let LOGOUT = document.querySelector("#saludoLogout");

if (LOGOUT) {
    LOGOUT.addEventListener("click", function (event) {

        if (localStorage.getItem("email") !== null) {
            event.preventDefault();

            localStorage.removeItem("email");


            let saludoUser = document.querySelector("#saludoUser");
            if (saludoUser) {
                saludoUser.innerText = "Login";
                saludoUser.setAttribute("href", "./login.html")
                saludoUser.style.color = ""
                saludoUser.style.fontWeight = ""
            }

            LOGOUT.innerText = "Register";
            LOGOUT.setAttribute("href", "./register.html");

        }

    })
}