var app_logo_svg = $('.icon-logo-star');
var app_nav_link = $('.app_navigation_link');
var app_nav_link_home = $('.app_navigation_link_home');
var app_nav_link_usage = $('.app_navigation_link_usage');

$(document).scroll(function () {
  var scroll_top = $(this).scrollTop();
  if (scroll_top > 100) {
    app_logo_svg.css('transform', 'rotate(' + scroll_top + 'deg)');
    // app_logo_svg.animate({ borderSpacing: 0 }, {
    //   step: function (now, fx) {
    //     $(this).css('transform', 'rotate(' + scroll_top + 'deg)');
    //   },
    //   duration: 'slow'
    // }, 'linear');
  } else {
    app_logo_svg.css('transform', 'rotate(0deg)');
  }
});

app_nav_link_home.addClass('is-active');

$(function showSection () {
  if (app_nav_link_usage.hasClass('is-active')) {
    $('.home_section').removeClass('is-show');
    $('.usage_section').addClass('is-show');
  } else {
    $('.usage_section').removeClass('is-show');
    $('.home_section').addClass('is-show');
  }
}());

$(document).on('click', '.app_navigation_link', function (e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  }, 'smooth');
});

$(document).on('click', '.app_navigation_link_home', function (e) {
  app_nav_link_usage.removeClass('is-active');
  app_nav_link_home.addClass('is-active');
  $('.usage_section').removeClass('is-show');
  $('.home_section').addClass('is-show');
  setTimeout(function () {
    $('body').removeClass('usage_animate').addClass('home_animate');
  }, 0);
});

$(document).on('click', '.app_navigation_link_usage', function (e) {
  app_nav_link_home.removeClass('is-active');
  app_nav_link_usage.addClass('is-active');
  $('.home_section').removeClass('is-show');
  $('.usage_section').addClass('is-show');
  setTimeout(function () {
    $('body').removeClass('home_animate').addClass('usage_animate');
  }, 0);
});

// app_nav_link.click(function () {
//   showSection();
// });