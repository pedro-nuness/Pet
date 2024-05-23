
let user = JSON.parse(localStorage.getItem('currentUser')) || [];
document.getElementById("mensagem").innerHTML = `Olá, ${user.username} Bem vindo(a) ao Pet Planet.`
document.getElementById("nome").innerHTML = `${user.username}`
document.getElementById("email").innerHTML = `${user.email}`

function LogOut(){
    user = [];
    localStorage.setItem('currentUser', JSON.stringify(user));
    window.location.href = 'index.html';
}