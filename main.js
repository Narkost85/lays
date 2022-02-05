const puzzle = document.getElementsByClassName('pitem');
const slider = document.querySelector('.puzzleslider');
const text = document.querySelector('.main h1');
const arr = ['lays1.jpg', 'lays2.jpg', 'lays3.jpg', 'lays4.jpg', 'lays5.jpg'];
const arr1 = ['LAYS POTATO', 'LAYS BARBEQUE', 'LAYS BEACON', 'LAYS CRAB', 'LAYS ONION' ];
let current = 0;
for(let i = 0; i < 300; i++) {
    let rand = Math.random()*3;
    slider.innerHTML += '<div class="pitem"></div>';
    puzzle[i].style.animation = 'puzzle 2s linear forwards';
    puzzle[i].style.animationDelay = rand + 's';
}

function puzzleslider(source) {
    slider.innerHTML = '';
    text.style.animation = 'none';
    text.innerText = arr1[source];
    setTimeout(() => text.style.animation = 'text 6s ease', 50);
    for(let i = 0; i < 300; i++) {
        let rand = Math.random()*3;
        slider.innerHTML += '<div class="pitem"></div>';
        puzzle[i].style.animation = 'puzzle 2s linear forwards';
        puzzle[i].style.animationDelay = rand + 's';
        puzzle[i].style.backgroundImage = `url(${arr[source]})`;
    }
}

setInterval(() => {
    current++;
    current == arr.length ? current = 0 : '';
    puzzleslider(current);
}, 6000);
const item = document.querySelectorAll('.product .item');
const audio = new Audio();
audio.src = 'shake.mp3';
item.forEach(item => {
    item.onmouseover = () => {
        audio.play();
        audio.currentTime = 0;
        setTimeout(() => audio.pause(), 1000);
    }
});
const arr2 = ['#FFE501', '#A61C2B', '#00A45D', '#0068B3', '#C2830A', '#7A1D4B', '#A2D5F0', '#C11285', '#E693AB', '#0065AF', '#F4E40A', '#DDE3EB'];
const price = document.querySelectorAll('.product .item a');
const vernagir = document.querySelectorAll('.product .item h2');
price.forEach((item, index) => item.onmouseover = () => {
    item.previousElementSibling.style.color = arr2[index];
    item.previousElementSibling.style.fontSize = '40px';
    item.style.background = arr2[index];
    

});

let x = 0;
let tr = true;
const carousel = document.querySelector('.karusel');
const textitem = document.querySelectorAll('.karusel .frik .item p');
carousel.onmousewheel = function(event) {
        if (tr) {
            let l = event.deltaY;
            x += l / 15; 
            carousel.firstElementChild.style.transform = `rotateY(${x}deg)`; 
            return false;
        }
}
let time = 6000;
const karuselitem = document.querySelectorAll('.karusel .frik .item');
karuselitem.forEach((item, index) => {
    item.onclick = () => {
        tr = false;
        time = 6000;
        karuselitem.forEach(item => item.classList.remove('info'));
        textitem.forEach(item => {
            item.style.opacity = '0';
            item.style.left = '50%';
            item.style.transitionDelay = '0s';
        });
        item.classList.add('info');
        textitem[index].style.opacity = '1';
        textitem[index].style.left = '100%';
        setTimeout(() => {
            tr = true;
            item.classList.remove('info');
            textitem[index].style.opacity = '0';
            textitem[index].style.left = '50%';
            textitem[index].style.transitionDelay = '0s';
        }, time);
        let r = index;
        carousel.firstElementChild.style.transform = `rotateY(-${++r * 50}deg)`;
    }
});