

function OnSubmit() {
    let users = JSON.parse(localStorage.getItem('registereds')) || [];

    let currentUser = document.getElementById("username").value;
    let currentPass = document.getElementById("senha").value;

    if (currentUser && currentPass) {
        let userFound = false;

        for (let i = 0; i < users.length; i++) {
            if (users[i].username == currentUser) {
                userFound = true;

                // Aqui, você deveria verificar a senha também para confirmar o login
                if (users[i].password == currentPass) {
                    localStorage.setItem('currentUser', JSON.stringify(users[i]));

                    window.location.href = 'profile.html';
                } else {
                    alert("Senha incorreta");
                }
                break; // Saia do loop se o usuário foi encontrado
            }
        }

        if (!userFound) {
            alert("Usuário não encontrado");
        }
    } else {
        alert("Usuário ou senha não fornecidos");
    }
}


function OnUserClick(){

    let user = JSON.parse(localStorage.getItem('currentUser')) || [];

    if(!user.username){
        window.location.href = 'login.html';
    }else{
        window.location.href = 'profile.html';
    }
}
