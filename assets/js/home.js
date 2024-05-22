let Carrossel = document.getElementsByClassName("carrossel");
let CarrosselBox = document.getElementsByClassName("carrossel_movable_box");
let CarrosselItems = document.getElementsByClassName("carrossel_item");

const Items = [
    [   
        {
            imagem: "assets/img/bag.png",
        },
        {
            imagem: "assets/img/user.png",
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
        let itemWidth = 100 / Items[i].length;
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
    console.log(CarrosselIDX);

    CarrosselBox[idx].style.left = -CarrosselIDX * 100 + '%';   

    Indexes[idx].index = CarrosselIDX;
}

InsertItems();
AdjustCarrosselSizing();
AdjustItemsSize();