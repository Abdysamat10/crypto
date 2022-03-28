
// h e a d e r
window.addEventListener("scroll", function(){
    let header = document.querySelector(".header")
    header.classList.toggle("sticky", window.scrollY > 150)
})
// h e a d e r

// b u r g e r

$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .header__menu').toggleClass('active')
        $('body').toggleClass('lock')
    })
    $('.header__list').click(function(event) {
        $('.header__burger, .header__menu').removeClass('active');
        $('body').removeClass('lock')
    })
})
// b u r g e r
// t i m e r
document.addEventListener('DOMContentLoaded', function() {
    // конечная дата, например 1 июля 2021
    const deadline = new Date(2022, 06, 01);
    // id таймера
    let timerId = null;
    // склонение числительных
    function declensionNum(num, words) {
      return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
    function countdownTimer() {
      const diff = deadline - new Date();
      if (diff <= 0) {
        clearInterval(timerId);
      }
      const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
      $days.textContent = days < 10 ? '0' + days : days;
      $hours.textContent = hours < 10 ? '0' + hours : hours;
      $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
      $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
      $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
      $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
      $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
      $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
    }
    // получаем элементы, содержащие компоненты даты
    const $days = document.querySelector('.timer__days');
    const $hours = document.querySelector('.timer__hours');
    const $minutes = document.querySelector('.timer__minutes');
    const $seconds = document.querySelector('.timer__seconds');
    // вызываем функцию countdownTimer
    countdownTimer();
    // вызываем функцию countdownTimer каждую секунду
    timerId = setInterval(countdownTimer, 1000);
    
  });
// t i m e r


// s l i d e r 
$(document).ready(function(){
    $('.road__slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 700,
        easing: 'linear',
        infinite: true,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 5000,
        centerMode: true,
        centerPadding: '12.5%',
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '25%',
                },
            }
        ]
    });
})
// s l i d e r





