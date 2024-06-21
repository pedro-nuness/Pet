// Function to add an item to the cart
function addToCart(Cart, produto) {
    const index = Cart.findIndex(item => item.nome === produto.nome);
    if (index > -1) {
        Cart[index].quantidade += 1;
    } else {
        produto.quantidade = 1;
        Cart.push(produto);
    }
    localStorage.setItem('carrinho', JSON.stringify(Cart));

    Adjust();
}

// Function to remove an item from the cart
function RemoveFromCart(Cart, produtoNome) {
    const index = Cart.findIndex(produto => produto.nome === produtoNome);
    if (index > -1) {
        if (Cart[index].quantidade > 1) {
            Cart[index].quantidade -= 1;
        } else {
            Cart.splice(index, 1);
        }
        localStorage.setItem('carrinho', JSON.stringify(Cart));
        Adjust();
    }
}

function DeleteFromCart(Cart, produtoNome){
    const index = Cart.findIndex(produto => produto.nome === produtoNome);
    Cart.splice(index, 1);  
    localStorage.setItem('carrinho', JSON.stringify(Cart));
    Adjust();
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

    
        
        let Counter = document.createElement('div');
        Counter.className = "item_counter";
      

        
        let RemoveItemButton = document.createElement('button');
        RemoveItemButton.className = "quantity_button";
        RemoveItemButton.addEventListener( 'click', () => RemoveFromCart(CART, produto.nome)  )
        

        
        Counter.appendChild(RemoveItemButton)

        let Minuscon = document.createElement('span');
        Minuscon.className = "material-symbols-outlined";
        Minuscon.textContent = 'remove';

        RemoveItemButton.appendChild(Minuscon);


        let ProductQuantity = document.createElement('div');
        ProductQuantity.className = "item_quantity";
        ProductQuantity.innerHTML = produto.quantidade;

        Counter.appendChild(ProductQuantity)


        let AddItemButton = document.createElement('button');
        AddItemButton.className = "quantity_button";
        AddItemButton.addEventListener( 'click', () => addToCart(CART, produto)  )

        let AddIcon = document.createElement('span');
        AddIcon.className = "material-symbols-outlined";
        AddIcon.textContent = 'add';

        AddItemButton.appendChild(AddIcon);


        Counter.appendChild(AddItemButton)

        let RemoveItem = document.createElement('span');
        RemoveItem.addEventListener("click", () => DeleteFromCart(CART, produto.nome));
        RemoveItem.className = "cart_item_remove";

        Counter.appendChild(RemoveItem);

        
        

        let RemoveIcon = document.createElement('span');
        RemoveIcon.className = "material-symbols-outlined";
        RemoveIcon.textContent = 'delete';

        RemoveItem.appendChild(RemoveIcon);

        // Adiciona os elementos de informação ao contêiner de informação
        cartItemInfo.appendChild(itemName);
        cartItemInfo.appendChild(itemPrice);

        cartItemInfo.appendChild(Counter);

        // Adiciona os contêineres de imagem e informação ao elemento principal
        cartItem.appendChild(cartItemImg);
        cartItem.appendChild(cartItemInfo);

        CartArea[0].appendChild(cartItem);
    });
}


function Adjust() {
    let cart = JSON.parse(localStorage.getItem('carrinho'));
    let Cupom = document.getElementById("cupom");

    createCartItem(cart);

    let Sum = 0;
    for(let i = 0; i < cart.length; i++){
        Sum += parseFloat(cart[i].preço * cart[i].quantidade);
    }   

    Sum = Sum.toFixed(1);

    if(Cupom.value == "FAZOL")
        Sum *= 100;

        console.log(Sum);

    document.getElementById("subtotal").innerHTML = "R$" + Sum;
    document.getElementById("total").innerHTML = "R$" + Sum ;

    localStorage.setItem('total', Sum);
}

function Finalize(){
    window.location.href = "finalizar.html";
}

Adjust();





