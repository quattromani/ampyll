$(function() {
  $("a[href^='http://'], a[href^='https://']").each (
    function() {
      if(this.href.indexOf(location.hostname) == -1) {
        $(this).attr({ target:'_blank', rel: 'noopener noreferrer'});
      }
    }
  );
});
