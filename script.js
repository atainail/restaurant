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

var netPrice = 0;
var taxes;
var totalPrice;

document.addEventListener("click", function(){
    netPrice = eggsQty.innerHTML*3.99 + pancakesQty.innerHTML*5.99 + biscuitQty.innerHTML*2.99 + 
    burgerQty.innerHTML*9.99 + steakQty.innerHTML*12.99 + salmonQty.innerHTML*15.99 + 
    cakeQty.innerHTML*7.99 + macaroonsQty.innerHTML*9.99

    taxes = (netPrice * .07).toFixed(2);
    totalPrice = (parseFloat(netPrice) + parseFloat(taxes)).toFixed(2);
    
    netPriceDiv.innerHTML = netPrice.toFixed(2);
    taxesDiv.innerHTML = taxes;
    totalPriceDiv.innerHTML = totalPrice;
    
    if(cartCount == 0){
        emptyCart.innerHTML = "Your cart is empty";         
   } else {
        emptyCart.innerHTML = " ";
   }
});

var foodTitle = document.querySelectorAll(".food-title");
var foodCategory = document.querySelector(".food-category");
var restaurantPic = document.querySelector(".restaurant-pic");
var emptyCart = document.querySelector(".empty-cart");


cartIcon.addEventListener("click", function(){    
    cartQty.style.display = "none";
    totalsDiv.style.display = "block";
    cartIcon.style.display = "none";
    houseIcon.style.display = "block";
    foodTitle[0].style.display = "none";
    foodTitle[1].style.display = "none";
    foodTitle[2].style.display = "none";
    foodCategory.style.display = "none";
    restaurantPic.style.display = "none";

    if(cartCount == 0){
         emptyCart.innerHTML = "Your cart is empty";         
    }

    if(eggsQty.innerHTML == 0 ){
        eggsDiv.style.display = "none";
    }
    if(pancakesQty.innerHTML == 0 ){
        pancakesDiv.style.display = "none";
    }
    if(biscuitQty.innerHTML == 0 ){
        biscuitDiv.style.display = "none";
    }
    if(burgerQty.innerHTML == 0 ){
        burgerDiv.style.display = "none";
    }
    if(steakQty.innerHTML == 0 ){
        steakDiv.style.display = "none";
    }
    if(salmonQty.innerHTML == 0 ){
        salmonDiv.style.display = "none";
    }
    if(cakeQty.innerHTML == 0 ){
        cakeDiv.style.display = "none";
    }
    if(macaroonsQty.innerHTML == 0 ){
        macaroonsDiv.style.display = "none";
    }

    netPriceDiv.innerHTML = netPrice.toFixed(2);
    taxesDiv.innerHTML = taxes;
    totalPriceDiv.innerHTML = totalPrice;
});


// $(document).ready(function(){
//     $(".bi-cart").click(function(){
//       $(".middle-stuff").load("cart.txt").hide().fadeIn('slow');
//       $(".totals").fadeIn('slow');
//     cartIcon.style.display = "none";
//     houseIcon.style.display = "block";
//     cartQty.style.display = "none";
//     totalsDiv.style.display = "block";


//     if(eggsQty.innerHTML == 0 ){
//         eggsDiv.style.display = "none";
//         $(".eggs-item").hide();
//     }



//     if(pancakesQty.innerHTML == 0 ){
//         pancakesDiv.style.display = "none";
//         $(".pancakes-item").hide();
//     }
//     if(biscuitQty.innerHTML == 0 ){
//         biscuitDiv.style.display = "none";
//         $(".biscuit-item").hide();
//     }
//     if(burgerQty.innerHTML == 0 ){
//         burgerDiv.style.display = "none";
//         $(".burger-item").hide();
//     }
//     if(steakQty.innerHTML == 0 ){
//         steakDiv.style.display = "none";
//         $(".steak-item").hide();
//     }
//     if(salmonQty.innerHTML == 0 ){
//         salmonDiv.style.display = "none";
//         $(".salmon-item").hide();
//     }
//     if(cakeQty.innerHTML == 0 ){
//         cakeDiv.style.display = "none";
//         $(".cake-item").hide();
//     }
//     if(macaroonsQty.innerHTML == 0 ){
//         macaroonsDiv.style.display = "none";
//         $(".macaroons-item").hide();
//     }

//     netPriceDiv.innerHTML = netPrice.toFixed(2);
//     taxesDiv.innerHTML = taxes;
//     totalPriceDiv.innerHTML = totalPrice;

//     totalsDiv.style.display = "block";
    
//     console.log(`egg qty is ${eggsQty.innerHTML}`)

//     });
// });



$(document).ready(function(){
    $(".bi-house-door").click(function(){
      $(".middle-stuff").load("index.txt").hide().fadeIn('slow');

    cartIcon.style.display = "block";
    cartQty.style.display = "block";
    houseIcon.style.display = "none";
    totalsDiv.style.display = "none";
    

    });
});

houseIcon.addEventListener("click", function(){    
    cartQty.style.display = "block";
    totalsDiv.style.display = "none";
    cartIcon.style.display = "block";
    houseIcon.style.display = "none";
    foodTitle[0].style.display = "block";
    foodTitle[1].style.display = "block";
    foodTitle[2].style.display = "block";
    foodCategory.style.display = "flex";
    restaurantPic.style.display = "block";

    

    
        eggsDiv.style.display = "flex";
    
    
        pancakesDiv.style.display = "flex";
    
    
        biscuitDiv.style.display = "flex";
    
    
        burgerDiv.style.display = "flex";
    
    
        steakDiv.style.display = "flex";
    

        salmonDiv.style.display = "flex";
    
    
        cakeDiv.style.display = "flex";
  
  
        macaroonsDiv.style.display = "flex";
  

    netPriceDiv.innerHTML = netPrice.toFixed(2);
    taxesDiv.innerHTML = taxes;
    totalPriceDiv.innerHTML = totalPrice;
});


