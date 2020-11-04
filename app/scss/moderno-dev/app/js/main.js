$(function(){


   

    $('.icon-th-list').on('click', function(){
        $('.product__item').addClass('list');
        $('.icon-th-list').addClass('active');
        $('.icon-th-large').removeClass('active');
    })

    $('.icon-th-large').on('click', function(){
        $('.product__item').removeClass('list');
        $('.icon-th-large').addClass('active');
        $('.icon-th-list').removeClass('active');
    })

    
    
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: "$"
    });


    $(".rate-star").rateYo({
        rating: 5,
        readOnly: true,
        starWidth: "12px"
      });

    $('.product-slider__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
    })

   $('.header__box-btn').on('click', function(){
       $('.header__box').toggleClass('active');
   })

   $('.header__menu-btn').on('click', function(){
    $('.menu__list').slideToggle();
})
$('.product-one__tabs .tab, .settings__tabs .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
        $('.product-one__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.product-one__tabs .tabs, .settings__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#'+id).addClass('active-tab').fadeIn();
        return false;
    });


   var mixer = mixitup('.products__inner-box');

});