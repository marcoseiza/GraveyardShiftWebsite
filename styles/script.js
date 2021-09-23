(function(window, document, undefined){
// code that should be taken care of right away
window.onload = init;
  function init(){
    // the code to be called when the dom has loaded
    // #document has its nodes
    const toggle = document.getElementById("check");
    toggle.addEventListener("click", () => {
    	let currentStyle = document.getElementById("mobileOverlay").style.display;
      if (currentStyle == "block") {
        document.getElementById("mobileOverlay").style.display = "none";
      } else {
        document.getElementById("mobileOverlay").style.display = "block";
      }
    });

    var elements = document.getElementsByClassName("mobileLink");

    var myFunction = function() {
        var box = document.getElementById("check")
        if (box.checked) {
          box.checked = false;
          document.getElementById("mobileOverlay").style.display = "none";
        }
    };

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', myFunction, false);
    }
  }

})(window, document, undefined);

$( document ).ready(function() {
  window.location.href.split('#')[0];
  (function($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */

    $.fn.visible = function(partial) {

        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

  })(jQuery);

  var win = $(window);

  $(".willSlideUp, .willSlideLeft, .willSlideRight").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("already-visible");
    }
  });

  win.scroll(function(event) {
    $('.willSlideUp').each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("slideUp");
      }
    });

    $('.willSlideLeft').each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("slideLeft");
      }
    });

    $('.willSlideRight').each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("slideRight");
      }
    });
  });

});

// audio scripts

// start playing when the website is clicked
document.addEventListener('click', musicPlay);
let isMusicPlaying = true;

function musicPlay() {
  playPauseMusic();
  document.removeEventListener('click', musicPlay);
}

function playPauseMusic() {
  // depending on if music is playing, play/pause music, set the boolean, and set the animation to pause or run
  if(isMusicPlaying) {
    document.getElementById('audioId').pause();
    isMusicPlaying = false;
    document.getElementById('soundIcon').style['animation-play-state'] = "paused";
  } else {
    isMusicPlaying = true;
    document.getElementById('audioId').play();
    document.getElementById('soundIcon').style['animation-play-state'] = "running";
  }
}
