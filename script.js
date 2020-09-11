var layer = 0;
var layer1  = document.getElementById('layer1');
var layer2  = document.getElementById('layer2');
var layer3  = document.getElementById('layer3');
var layer4  = document.getElementById('layer4');
var layer5  = document.getElementById('layer5');
var candle  = document.getElementById('candle');
var total = 0;

document.getElementById("Chocolatebtn").onclick = function(){
    document.getElementById('chocolateBill').innerHTML = 'Chocolate ----------- 300';
    layer++;
    total += 300;
    if(layer==1){
        layer1.style.visibility = 'visible';
        layer1.style.background = 'rgb(250, 118, 23)';
    }
    if(layer==2){
        layer2.style.visibility = 'visible';
        layer2.style.background = 'rgb(250, 118, 23)';
    }
    if(layer==3){
        layer3.style.visibility = 'visible';
        layer3.style.background = 'rgb(250, 118, 23)';
    }
    if(layer==4){
        layer4.style.visibility = 'visible';
        layer4.style.background = 'rgb(250, 118, 23)';
    }
    if(layer==5){
        layer5.style.visibility = 'visible';
        layer5.style.background = 'rgb(250, 118, 23)';
    }
    if(layer>5){
        total -= 300;
        alert("Can't able to add anymore cake layers");
        candle.style.visibility = 'visible';
        document.getElementById('total').innerHTML = 'Total --------------- '+total;
    }
}

document.getElementById("Strawberrybtn").onclick = function(){
    document.getElementById('strawberryBill').innerHTML = 'Strawberry -------- 100';
    layer++;
    total += 100;
    if(layer==1){
        layer1.style.visibility = 'visible';
        layer1.style.background = 'rgb(247, 102, 126)';
    }
    if(layer==2){
        layer2.style.visibility = 'visible';
        layer2.style.background = 'rgb(247, 102, 126)';
    }
    if(layer==3){
        layer3.style.visibility = 'visible';
        layer3.style.background = 'rgb(247, 102, 126)';
    }
    if(layer==4){
        layer4.style.visibility = 'visible';
        layer4.style.background = 'rgb(247, 102, 126)';
    }
    if(layer==5){
        layer5.style.visibility = 'visible';
        layer5.style.background = 'rgb(247, 102, 126)';
    }
    if(layer>5){
        total -= 100;
        alert("Can't able to add anymore cake layers");
        candle.style.visibility = 'visible';
        document.getElementById('total').innerHTML = 'Total --------------- '+total;
    }
}

document.getElementById("Butterscotchbtn").onclick = function(){
    document.getElementById('butterscotchBill').innerHTML = 'Butterscotch ----- 200';
    layer++;
    total += 200;
    if(layer==1){
        layer1.style.visibility = 'visible';
        layer1.style.background = 'rgb(250, 250, 136)';
    }
    if(layer==2){
        layer2.style.visibility = 'visible';
        layer2.style.background = 'rgb(250, 250, 136)';
    }
    if(layer==3){
        layer3.style.visibility = 'visible';
        layer3.style.background = 'rgb(250, 250, 136)';
    }
    if(layer==4){
        layer4.style.visibility = 'visible';
        layer4.style.background = 'rgb(250, 250, 136)';
    }
    if(layer==5){
        layer5.style.visibility = 'visible';
        layer5.style.background = 'rgb(250, 250, 136)';
    }
    if(layer>5){
        total -= 200;
        alert("Can't able to add anymore cake layers");
        candle.style.visibility = 'visible';
        document.getElementById('total').innerHTML = 'Total --------------- '+total;
    }
}

document.getElementById("Vannilabtn").onclick = function(){
    document.getElementById('vannilaBill').innerHTML = 'Vannila ---------------- 250';
    layer++;
    total += 250;
    if(layer==1){
        layer1.style.visibility = 'visible';
        layer1.style.background = 'white';
    }
    if(layer==2){
        layer2.style.visibility = 'visible';
        layer2.style.background = 'white';
    }
    if(layer==3){
        layer3.style.visibility = 'visible';
        layer3.style.background = 'white';
    }
    if(layer==4){
        layer4.style.visibility = 'visible';
        layer4.style.background = 'white';
    }
    if(layer==5){
        layer5.style.visibility = 'visible';
        layer5.style.background = 'white';
    }
    if(layer>5){
        total -= 250;
        alert("Can't able to add anymore cake layers");
        candle.style.visibility = 'visible';
        document.getElementById('total').innerHTML = 'Total --------------- '+total;
    }
}

