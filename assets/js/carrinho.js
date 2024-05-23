function RemoveFromCart(Cart, produtoNome) {
    const index = Cart.findIndex(produto => produto.nome === produtoNome);
    if (index > -1) {
        Cart.splice(index, 1);
        localStorage.setItem('carrinho', JSON.stringify(Cart)); // Atualiza o carrinho no localStorage
        Adjust(); // Atualiza a exibição do carrinho
    }
}

let CartArea = document.getElementsByClassName("cart_items");

function createCartItem(CART) {
    CartArea[0].innerHTML = ''; // Limpa a área do carrinho antes de adicionar os itens

    CART.forEach(produto => {
        // Cria o elemento principal
        const cartItem = document.createElement('div');
        cartItem.className = 'cart_item';

        // Cria o contêiner da imagem
        const cartItemImg = document.createElement('div');
        cartItemImg.className = 'cart_item_img';
        const img = document.createElement('img');
        img.src = produto.imagem;
        img.className = 'cart_img';
        img.alt = produto.nome;
        cartItemImg.appendChild(img);

        // Cria o contêiner de informações
        const cartItemInfo = document.createElement('div');
        cartItemInfo.className = 'cart_item_info';

        // Nome do item
        const itemName = document.createElement('span');
        itemName.className = 'cart_item_name';
        itemName.textContent = produto.nome;

        // Preço do item
        const itemPrice = document.createElement('span');
        itemPrice.className = 'cart_item_price';
        itemPrice.textContent = "R$" + produto.preço;

        // Contêiner da quantidade
        const cartItemQuantity = document.createElement('div');
        cartItemQuantity.className = 'cart_item_quantity';

       


        let RemoveItem = document.createElement('span');
        RemoveItem.addEventListener("click", () => RemoveFromCart(CART, produto.nome));
        RemoveItem.className = "cart_item_remove";

        let RemoveIcon = document.createElement('span');
        RemoveIcon.className = "material-symbols-outlined";
        RemoveIcon.textContent = 'delete';

        RemoveItem.appendChild(RemoveIcon);

        // Adiciona os elementos de informação ao contêiner de informação
        cartItemInfo.appendChild(itemName);
        cartItemInfo.appendChild(itemPrice);
        cartItemInfo.appendChild(RemoveItem);
        cartItemInfo.appendChild(cartItemQuantity);

        // Adiciona os contêineres de imagem e informação ao elemento principal
        cartItem.appendChild(cartItemImg);
        cartItem.appendChild(cartItemInfo);

        CartArea[0].appendChild(cartItem);
    });
}


function Adjust() {
    let cart = JSON.parse(localStorage.getItem('carrinho'));
    createCartItem(cart);

    let Sum = 0;
    for(let i = 0; i < cart.length; i++){
        Sum += parseFloat(cart[i].preço);
    }   

    Sum = Sum.toFixed(1);
 
    document.getElementById("subtotal").innerHTML = "R$" + Sum;
    document.getElementById("total").innerHTML = "R$" + Sum ;

}

Adjust();
