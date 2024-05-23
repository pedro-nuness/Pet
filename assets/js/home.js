let Carrossel = document.getElementsByClassName("carrossel");
let CarrosselBox = document.getElementsByClassName("carrossel_movable_box");
let CarrosselItems = document.getElementsByClassName("carrossel_item");

const Items = [
    [   
        {
            imagem: "assets/img/bahno&tosa.jpg",
        },
        {
            imagem: "assets/img/veterinario.jpg",
        },
        {
            imagem: "assets/img/petshop.jpg",
        },
    ]
];

let Indexes = [
    {
        index: 0,
    },
    {
        index: 0,
    },
]

function AdjustCarrosselSizing() {
    for (let i = 0; i < CarrosselBox.length; i++) {
        CarrosselBox[i].style.width = (100 * Items[i].length) + '%';
    }
}

function AdjustItemsSize() {
    let CurrentIdx = 0;
    for (let i = 0; i < Items.length ; i++) {
        let itemWidth = (100 / Items[i].length);
        for (let j = 0; j < Items[i].length; j++) {
            CarrosselItems[CurrentIdx].style.width = itemWidth + '%';
            CurrentIdx++;
            console.log(itemWidth);
        }
    }
}

function InsertItems(){
    for(let i =0; i < CarrosselBox.length; i++){
        let j =0;
        for(j =0; j < Items[i].length ; j++){
            let newItem = document.createElement('div');
            newItem.className = 'carrossel_item';

            let CarrosselImg = document.createElement('img');
            CarrosselImg.className = 'carrossel_item_img';
            CarrosselImg.src = Items[i][j].imagem;

            newItem.appendChild(CarrosselImg);

            CarrosselBox[i].appendChild(newItem);
            
        }
        console.log("added " + j + " items into " + i);
    }
}

function MoveCarrossel(idx, side){
    let CarrosselIDX = Indexes[idx].index;

    if(side){
        if(CarrosselIDX < Items[idx].length - 1) 
            CarrosselIDX++;
    }else if(CarrosselIDX > 0)
        CarrosselIDX--;

    CarrosselBox[idx].style.left = -CarrosselIDX * 100 + '%';   
    Indexes[idx].index = CarrosselIDX;
}

InsertItems();
AdjustCarrosselSizing();
AdjustItemsSize();

function Req(produto) {
    let request = JSON.parse(localStorage.getItem('currentRequest')) || [];
    request = []; 
    request.push(produto);
    localStorage.setItem('currentRequest', JSON.stringify(request));
    window.location.href = 'produtos.html'; 
}

document.addEventListener('DOMContentLoaded', () => {
    const productButtons = document.querySelectorAll('.produtos_imagem .img-marcas');

    productButtons.forEach(button => {
        button.addEventListener('click', () => {
            let categoria = button.querySelector('.marca_info_text') ? button.querySelector('.marca_info_text').textContent.toLowerCase() : null;
            let TipoElement = button.closest('.produtos-e-marcas').querySelector('.titulos-produtos h2')
            let tipo = TipoElement.textContent.toLowerCase().includes('cachorros') ? 'cachorro' : TipoElement.textContent.toLowerCase().includes('gatos') ? 'gato' : null;
            if(tipo != null){
                categoria = categoria.replace(/\s+/g, "");       
                const produto = { tipo, categoria };
                Req(produto);
            }
        });
    });
});

