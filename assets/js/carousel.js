const boxCarousel= document.getElementById('container__carousel');

setInterval(function(){
    let carousel= document.querySelectorAll('.carousel-card')[0];
    // console.log(carousel)
    boxCarousel.style.left="calc(var(--width-carousel) *-1)";
    boxCarousel.style.transition="all 2s";
    setTimeout(function(){
        boxCarousel.insertAdjacentElement('beforeend', carousel);
        boxCarousel.style.transition="none";
        boxCarousel.style.left="0";
    }, 2000)
}, 3900)