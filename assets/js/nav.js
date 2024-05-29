function AdjustCounter(){
    let cart = JSON.parse(localStorage.getItem('carrinho')) || [];
    let Counter = document.getElementById("product_counter")

    if(cart.length){
        let Items = 0;
        for(let i = 0; i < cart.length; i++){
            Items += cart[i].quantidade;
        }

        Counter.innerHTML = Items;

        Counter.style.display = "flex";
    }else{
        Counter.style.display = "none";
    }
}
setInterval(AdjustCounter, 0);

let OptionsActive = false;

function ChangeLateralBarState(){
    
    OptionsActive = !OptionsActive;
    AdjustLateralBar();
}

function AdjustLateralBar(){
    let LateralBar = document.getElementById("lateral_bar");
    let OptionsButton = document.getElementById("options_button");
    if(OptionsActive){       
        OptionsButton.innerHTML = "close"; 
        LateralBar.style.left = "50%"; 
        LateralBar.style.width = "50vw";   
    }
    else{
        OptionsButton.innerHTML = "density_medium";
        LateralBar.style.width = "0vw";
        LateralBar.style.left = "100%";      
    }
}


