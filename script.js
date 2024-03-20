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

console.log(navigator.cookieEnabled);
document.cookie = "name=bob;";
console.log(document.cookie);

