$(function() {
  $(".open-panel").click(function(){
    if($('html').hasClass('open-nav')) {
      // $('.wrap').css('margin-top', headerHeight);
      $('html').removeClass('open-nav');
      // $('header[role=banner]').css('position','fixed');
    } else {
      // $('.wrap').css('margin-top', 0);
      $('html').addClass('open-nav');
      // $('header[role=banner]').css('position','relative');
    }
    $(this).toggleClass('active');
  });
});

$(function() {
  $('ul >:has(ul)').addClass('drop');
});

$(function() {
  if ($(window).width() < mediumBreakPoint) {
    $('li.drop > a').off("click").on("click", function(e) {
      e.preventDefault();
      e.stopPropagation();

      // $('li').removeClass('js-active').find('ul').slideUp();
      $(this).parent('li').toggleClass('js-active').find('ul').stop().slideToggle();

    });
  }
});
