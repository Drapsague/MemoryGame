document.addEventListener('DOMContentLoaded', function() {
    let cardImages = document.querySelectorAll('.card-back');
    let imageSources = [];
    cardImages.forEach((img,index) => {
        imageSources.push(img.src); 
    });
    let tob = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
    let len = tob.length;
    cardImages.forEach((img, index) => {
        let a = Math.floor(Math.random() * tob.length);
        img.src = imageSources[tob[a]];
        let indi = tob.indexOf(tob[a]);
        tob.splice(indi, 1);
        tob.length = len - index - 1 ;
    });
});
function verifTab(tab, numb, imageSources){
    let temp = 0;
    for(let i = 0; i < tab.length*2; i++){
        if (imageSources[numb] === tab[i]){
            temp++;
        }
    }
    return temp;
}
let count = 0;
let firstCard, secondCard;
let firstCardImg, secondCardImg;
document.querySelectorAll('.card').forEach(function(cardElement) {
    cardElement.addEventListener('click', function() {
        let front = this.querySelector(`.card-front`);
        let back = this.querySelector(`.card-back`);
        if (!front.classList.contains('hidden')&& count !== 2 && i !== 8){
            back.classList.add('visible');
            front.classList.add('hidden');
            count++;
            if(!firstCard){
                firstCard = this;
                firstCardImg = firstCard.querySelector('img').src;
            }
            else {
                secondCard = this;
                secondCardImg = secondCard.querySelector('img').src;
                setTimeout(checkMemo,500);
            }
            cardElement.classList.add('flip');
        }
                
    });
});
let i = 0;
function checkMemo(){
    if (firstCardImg === secondCardImg){
        firstCard.classList.toggle('is-flipped');
        secondCard.classList.toggle('is-flipped');
        firstCard.classList.add(`matched`);
        secondCard.classList.add(`matched`);
        i++;
        if (i === 8 ){
            win() ;
            setTimeout(resetGame,1000 );
        } 
    }
    else {
        console.log('looser');
        console.log(firstCardImg, secondCardImg);
        let aFront =  firstCard.querySelector(`.card-front`);
        let aBack = firstCard.querySelector(`.card-back`);
        let bFront = secondCard.querySelector(`.card-front`);
        let bBack = secondCard.querySelector(`.card-back`);
        aFront.classList.remove('hidden');
        aBack.classList.remove('visible');
        bFront.classList.remove('hidden');
        bBack.classList.remove('visible')
    }
    firstCard = null;
    secondCard = null;
    firstCardImg = null;
    secondCardImg = null;
    count = 0;
}
function win(){
    var message = document.getElementById(`winMessage`);
    message.textContent = "Congrat, You Won !!";
}
function resetGame(){
     window.location.reload();
}
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}