$(document).scroll(function () {
  var scroll_top = $(this).scrollTop();
  var offset = $('.home_search').offset();
  var top = offset.top;

  if (scroll_top > top) {
    $('.home_search_fontainer_fixed').addClass('is-show');
  } else {
    $('.home_search_fontainer_fixed').removeClass('is-show');
  }
});

$('.home_search_fontainer_fixed input').keyup(function () {
  var value = $(this).val();
  $('.home_search input').val(value);
});

$('.home_search input').keyup(function () {
  var value = $(this).val();
  $('.home_search_fontainer_fixed input').val(value);
});

$('.search_input').keyup(function () {
  $(document).scroll(function () {
    var scroll_top = $(this).scrollTop();
    var offset = $('.home_search').offset();
    var top = offset.top;
  
    if (scroll_top > top) {
      $('.home_search_fontainer_fixed input').focus();
    } else { $('.home_search input').focus(); }
  });
})

function searchSVG(value, targetSelector) {
  $(targetSelector).show();
  $(targetSelector + ':not(:contains("' + value + '"))').hide();
  if ($('.list_content').length === '') {
    alert()
  }
}

search_svg.keyup(function () {
  searchSVG($(this).val(), '.icon-item');
});

// $('.home_title').delegate('b', 'click', function () {
//   alert($(this).html())
// });