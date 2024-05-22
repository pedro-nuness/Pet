let Carrossel = document.getElementsByClassName("carrossel");
let CarrosselBox = document.getElementsByClassName("carrossel_movable_box");
let CarrosselItems = document.getElementsByClassName("carrossel_item");

const Items = [
    [
        {
            imagem: "assets/img/bag.png",
        },
        {
            imagem: "assets/img/bag.png",
        },
    ]
];

function AdjustCarrosselSizing() {
    for (let i = 0; i < CarrosselBox.length; i++) {
        CarrosselBox[i].style.width = (100 * Items[i].length) + '%';
    }
}

function AdjustItemsSize() {
    let CurrentIdx = 0;
    for (let i = 0; i < Items.length; i++) {
        console.log(i);
        let boxWidth = CarrosselBox[i].style.width; // Obtenha a largura calculada em pixels
        let itemWidth = boxWidth / Items[i].length;
        for (let j = 0; j < Items[i].length; j++) {
            CarrosselItems[CurrentIdx].style.width = itemWidth + '%';
            CurrentIdx++;
        }
    }
}

function InsertItems(){
    for(let i =0; i < CarrosselBox.length; i++){
        for(let j =0; j < Items[i].length; j++){
            let newItem = document.createElement('div');
            newItem.className = 'carrossel_item';

            let CarrosselImg = document.createElement('img');
            CarrosselImg.className = 'carrossel_item_img';
            CarrosselImg.src = Items[i][j].imagem;

            newItem.appendChild(CarrosselImg);

            CarrosselBox[i].appendChild(newItem);
            console.log(1);
        }
    }
}

function MoveCarrossel(element, side){
    let Box = document.getElementById(element);
    if(side){
        
    }
}

InsertItems();
AdjustCarrosselSizing();
AdjustItemsSize();