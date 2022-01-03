// Carousel function here
       $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 1,
             autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            nav: true,
            
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })

// end of carousel


$('.owl-carousel').on('translate.owl.carousel', function(e) {
    var index= e.item.index;
    $('.photo').removeClass('animate__animated animate__fadeIn animate__delay-2s');
    $('.photo').eq(index).addClass('animate__animated animate__fadeIn animate__delay-2s');
    $('.description__block').removeClass('animate__animated animate__fadeIn animate__delay-1s');
    $('.description__block').eq(index).addClass('animate__animated animate__fadeIn animate__delay-1s');

});