/* ====================================
  Initialize AOS Libruary
====================================*/

$('.box h3').attr('data-aos', 'zoom-in');
$('.box h3').attr('data-aos-duration', '600');

$('.home .last-campaigns .campaigns .campaign').attr('data-aos', 'fade-up');
$('.home .last-campaigns .campaigns .campaign').attr('data-aos-duration', '600');

$('.home .members .users .user').attr('data-aos', 'fade-up');
$('.home .members .users .user').attr('data-aos-duration', '600');

$('.home .last-news .news .new').attr('data-aos', 'fade-up');
$('.home .last-news .news .new').attr('data-aos-duration', '600');

AOS.init();

/* ====================================
  Toggle Search Input When Clicking The Icon On Mobile Screens
====================================*/
$('i.search-icon').on('click', function() {

  $(this).siblings('.input').toggleClass('show')

});

/* ====================================
  Toogle Navbar Menu
====================================*/

$('.navbar .menu .toggle-menu').on('click', function() {

  $(this).find('.animated-icon').toggleClass('open');
  $('.menu.toggle').slideToggle(500);

});

$('.top-side .scroll-menu .toggle').on('click', function() {

  $(this).siblings('.menu').slideToggle(200);

});

/* ====================================
  Show/Hide Password
====================================*/

$('.show-pwd').click(function() {
  var type = $(this).siblings('.input').attr('type');

  if(type == 'password') {
    $(this).siblings('.input').attr('type', 'text');
  } else {
    $(this).siblings('.input').attr('type', 'password');
  }

  $(this).toggleClass('fa-eye, fa-eye-slash');

});

/* ====================================
  Switch Between Login & Signup Tabs
====================================*/

$('.tab-header').on('click', function() {

  var tab = '#' + $(this).data('tab');
  $(this).addClass('active').siblings('.tab-header').removeClass('active');
  $(tab).fadeIn(500).addClass('active').siblings('.tab').css('display', 'none').removeClass('active');

});

/* ====================================
  Fix Header On Scroll
====================================*/

$(document).on('scroll', function() {

  var scroll = $(document).scrollTop();

  if(scroll > 300) {
    $('.header').addClass('fixed');
  } else {
    $('.header').removeClass('fixed');
  }

});

/* ====================================
  Images Slider
====================================*/

$('.slider .dots .dot').click(function() {

  var slide = '#' + $(this).data('slide');

  $(this).addClass('active').siblings('.dot').removeClass('active');
  $(slide).addClass('active').siblings('img').removeClass('active');

});

/* ====================================
  Compaigns Categories Menu
====================================*/

$('.campaigns .cat-menu').on('click', function() {
  $(this).find('.categories').slideToggle(200);
});
