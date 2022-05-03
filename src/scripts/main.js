var isMobile = false;

if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
  || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
  isMobile = true;
  $('body').addClass('is-mobile-device');
} else {$('body').addClass('is-computer');}

$(window).on('load', function () {
  $('.main_loader loader').fadeOut();
  $('.main_loader').delay(350).fadeOut('slow'); 
  $('body').delay(350).css({'overflowY': 'visible'}).addClass('page_loaded home_animate');
  $('html, body').animate({scrollTop: 0}, 0);
});

var home_icons_list = $('.home_icons_list ul');
var home_logos_list = $('.home_logos_list ul');
var svg__icon = $('#svg_icon');
var svg__title = $('#svg_title');
var svg__name = $('#svg_name');
var svg__code = $('#svg_code');
var svg_view = $('.svg_view');
var svg_code_copy = $('.svg_code_copy_button');
var search_svg = $('.search_svg');

for (let i = 0; i < iconsArray.length; i++) {
  const svg = iconsArray[i];
  home_icons_list.append(`
    <li class="icon-item svg_icon-${i}">
      <span class="title_icon_for_search title_icon-${i}"></span>
      <label for="" class="svg_container" id="svg_icon-${i}">
        
      </label>
    </li>
  `);
  var svg_content = $(`#svg_icon-${i}`);
  var svgName = $(`.title_icon-${i}`);
  svg_content.append(svg.svg);
  svgName.text($(`#svg_icon-${i}`).find('svg').attr('id'));
  // setInterval(function () {
  //   var svg_container = $(`.svg_icon-${i}`);
  //   svg_container.addClass('is-show');
  // }, i / 10 * iconsArray.length);

  // var svg__type = svgName.text();
  // if (svg__type.split(/\W+/).includes('outline')) {
  //   svg_content.hide();
  // }
  
  $(document).on('click', `#svg_icon-${i}`, function () {
    $('.svg_container').removeClass('is-active');
    $(this).addClass('is-active');
    var svg = $(this);
    var svg_icon = svg.find('svg');
    var svg_name = svg.find('svg').attr('id');
    var svg_title = svg.find('svg title').text();
    var svg_code = svg.html();

    svg__icon.html('');
    svg_icon.clone().appendTo(svg__icon);
    svg__name.text(svg_name);
    svg__title.text(svg_title);
    svg__code.text(svg_code);
    $('.svg_code').scrollLeft(0);

    if (!svg_view.hasClass('is-show')) {
      svg_view.addClass('is-show');
    } else {  }

    svg_code_copy.on('click', function () {
      var $copy = $("<input>");
      $('body').append($copy);
      $copy.val(svg_code).select();
      document.execCommand('copy');
      $copy.remove();
      $('.copied').addClass('is-copied');
      setTimeout(function () {
        $('.copied').removeClass('is-copied');
      }, 1000);
    });
  });
}
for (let i = 0; i < logosArray.length; i++) {
  const logo_svg = logosArray[i];
  home_logos_list.append(`
    <li class="icon-item svg_icon-${i}">
      <span class="title_icon_for_search title_icon-${i}"></span>
      <label for="" class="svg_container" id="logo_svg_icon-${i}">
        
      </label>
    </li>
  `);
  var logos_svg_content = $(`#logo_svg_icon-${i}`);
  var svgName = $(`.title_icon-${i}`);
  logos_svg_content.append(logo_svg.svg);
  svgName.text(logos_svg_content.find('svg').attr('id'));
  
  $(document).on('click', `#logo_svg_icon-${i}`, function () {
    $('.svg_container').removeClass('is-active');
    $(this).addClass('is-active');
    var svg = $(this);
    var svg_icon = svg.find('svg');
    var svg_name = svg.find('svg').attr('id');
    var svg_title = svg.find('svg title').text();
    var svg_code = svg.html();

    svg__icon.html('');
    svg_icon.clone().appendTo(svg__icon);
    svg__name.text(svg_name);
    svg__title.text(svg_title);
    svg__code.text(svg_code);
    $('.svg_code').scrollLeft(0);

    if (!svg_view.hasClass('is-show')) {
      svg_view.addClass('is-show');
    } else {  }

    svg_code_copy.on('click', function () {
      var $copy = $("<input>");
      $('body').append($copy);
      $copy.val(svg_code).select();
      document.execCommand('copy');
      $copy.remove();
      $('.copied').addClass('is-copied');
      setTimeout(function () {
        $('.copied').removeClass('is-copied');
      }, 1000);
    });
  });
}

$('.amount_of_svgs').text(iconsArray.length + logosArray.length);

$(document).scroll(function () {
  $('.svg_container').removeClass('is-active');
  svg_view.removeClass('is-show');
});

$('.home_search, .home_title').click(function () {
  $('.svg_container').removeClass('is-active');
  $('.svg_view').removeClass('is-show');
});