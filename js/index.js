// shrink and slightly relcolor navbar on scroll 
$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('navbar-shrink');
  } else {
    $('nav').removeClass('navbar-shrink');
  }
});

//this is for linking to an internal reference point
$('a.page-scroll').click(function() {
  //$(this.hash) returns the id given in the link
  var target = $(this.hash);
  if (target.length) {
    $('html,body').animate({
      scrollTop: target.offset().top - 100
    }, 750);
    return false;
  }
});