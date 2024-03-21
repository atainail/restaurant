var cartQty = document.querySelector(".cart-qty");
var cartCount = 0;

cartQty.addEventListener("click", function(){

});






var breakfastCategory = document.querySelector(".breakfast");
var breakfastMenu = document.querySelector(".breakfast-menu")

breakfastCategory.addEventListener("click", function(){
    breakfastMenu.scrollIntoView();
});

var dinnerCategory = document.querySelector(".dinner");
var dinnerMenu = document.querySelector(".dinner-menu")

dinnerCategory.addEventListener("click", function(){
    dinnerMenu.scrollIntoView();
});

var dessertCategory = document.querySelector(".dessert");
var dessertMenu = document.querySelector(".dessert-menu")

dessertCategory.addEventListener("click", function(){
    dessertMenu.scrollIntoView();
});




function foodChanges(foodPlus, foodMinus, foodCount, foodQty){
    foodPlus.addEventListener("click", function(){
        if(foodCount == 5){
            alert("Cannot order more than 5");
        } else {
            foodCount++;
            foodQty.innerHTML = foodCount; 
            cartCount++; 
            cartQty.innerHTML = cartCount;   
            cartQty.style.display = "block";
        }  
    });
    foodMinus.addEventListener("click", function(){
        foodCount--;
        cartCount--;
        if(cartCount < 0){
            cartCount = 0;                
        };
        if(cartCount == 0) {
            cartQty.style.display = "none";   
        }
        if(foodCount < 0){
            foodCount = 0;          
            foodQty.innerHTML = foodCount;
            alert("Cannot order less than 0");
        };  
        foodQty.innerHTML = foodCount;
        cartQty.innerHTML = cartCount; 
    });
};

function foodCounts (food){
    
}



var eggsPlus = document.querySelector(".eggs-plus");
var eggsMinus = document.querySelector(".eggs-minus");
var eggsQty = document.querySelector(".eggs-qty");
var eggsCount = 0;
foodChanges(eggsPlus, eggsMinus, eggsCount, eggsQty);

var pancakesPlus = document.querySelector(".pancakes-plus");
var pancakesMinus = document.querySelector(".pancakes-minus");
var pancakesQty = document.querySelector(".pancakes-qty");
var pancakesCount = 0;
foodChanges(pancakesPlus, pancakesMinus, pancakesCount, pancakesQty);

var biscuitPlus = document.querySelector(".biscuit-plus");
var biscuitMinus = document.querySelector(".biscuit-minus");
var biscuitQty = document.querySelector(".biscuit-qty");
var biscuitCount = 0;
foodChanges(biscuitPlus, biscuitMinus, biscuitCount, biscuitQty);

var burgerPlus = document.querySelector(".burger-plus");
var burgerMinus = document.querySelector(".burger-minus");
var burgerQty = document.querySelector(".burger-qty");
var burgerCount = 0;
foodChanges(burgerPlus, burgerMinus, burgerCount, burgerQty);

var steakPlus = document.querySelector(".steak-plus");
var steakMinus = document.querySelector(".steak-minus");
var steakQty = document.querySelector(".steak-qty");
var steakCount = 0;
foodChanges(steakPlus, steakMinus, steakCount, steakQty);

var salmonPlus = document.querySelector(".salmon-plus");
var salmonMinus = document.querySelector(".salmon-minus");
var salmonQty = document.querySelector(".salmon-qty");
var salmonCount = 0;
foodChanges(salmonPlus, salmonMinus, salmonCount, salmonQty);

var cakePlus = document.querySelector(".cake-plus");
var cakeMinus = document.querySelector(".cake-minus");
var cakeQty = document.querySelector(".cake-qty");
var cakeCount = 0;
foodChanges(cakePlus, cakeMinus, cakeCount, cakeQty);

var macaroonsPlus = document.querySelector(".macaroons-plus");
var macaroonsMinus = document.querySelector(".macaroons-minus");
var macaroonsQty = document.querySelector(".macaroons-qty");
var macaroonsCount = 0;
foodChanges(macaroonsPlus, macaroonsMinus, macaroonsCount, macaroonsQty);

