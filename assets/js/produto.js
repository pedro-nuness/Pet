

// Function to add an item to the cart
function addToCart(produto) {

    let Cart = JSON.parse(localStorage.getItem('carrinho')) || [];

    const index = Cart.findIndex(item => item.nome === produto.nome);
    if (index > -1) {
        Cart[index].quantidade += 1;
    } else {
        produto.quantidade = 1;
        Cart.push(produto);
    }
    localStorage.setItem('carrinho', JSON.stringify(Cart));
}

function PushElement(){
    let item = JSON.parse(localStorage.getItem('item')) || [];

    let ProductImg = document.getElementsByClassName("product_img")[0];
    let ProductPrice = document.getElementsByClassName("product_price")[0];
    let ProductName = document.getElementsByClassName("product_name")[0];
    let ProductDescription = document.getElementsByClassName("product_description")[0];
    let Cart = document.getElementById("cart");
    let CartButton = document.getElementById("cart_button");
    Cart.addEventListener("click", function(){
        CartButton.innerHTML = "check";
        CartButton.style.opacity = 0;
        setTimeout(() => {
            CartButton.style.opacity = 1;
            CartButton.innerHTML = "add_shopping_cart";
        }, 500);
    })

    let Buy = document.getElementById("buy");
    Buy.addEventListener( "click", function() {
        localStorage.setItem('total', item[0].preço);
        window.location.href = 'finalizar.html'
    } )    
    ProductDescription.innerHTML = item[0].descrição;
    ProductImg.src = item[0].imagem;
    ProductPrice.innerHTML = "R$" +  item[0].preço
    ProductName.innerHTML = `<h2>${ item[0].nome}</h2>`

    document.getElementById("cart").addEventListener("click", () => addToCart(item[0]));
}

PushElement();