'use strict';
let minAttempts = 0;
let maxAttempts;
let products = [];
let attemptsEl = document.getElementById('attempts');
let numberOfClicks = [];
let numberOfViews = [];
let newProductsName = [];
let displayedIndex = [];


function productImage(productName){
    this.productName = productName.split('.')[0];
    this.source = 'images/' + productName;
    this.clicks = 0;
    this.views = 0;
    products.push(this);
    newProductsName.push(this.productName);
}

let productsImages = ['bag.jpg','banana.jpg','bathroom.jpg', 'boots.jpg','breakfast.jpg', 'bubblegum.jpg', 'chair.jpg',
'cthulhu.jpg','dog-duck.jpg', 'dragon.jpg', 'pen.jpg','pet-sweep.jpg', 'scissors.jpg','shark.jpg','sweep.png',
'tauntaun.jpg','unicorn.jpg','water-can.jpg', 'wine-glass.jpg'];
for ( let i = 0; i < productsImages.length; i++){
    new productImage(productsImages[i]);
}


function submiting(){
    let submittedAttempts = document.getElementById('insertedAttempts').value;
  maxAttempts = submittedAttempts;
}

function generateProduct(){
    return Math.floor(Math.random() * products.length);
}
let leftPart = document.getElementById('left');
let middlePart = document.getElementById('middle');
let rightPart = document.getElementById('right');


let leftImageIndex;
let middleImageIndex;
let rightImageIndex;



function renderProducts(){
     leftImageIndex = generateProduct();
     middleImageIndex = generateProduct();
     rightImageIndex = generateProduct();
 

while( leftImageIndex === middleImageIndex || leftImageIndex === rightImageIndex || rightImageIndex === middleImageIndex || displayedIndex[0]===leftImageIndex || displayedIndex[0] === middleImageIndex ||
    displayedIndex[0] === rightImageIndex || displayedIndex[1] === leftImageIndex || displayedIndex[1] === middleImageIndex || displayedIndex[1] === rightImageIndex ||
    displayedIndex[2] === leftImageIndex || displayedIndex[2] === middleImageIndex || displayedIndex[2] === rightImageIndex ){
  leftImageIndex = generateProduct();
  rightImageIndex = generateProduct();
  middleImageIndex = generateProduct();
} 
displayedIndex = [leftImageIndex, middleImageIndex, rightImageIndex ];


leftPart.setAttribute('src', products[leftImageIndex].source);
products[leftImageIndex].views++
middlePart.setAttribute('src', products[middleImageIndex].source);
products[middleImageIndex].views++
rightPart.setAttribute('src', products[rightImageIndex].source);
products[rightImageIndex].views++
attemptsEl.textContent = minAttempts;
}


console.log(minAttempts);
renderProducts();
leftPart.addEventListener('click', countingClicks);
middlePart.addEventListener('click', countingClicks);
rightPart.addEventListener('click', countingClicks);

function countingClicks(event){
    minAttempts++;
    if (minAttempts <= maxAttempts){
        if ( event.target.id === 'left'){
            products[leftImageIndex].clicks++;
        }
        else if ( event.target.id === 'middle'){
            products[middleImageIndex].clicks++;
        
        }
        else if ( event.target.id === 'right'){
            products[rightImageIndex].clicks++;
        }
        settingsItem();
        renderProducts();
    }

else{
    let buttonEl = document.getElementById('btn');
    buttonEl.addEventListener('click', viewResult);

    

leftPart.removeEventListener('click', countingClicks);
middlePart.removeEventListener('click', countingClicks);
rightPart.removeEventListener('click', countingClicks);

}
function viewResult(){
let  ulEl = document.getElementById('results');
let liEl;
for ( let i = 0; i < products.length; i++){
    liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `${products[i].productName} has ${products[i].views} views and has ${ products[i].clicks} clicks.`
    numberOfClicks.push(products[i].clicks);
    numberOfViews.push(products[i].views);

}
chartRender();
}
}

function chartRender(){
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: newProductsName,
        datasets: [{
            label: '# of Clicks',
            data: numberOfClicks,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
              
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
              
            ],
            borderWidth: 1
        }, {
            label: '# of Views',
            data: numberOfViews,
            backgroundColor: [
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
 }
function settingsItem (){
    let data = JSON.stringify(products);
    localStorage.setItem('productsString', data);
}
function gettingItems (){
    let StringObject = localStorage.getItem('productsString');
    let normalObject = JSON.parse(StringObject);
    if( normalObject !== null){
        products = normalObject;
    }
    
}
gettingItems();