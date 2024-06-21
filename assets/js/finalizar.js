function AdjustPrice(){
    let Price = localStorage.getItem('total');
    document.getElementById("summary_subtotal").innerHTML = "R$" + Price;
    document.getElementById("summary_total").innerHTML = "R$" + ( parseInt(Price) + 20 );

}

AdjustPrice();