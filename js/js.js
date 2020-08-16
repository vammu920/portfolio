if (window.addEventListener) {
    window.addEventListener('load', typewriter, false);
} else {
    window.attachEvent('onload', typewriter);
}

var counter = 0;

function typewriter() {

    // LOOP FOR EACH WORD IN ARRAY
    //for (let i = 0; i < words.length; i++) {
    const words = [
        'Software Developer',
        'FullStack Developer',
        'Cloud Architect',
        
       
    ];

    if (counter > 2) {
        counter = 0;
    }
    
    const word = words[counter];
    const wordLength = word.length;
    const letterArray = [];
    const wordBox = document.querySelector('#text');

    var timeArray = [1000, 500];
    var spellSpeed = timeArray[Math.floor(Math.random() * timeArray.length)];
    var deleteSpeed = 80;
    var deleteDelay = 1000;
    var iterationDelay = 600;


    // CREATE LETTER ARRAY
    for (let i = 0; i < wordLength; i++) {
        letterArray.push(word.charAt(i));
    }

    var finalLetter = letterArray[wordLength - 1];

    // SPELL OUT WORD FUNCTION
    function spell(x) {
        setTimeout(() => {
            wordBox.innerHTML += letterArray[wordLength - x];
            if (--x) { spell(x); }
            else {
                setTimeout(() => {
                    remove(wordLength);
                }, deleteDelay);
            }
        }, 100);
    }

    // DELETE LETTERS FROM WORD FUNCTION
    function remove(y) {
        setTimeout(() => {
            const string = wordBox.textContent;
            const newString = string.substring(0, string.length - 1);
            wordBox.textContent = newString;
            if (--y) { remove(y); }
            else {
                setTimeout(() => {
                    counter += 1;
                    typewriter();
                }, iterationDelay);
            }
        }, deleteSpeed);
    }

    spell(wordLength);
}


jQuery(function($) {
  
  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {
    
    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');
    
    // Unbind scroll handler if we have no animatables
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }
    
    // Check all animatables and animate them if necessary
        $animatables.each(function(i) {
       var $animatable = $(this);
            if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
            }
    });

    };
  
  // Hook doAnimations on scroll, and trigger a scroll
    $(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});
