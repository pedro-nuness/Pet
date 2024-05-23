function AddToCart(produto){
    let cart = JSON.parse(localStorage.getItem('carrinho')) || [];
    cart.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(cart));
}

function PushElement(){

    let item = JSON.parse(localStorage.getItem('item')) || [];

    
    let ProductImg = document.getElementsByClassName("product_img")[0];
    let ProductPrice = document.getElementsByClassName("product_price")[0];
    let ProductName = document.getElementsByClassName("product_name")[0];
    let ProductDescription = document.getElementsByClassName("product_description")[0];

    ProductDescription.innerHTML = item[0].descrição;
    ProductImg.src = item[0].imagem;
    ProductPrice.innerHTML = "R$" +  item[0].preço
    ProductName.innerHTML = `<h2>${ item[0].nome}</h2>`

    document.getElementById("cart").addEventListener("click", () => AddToCart(item[0]));
    
  
    
}

PushElement();