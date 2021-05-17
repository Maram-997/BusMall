'use strict';
let minAttempts = 0;
let maxAttempts = 10;
let products = [];
let attemptsEl = document.getElementById('attempts');

function productImage(productName){
    this.productName = productName.split('.')[0];
    this.source = '/images' + productName;
    this.clicks = 0;
    this.views = 0;
    products.push(this);
}
let productsImages = ['bag.jpg','banana.jpg','bathroom.jpg', 'boots.jpg','breakfast.jpg', 'boots.jpg','bubblegum.jpg', 'chair.jpg',
'cthulhu.jpg','dog-duck.jpg', 'dragon.jpg', 'pen.jpg','pet-sweep.jpg', 'scissors.jpg','shark.jpg','sweep.jpg',
'tauntaun.jpg','unicorn.jpg','water-can.jpg', 'wine-glass.jpg'];
for ( let i = 0; i < productsImages.length; i++){
    new productImage(productsImages[i]);
}
function generateProduct(){
    return Math.floor(Math.random() * products.length);
}
let leftPart = document.getElementById('left');
let middelPart = document.getElementById('middle');
let rightPart = document.getElementById('right');


let leftImageIndex;
let middleImageIndex;
let rightImageIndex;

function renderProducts(){
     leftImageIndex = generateProduct();
     middleImageIndex = generateProduct();
     rightImageIndex = generateProduct();

while( leftImageIndex === middleImageIndex || leftImageIndex === rightImageIndex || rightImageIndex === middleImageIndex){
  leftImageIndex = generateProduct();
  rightImageIndex = generateProduct();
}

}

leftPart.setAttribute('src', products[leftImageIndex].source);
products[leftImageIndex].views++
middelPart.setAttribute('src', products[middleImageIndex].source);
products[middleImageIndex].views++
rightPart.setAttribute('src', products[rightImageIndex].source);
products[rightImageIndex].views++

attempysEl.textContent = minAttempts;
renderProducts();
leftPart.addEventListener('click', countingClicks);
middelPart.addEventListener('click', countingClicks);
rightPart.addEventListener('click', countingClicks);

function countingClicks(event){
    minAttempts++;
    if (minAttempts <= maxAttempts){
        if ( event.target.id === 'leftPart'){
            products[leftImageIndex].clicks++;
        }
        else if ( event.target.id === 'middlePart'){
            products[middleImageIndex].clicks++;
        
        }
        else if ( event.target.id === 'rightPart'){
            products[rightImageIndex].clicks++;
        }
        renderProducts();
    }

else{
    ulEl.document.getElementById('results');
let liEl;
for ( let i = 0; i < products.length; i++){
    liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `${products[i].productName} has ${products[i].views} views and has ${ products[i].clicks} clicls.`
}
leftPart.removeEventListener('click', countingClicks);
middlePart.removeEventListener('click', countingClicks);
rightPart.removeEventListener('click', countingClicks);

}
}