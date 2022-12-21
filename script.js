function discountCode() {
    var newText = Math.floor(Math.random()*10000000000000000);
    document.getElementById('discount-code').innerText = newText;
}