// console.log(navigator.cookieEnabled);
// document.cookie = "name=bob; path=/";
// console.log(document.cookie);

// localStorage.qty = "dfkdof";
// console.log(localStorage.qty);

var eggsPrice = 3.99;
var pancakesPrice = 5.99;
var biscuitPrice = 2.99;
var burgerPrice = 9.99;
var steakPrice = 12.99;
var salmonPrice = 15.99;
var cakePrice = 7.99;
var macaroonsPrice = 9.99;

var cartIcon = document.querySelector(".bi-cart");
var houseIcon = document.querySelector(".bi-house-door");

var eggsDiv = document.querySelector(".eggs-item");
var pancakesDiv = document.querySelector(".pancakes-item");
var biscuitDiv = document.querySelector(".biscuit-item");
var burgerDiv = document.querySelector(".burger-item");
var steakDiv = document.querySelector(".steak-item");
var salmonDiv = document.querySelector(".salmon-item");
var cakeDiv = document.querySelector(".cake-item");
var macaroonsDiv = document.querySelector(".macaroons-item");

var totalsDiv = document.querySelector(".totals");
var netPriceDiv = document.querySelector(".net-price");
var taxesDiv = document.querySelector(".taxes");
var totalPriceDiv = document.querySelector(".total-price");

var netPrice;
var taxes;
var totalPrice;

document.addEventListener("click", function(){
    netPrice = eggsCount*3.99 + pancakesCount*5.99 + biscuitCount*2.99 + burgerCount*9.99 + steakCount*12.99 + salmonCount*15.99 + cakeCount*7.99 + macaroonsCount*9.99
    taxes = netPrice * .07;
    totalPrice = netPrice + taxes;
});



cartIcon.addEventListener("click", function(){  
    

    cartIcon.style.display = "none";
    houseIcon.style.display = "block";

    if(eggsCount == 0 ){
        eggsDiv.style.display = "none";
    }
    if(pancakesCount == 0 ){
        pancakesDiv.style.display = "none";
    }
    if(biscuitCount == 0 ){
        biscuitDiv.style.display = "none";
    }
    if(burgerCount == 0 ){
        burgerDiv.style.display = "none";
    }
    if(steakCount == 0 ){
        steakDiv.style.display = "none";
    }
    if(salmonCount == 0 ){
        salmonDiv.style.display = "none";
    }
    if(cakeCount == 0 ){
        cakeDiv.style.display = "none";
    }
    if(macaroonsCount == 0 ){
        macaroonsDiv.style.display = "none";
    }

    netPriceDiv.innerHTML = netPrice;
    taxesDiv.innerHTML = taxes;
    totalPriceDiv.innerHTML = totalPrice;

    totalsDiv.style.display = "block";
});


$(document).ready(function(){
    $(".bi-cart").click(function(){
      $(".middle-stuff").load("cart.txt").hide().fadeIn('slow');

    cartIcon.style.display = "none";
    houseIcon.style.display = "block";
    cartQty.style.display = "none";
    totalsDiv.style.display = "block";
    if(eggsCount == 0 ){
        eggsDiv.style.display = "none";
    }
    if(pancakesCount == 0 ){
        pancakesDiv.style.display = "none";
    }
    if(biscuitCount == 0 ){
        biscuitDiv.style.display = "none";
    }
    if(burgerCount == 0 ){
        burgerDiv.style.display = "none";
    }
    if(steakCount == 0 ){
        steakDiv.style.display = "none";
    }
    if(salmonCount == 0 ){
        salmonDiv.style.display = "none";
    }
    if(cakeCount == 0 ){
        cakeDiv.style.display = "none";
    }
    if(macaroonsCount == 0 ){
        macaroonsDiv.style.display = "none";
    }

    netPriceDiv.innerHTML = netPrice;
    taxesDiv.innerHTML = taxes;
    totalPriceDiv.innerHTML = totalPrice;

    
    });
});

$(document).ready(function(){
    $(".bi-house-door").click(function(){
      $(".middle-stuff").load("index.txt").hide().fadeIn('slow');

    cartIcon.style.display = "block";
    cartQty.style.display = "block";
    houseIcon.style.display = "none";
    totalsDiv.style.display = "none";
    

    });
});

