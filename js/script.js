(function($) {
  var body = $('body');
  var viewportHeight = $(window).height();
  if (viewportHeight > body.outerHeight()) {
    var padding = body.outerHeight() - body.height();
    body.height(viewportHeight - padding);
  }
})(jQuery);