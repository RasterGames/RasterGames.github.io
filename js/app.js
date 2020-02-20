
/* Doc on Ready */
$(document).ready(function () {

  $('ul.tabs li').click(function () {
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  });

  resizeTopNav();

});


$(window).resize(function () {

  resizeTopNav();
  updateMobileMenu();

});

/* jQ-2.1.3 */
$('.search-toggle').addClass('closed');

$('.search-toggle .search-icon').click(function (e) {
  if ($('.search-toggle').hasClass('closed')) {
    $('.search-toggle').removeClass('closed').addClass('opened');
    $('.search-toggle, .search-container').addClass('opened');
    $('#search-terms').focus();
  } else {
    $('.search-toggle').removeClass('opened').addClass('closed');
    $('.search-toggle, .search-container').removeClass('opened');
  }
});


function resizeTopNav() {

  //$('nav').css('width', $('body').prop('clientWidth') + 'px');

}

function updateMobileMenu() {
  if ($('body').width() >= 960) {
    $("nav ul.primary li:not(.mobile)").show();
    $(".hamburger").removeClass("is-active");
  } else {
    $("nav ul.primary li:not(.mobile)").hide();
    //$(".hamburger").addClass("is-active");
  }

  if ($("nav ul.primary li:not(.mobile)").is(":hidden")) {
    $(".hamburger").removeClass("is-active");
  }
}

var $hamburger = $(".hamburger");
$hamburger.on("click", function (e) {
  $hamburger.toggleClass("is-active");
  // Do something else, like open/close menu
  $("nav ul.primary li:not(.mobile)").toggle();

});