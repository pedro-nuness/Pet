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