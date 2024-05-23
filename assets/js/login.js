

function OnSubmit(){
    console.log("a");
    let users = JSON.parse(localStorage.getItem('registereds')) || [];

    let currentUser = document.getElementById("username");
    let currentPass = document.getElementById("senha");

    if(currentUser.value && currentPass.value){
      for(let i =0; i < users.lenght; i++){
        if(users[i].username == currentUser){
            if(users[i].password == currentPass){

                let user = JSON.parse(localStorage.getItem('username')) || [];
                delete user;
                user.push(currentUser);

                window.location.href = 'profile.html';
            }
        } 
      }
      console.log("not found")
    }else{
   
    }
}