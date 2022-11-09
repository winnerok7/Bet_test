const cards = document.getElementsByClassName('card_wrapper')
const list = document.getElementsByClassName('box_wrapper')
const inp = document.querySelector('.sw_btn input')
const brg = document.querySelector('.burger_menu')
const menu = document.querySelector('.m-menu')
const cls = document.querySelector('.close-menu')
let cheker = false

$(inp).click(function () {
   if (cheker == false) {
      $(cards).css('display', 'grid')
      $(list).fadeOut(500)
      cheker = true;
   } else {
      $(cards).css('display', 'none')
      $(list).fadeIn(500)
      cheker = false;

   }
})

$(brg).click(function () {
   $(menu).addClass('m-menu__active')
})

$(cls).click(function () {
   $(menu).removeClass('m-menu__active')
})