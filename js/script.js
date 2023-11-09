// var tPrice = document.getElementById("price")
// var btn = document.getElementById('btn')
// var totalPrice = 20000000000000
// btn.onclick = function(){
//     tPrice.innerHTML = totalPrice
// }

var cart = document.querySelectorAll('.new-arrival .carousel-inner a');
var counter = document.querySelector('.count-btn span')
var countbtn = document.querySelector('.count-btn')
var modalbody = document.querySelector('.modal-body .items-content')
var shooooow = document.getElementById('showprice')
var priceContent = document.getElementById('priceContent')
var price = document.querySelector('.price')

var count = 0
var totalPrice = 0
cart.forEach(function(item){
    item.onclick = function(){
        priceContent.style.display = "none"
        var price = item.getAttribute('price');
        var title = item.getAttribute('title');
        totalPrice += +(price)
        count ++;
        counter.innerHTML = count
        // console.log('price is ' + price + "title is " + title )
        modalbody.innerHTML += '[' + title + ' & price is : ' + price + ']' + ','
    }
})
countbtn.onclick = function(){

}
shooooow.onclick = function(){
    console.log('ssssss')
    priceContent.style.display = "block"
    price.innerHTML = totalPrice

}