const swiperHome = new Swiper('.swiper-home', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    speed: 1500,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
})
var swiperPro = new Swiper(".swiper-thumb", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiperPro2 = new Swiper(".swiper-pro", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiperPro,
    },
});

function activeTab(obj)
{
    jQuery('.tab-wrapper ul li').removeClass('active');
 
    jQuery(obj).addClass('active');
 
    var id = jQuery(obj).find('a').attr('href');
 
    jQuery('.tab-item').hide();
 
    jQuery(id) .show();
}

jQuery('.tab li').click(function(){
    activeTab(this);
    return false;
});

activeTab(jQuery('.tab li:first-child'));

jQuery(".cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
jQuery(".qtybutton").on("click", function () {
    var $button = jQuery(this);
    var oldValue = $button.parent().find("input").val();
    if ($button.text() == "+") {
        var newVal = parseFloat(oldValue) + 1;
    } else {
        // Don't allow decrementing below zero
        if (oldValue > 0) {
            var newVal = parseFloat(oldValue) - 1;
        } else {
            newVal = 0;
        }
    }
    $button.parent().find("input").val(newVal);
});