document.getElementById("Redvelvetbtn").onclick = function(){
    document.getElementById('redvelvetBill').innerHTML = 'Redvelvet ----------- 350';
    layer++;
    total += 350;
    if(layer==1){
        layer1.style.visibility = 'visible';
        layer1.style.background = 'rgb(247, 46, 46)';
    }
    if(layer==2){
        layer2.style.visibility = 'visible';
        layer2.style.background = 'rgb(247, 46, 46)';
    }
    if(layer==3){
        layer3.style.visibility = 'visible';
        layer3.style.background = 'rgb(247, 46, 46)';
    }
    if(layer==4){
        layer4.style.visibility = 'visible';
        layer4.style.background = 'rgb(247, 46, 46)';
    }
    if(layer==5){
        layer5.style.visibility = 'visible';
        layer5.style.background = 'rgb(247, 46, 46)';
    }
    if(layer>5){
        total -= 350;
        alert("Can't able to add anymore cake layers");
        candle.style.visibility = 'visible';
        document.getElementById('total').innerHTML = 'Total --------------- '+total;
    }
}

document.getElementById("buy").onclick = function(){
    if(layer>=5)
        candle.style.visibility = 'visible';
    document.getElementById('total').innerHTML = 'Total ----------- '+total;
}


// var state = {
//     chocolate: true,
//     strawberry: true,
//     butterscotch: true,
//     vannila: true,
//     redvelvet: true
// };

// function addAll() {
//     addChocolate();
//     addStrawberry();
//     addButterscotch();
//     addVannila();
//     addRedvelvet();
//     // renderButtons();
//     // renderIngredientsBoard();
//     // renderPrice();
// }

// function addChocolate() {
//     let $chocolate = document.querySelector("#layer1");
//     //you can also use getElementById
//     if (state.chocolate) {
//         $chocolate.style.visibility = "visible";
//     } else {
//         $chocolate.style.visibility = "hidden";
//     }
// }

// function addStrawberry() {
//     //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
//     let $strawberry = document.querySelector("#layer2");
//     //you can also use getElementById
//     if (state.strawberry) {
//         $strawberry.style.visibility = "visible";
//     } else {
//         $strawberry.style.visibility = "hidden";
//     }
// }


// function addButterscotch() {
//     //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
//     let $butterscotch = document.querySelector("#layer3");
//     //you can also use getElementById
//     if (state.butterscotch) {
//         $butterscotch.style.visibility = "visible";
//     } else {
//         $butterscotch.style.visibility = "hidden";
//     }
// }


// function addVannila() {
//     //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
//     let $vannila = document.querySelector("#layer4");
//     //you can also use getElementById
//     if (state.vannila) {
//         $vannila.style.visibility = "visible";
//     } else {
//         $vannila.style.visibility = "hidden";
//     }
// }

// function addRedvelvet() {
//     //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
//     let $redvelvet = document.querySelector("#layer5");
//     //you can also use getElementById
//     if (state.redvelvet) {
//         $redvelvet.style.visibility = "visible";
//     } else {
//         $redvelvet.style.visibility = "hidden";
//     }
// }

// document.querySelector("#Chocolatebtn").onclick = function() {
//     state.chocolate = !state.chocolate;
//     addAll();
// };

// // Trial 2 - Setup event listener for the cheese button
// document.querySelector("#Strawberrybtn").onclick = function() {
//     state.strawberry = !state.strawberry;
//     addAll();
// };

// // Trial 2 - Setup event listener for the tomatoes button
// document.querySelector("#Butterscotchbtn").onclick = function() {
//     state.butterscotch = !state.butterscotch;
//     addAll();
// };

// // Trial 2 - Setup event listener for the onion button
// document.querySelector("#Vannilabtn").onclick = function() {
//     state.vannila = !state.vannila;
//     addAll();
// };

// // Trial 2 - Setup event listener for the lettuce button
// document.querySelector("#Redvelvetbtn").onclick = function() {
//     state.redvelvet = !state.redvelvet;
//     addAll();
// };
