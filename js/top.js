/*
* jquery-match-height 0.7.2 by @liabru
* http://brm.io/jquery-match-height/
* License MIT
*/
(function($) {
    $(function () {
        $('.nav-toggle').on('click', function() {
            $('body').toggleClass('open');
        });
    });
})(jQuery);

$(function(){
  var state = false;
  var scrollpos;

  $('.nav-toggle').on('click', function(){
    if(state == false) {
      scrollpos = $(window).scrollTop();
      $('body').addClass('fixed').css({'top': -scrollpos});
      $('.globalnavi').addClass('open');
      state = true;
    } else {
      $('body').removeClass('fixed').css({'top': 0});
      window.scrollTo( 0 , scrollpos );
      $('.globalnavi').removeClass('open');
      state = false;
    }
  });

});

$(function(){
    $('.js-machheight').matchHeight();
});
/*
$(function(){
  $('.single-item').slick({
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
    fade: true,
  });
});
*/
