
let emailStored = localStorage.getItem("email");
let saludoUser = document.querySelector("#saludoUser");
let logout = document.querySelector("#saludoLogout");




if (emailStored !== null) {

    saludoUser.innerText = "Bienvenido: " + emailStored;

    document.querySelector("#saludoUser").style.color = "#8F817D";
    document.querySelector("#saludoUser").style.fontWeight = "bold";
    
    
    logout.innerHTML = "Logout"
}