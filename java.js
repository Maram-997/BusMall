'use strict';
let minAttempts = 0;
let maxAttempts = 10;
let products = [];

function productImage(productName){
    this.productName = productName;
    this.source = productName.split('.')[0];
    this.shownTime = shownTime;
    this.clicks = 0;
    products.push(this);
}
let productsImages = ['bag.jpg','banana.jpg','bathroom.jpg', 'boots.jpg','breakfast.jpg', 'boots.jpg','bubblegum.jpg', 'chair.jpg',
'cthulhu.jpg','dog-duck.jpg', 'dragon.jpg', 'pen.jpg','pet-sweep.jpg', 'scissors.jpg','shark.jpg','sweep.jpg',
'tauntaun.jpg','unicorn.jpg','water-can.jpg', 'wine-glass.jpg'];
