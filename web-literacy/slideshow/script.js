(function(global, doc, $, undefined){
  $(function onReady (argument) {
      var win = $(global),
          prev,
          next,
          keys;

    $('.slide .next').on('click', function next (e) {
      var nextSlide = $(this).parent().next(),
          nextSlideTop  = nextSlide.position().top;


      win.scrollTop(nextSlideTop);
    });

    $('.slide .prev').on('click', function prev (e) {
      var prevSlide = $(this).parent().prev(),
          prevSlideTop = prevSlide.position().top;

      win.scrollTop(prevSlideTop);
    });

    win.on('keydown', function(event){
        var key = event.keyCode,
            active = $('.presentation .active'),
            next,
            prev,
            first = $('.presentation .slide').first(),
            last = $('.presentation .slide').last();

        if (!active.length) {
          active = $('.presentation .slide:first');
        }

        next = active.next();
        prev = active.prev();

        //
        //  Prev Slide
        //
        if (key === 37 || key === 38) {
          console.log('prev');

          if (!active.is(first)) {
            active.removeClass('active');
            prev.addClass('active');
            win.scrollTop(prev.position().top);
          } else {
            console.log('at the beginning');
          }
        }

        //
        //  Next Slide
        //
        if (key === 39 || key === 40) {
          console.log('next');

          if (!active.is(last)) {
            active.removeClass('active');
            next.addClass('active');
            win.scrollTop(next.position().top);
          } else {
            console.log('at the end');
          }
        }

        event.preventDefault();
    });

    // keys = function handleKeys (e) {
    //   var code = (e||window.event).keyCode;
    //   if (code) {
    //     console.log(code);
    //   }
    // };









  });
}(this, this.document, this.jQuery));