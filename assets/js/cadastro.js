
function generateUser(user, pass, mail){
    return {
       username: user,
       password: pass,
       email: mail
    };
}


function OnSubmit (){
    let users = JSON.parse(localStorage.getItem('registereds')) || [];

    let username = document.getElementById("username");
    let email = document.getElementById("email")
    let senha = document.getElementById("senha")
    let confirma_senha = document.getElementById("confirmarsenha");

    console.log(users);

    if(username.value && email.value && senha.value && confirma_senha.value){
        if(confirma_senha.value == senha.value){
            users.push(generateUser(username.value, senha.value, email.value))
        }
        localStorage.setItem('registereds', JSON.stringify(users));
    

        window.location.href = 'login.html';
    }
}