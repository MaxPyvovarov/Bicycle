$(document).ready(function () {
    //Mobile menu
    $('.menu-button').on('click', function() {
        $('.navigation-wrapper').addClass('active');
    })
    $('.close-menu').on('click', function() {
        $('.navigation-wrapper').removeClass('active');
    })
    $("#menu").on("click","a", function (event) {
                event.preventDefault();
                var id  = $(this).attr('href'),
                top = $(id).offset().top;
                $('body,html').animate({scrollTop: top}, 700);
            });
        

    //Reviews slider
    const reviewsSlider = new Swiper('.swiper-reviews', {
        direction: 'horizontal',
        loop: true,

        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
});




