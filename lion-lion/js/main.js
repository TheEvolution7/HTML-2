/**
 * DECLINE & ACEEPT
 */ 
function onDecline(target) {
  $(target).closest('.l-info').fadeOut()
}
function onAccept(target) {
  $(target).closest('.l-info').fadeOut()
}
// open policy
$('.open-policy').click(function(){
  openPolicy() 
})
function openPolicy() {
  var modalPolicy = $('#l-modal-policy')
  modalPolicy.fadeIn()
}

$(window).on('load', function() {

  setTimeout(() => {
    if (window.location.hash) {
      setTimeout(function() {
          $('html, body').animate({
              scrollTop: $(window.location.hash).offset().top
              }, 1000)
          console.log('aaa1')
      }, 1000);
    }
  }, 2000);
});

// $("a").click(function(event){
//   event.preventDefault();
//   linkLocation = this.href;
//   $("body").fadeOut(1000, redirectPage(linkLocation));      
// });

function redirectPage(link) {
  document.location.href= link;
}



function PopUp(hideOrshow) {
  if (hideOrshow === 'hide') {
    $('#cookie-popup').fadeOut('slow')
  }
  else if(localStorage.getItem("popupWasShown") !== "1" && hideOrshow === 'show') {
      document.getElementById('cookie-popup').removeAttribute('style');
      localStorage.setItem("popupWasShown", "1");
  }
}
window.onload = function () {
  setTimeout(function () {
      PopUp('show');
      console.log('aaa')
      
  }, 1000);
  // setTimeout(function () {
  //   $('.slick-arrow').attr('data-trans', '')
  // }, 100);
  
}

$('.n-select').niceSelect();


function hideNow(e) {
  console.log(e.target.id)
  if (e.target.id == 'cookie-popup') {
    console.log('aaa')
    $('#cookie-popup').fadeOut('slow')
      // document.getElementById('cookie-popup').style.display = 'none';
      localStorage.setItem("popupWasShown", "1");
  }
}





(function($){
  /**
   * Magic Scroll
   */
  // init controller
  var controller = new ScrollMagic.Controller();

  var section = $('.l-main [data-trans]')
  function initSection(index) {
    var type = ''
    var direction = ''
    var fadeOutUp = new ScrollMagic.Scene({
      triggerElement: section[index], 
      triggerHook: ($('.l-logo-header').position().top + $('.l-logo-header').height() + 30) / $(window).innerHeight(),
      duration: 100
    })
    .addTo(controller)
    // .addIndicators() // add indicators (requires plugin)
    .on("update", function (e) {
      if (type === 'inside' && direction === 'top' && index !== 0 ) {
        type = ''
        direction = ''
      } else if (type === 'inside' && direction === 'bottom' && index == 0) {
      }
    })
    .on("enter leave", function (e) {
      type = e.type == "enter" ? "inside" : "outside"
    })
    
    .on("start end", function (e) {
      direction = e.type == "start" ? "top" : "bottom"
    })
    .on("progress", function (e) {
      $(section[index]).css({ 'opacity': 1 - (e.progress.toFixed(10)), 'animation': 'none' })
      if (e.progress.toFixed(10) > 0.9) {
        $(section[index]).css('pointer-events', 'none')
      }
      else {
        $(section[index]).css('pointer-events', 'all')
      }
    });

    var fadeOutDown = new ScrollMagic.Scene({
      triggerElement: section[index], 
      triggerHook: ($(window).height() - $('.l-footer').height() - 10) / $(window).height(),//($('.l-logo-header').position().top + $('.l-logo-header').height() + 100) / $(window).innerHeight(),
      duration: 150
    })
    .addTo(controller)
    // .addIndicators() // add indicators (requires plugin)
    .on("update", function (e) {
      if (type === 'inside' && direction === 'top' && index !== 0 ) {
        type = ''
        direction = ''
      } else if (type === 'inside' && direction === 'bottom' && index == 0) {
      }
    })
    .on("enter leave", function (e) {
      type = e.type == "enter" ? "inside" : "outside"
    })
    
    .on("start end", function (e) {
      direction = e.type == "start" ? "top" : "bottom"
    })
    .on("progress", function (e) {
      $(section[index]).css({ 'opacity': e.progress.toFixed(10)*2.5 , 'animation': 'none' })
    });
  }

  function activeTab(obj){
      $('.tab-wrapper ul li').removeClass('active');
      $(obj).addClass('active');
      var id = $(obj).find('a').attr('href');
      $('.tab-item').hide();
      $(id) .show();
  }
  $('.tab li').click(function(){
    activeTab(this);
    let $tabPane = $($(this).attr('href'));
    $('.home-ourwork-slide').slick('refresh');
    // $('.home-ourwork-slide').slick();
    // sliders.homeOurwork('refresh');
    return false;
    
  });
  activeTab($('.tab li:first-child'));
  

  /**
   * Commons
   */
  var base = {
    // loading
    loading: (function() {

      let tl = anime.timeline({
        easing: 'easeOutExpo',
        duration: 1500,
        // direction: 'alternate',
        // loop: true,
      });
        // tl.add({
        //   targets: '.base-loading-logo svg path',
        //   strokeDashoffset: [anime.setDashoffset, 0],
        //   easing: 'easeInOutCubic',
        //   duration: 2200
        // })
        tl.add({
          targets: '.base-loading-logo svg path',
          fillOpacity: [0, 1],
          easing: 'easeInOutCubic',
          duration: 1400,
          
        })
      // anime({
      //   targets: '.base-loading-logo svg path',
      //   // filter: ['blur(2px)', 'blur(0px)'],
      //   strokeDashoffset: [anime.setDashoffset, 0],
      //   loop: true,
      //   direction: 'alternate',
      //   easing: 'easeInOutSine',
      // })
    })(),
    initWow: function() {
      var wow = new WOW({
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       50,          // default
        mobile:       true,       // default
        live:         true        // default
      })
      wow.init();
    },
    // header logo effect
    animeLogoHeader: function() {
      new ScrollMagic.Scene({
        triggerElement: '.l-home-page .kv', 
        triggerHook: 0,
        duration: '100%'
      })
      .addTo(controller)
      // .addIndicators() // add indicators (requires plugin)
      .on("enter", function (e) {
        // $(".l-logo").fadeOut()
      })
      .on("leave", function (e) {
        // $(".l-logo").fadeIn()
      });
    },
    hash: function() {
      var target = location.hash
      if (target) {
        $('body, html').animate({ scrollTop: $(target).offset().top })
      }
    },
    scrollToId: (function(){
      $('a[href^="#"][data-scroll]').click(function(e) {
        e.preventDefault()
        var id = $(this).attr('href')
        $('.l-hamburger--close').click()
        $('body, html').animate({ scrollTop: $(id).offset().top })
      })
    })()
  }

  /**
   * Hamburger button
   */
  var menu = {
    init: (function() {
      var menuEffect = anime({
        targets: '.l-menu li',
        opacity: [0,1],
        translateY: [-10, 0],
        delay: function(el, i) { return i * 100; },
        easing: 'easeInOutSine',
        autoplay: false
      });

      var menu = $('.l-menu-overlay')
      menu.css('height', $(window).height())
      $('.l-hamburger').click(function() {
        $(this).toggleClass('l-hamburger--close')
        if (!$(this).hasClass('l-hamburger--close')) {
          menu.fadeOut()
          $('body').removeClass('disable-scroll')
        } else {
          menu.fadeIn()
          menuEffect.play()
          $('body').addClass('disable-scroll')
        }
      })
    })(),
  }

  /**
   * Modal
   */
  var modal = {
    init: (function() {
      var btnClose = $('.l-modal--close')
      btnClose.click(function() {
        var modal = $(this).closest('.l-modal')
        modal.fadeOut()
        if ($('body').hasClass('disable-scroll')) {
          $('body').removeClass('disable-scroll')
        }
      })
    })(),
    thankyou: function() {
      // open modal thankyou
      var modalThankyou = $('#l-modal-thankyou')
      modalThankyou.fadeIn()
      $('body').addClass('disable-scroll')
    }
  }
  
  /**
   * Sliders
   */
  var sliders = {
    homeOurwork: function() {
      $('.home-ourwork-slide').slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        touchThreshold: 500,
        responsive: [
          {
            breakpoint: 9999,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: false,
              dots: false
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
        ]
      });
    },
    leader: function() {
      $('.l-leader-list').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
        ]
      });
    },
    value: function() {
      $('.l-value-list').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
        ]
      });
    },
    office: function() {
      $('.l-offices-list').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
        ]
      });
    }
  }

  /**
   * form
   */
  var form = {
    initInputControls: (function(){
      $('.l-form-upload').each(function(){
        var $this = $(this)
        $('span', this).html("No file chosen")
        var btnUploadFile = $('label' , this)
        btnUploadFile.on('click', function() {
          // $('.file').trigger('click');
          $(this).addClass('has-file');
          
        });
      
        $('input[type=file]', this).on('change', function() {
          var fileName = $(this)[0].files[0].name;   
        
          $('span', $this).html(fileName);
          btnUploadFile.html('Reupload')
        });
      });
      
      $('.tag-other').each(function(){
        var $this = $(this)
        $('input[type=checkbox]',this).on('change',function(){
          if ($(this).is(':checked')) {
            $('input[type=text]', $this).prop('disabled', false);
            $('input[type=text]', $this).prop('required', true);
            $('input[type=text]', $this).focus()
          }
          else {
            $('input[type=text]', $this).prop('disabled', true);
            $('input[type=text]', $this).prop('required', false);
          }
        })
      })
    
      $('.l-form-muti-upload').each(function() {
        var $this = $('.l-upload-list',this);
        var upload = 2
        
        
        $('.l-form-addmore',this).on('click', function(e) {
          e.preventDefault();
          var recRow = '<div class="l-form-upload" id="l-form-upload-'+upload+'"><label class="input-style" for="file-'+upload+'">Upload</label><input type="file"tag-other accept=" .pptx, .pdf, .doc, .jpeg, .png" id="file-'+upload+'"><span>No file chosen</span></div>';
          if (upload < 4) {
            $($this).append(recRow);

            $('#l-form-upload-'+upload).each(function(){
              var $this = $(this)
              $('span', this).html("No file chosen")
              var btnUploadFile = $('label' , this)
              btnUploadFile.on('click', function() {
                // $('.file').trigger('click');
                $(this).addClass('has-file');
                
              });
            
              $('input[type=file]', this).on('change', function() {
                var fileName = $(this)[0].files[0].name;   
              
                $('span', $this).html(fileName);
                btnUploadFile.html('Reupload')
              });
            });

            upload ++;
          }
          if (upload >= 4){
            $(this).html('+ Upload maximum 3 files')
          }
          
        })
      })
    })(),
    initFormSubmitResume: (function() {
      var form = $('#l-form-resume')
      form.submit(function(e) {
        e.preventDefault()
        console.log('Resume submited')
        modal.thankyou()
      })
      var btnSubmit = $('#btn-submit-form-resume')
      btnSubmit.click(function() {
        form.submit()
      })
    })(),
    initFormSubmitBrief: (function() {
      var form = $('#l-form-brief')
      form.submit(function(e) {
        e.preventDefault()
        console.log('Brief submited')
        modal.thankyou()
      })
    })(),
    initFormEmailUs: (function() {
      var form = $('#l-form-email-us')
      form.submit(function(e) {
        e.preventDefault()
        console.log('Email submited')
        modal.thankyou()
      })
    })(),
    initFormNewsletter: (function() {
      var form = $('#l-form-newsletter')
      form.submit(function(e) {
        e.preventDefault()
        console.log('Newsletter submited')
      })
    })(),
  }
  
  var home = {
    init: function() {
      home.setHeightSection()
      home.kvLogoEffect()
      home.kvIconScrollDownEffect()
      home.sectionScrollMagic()
      home.homeServiceEffect()
      home.homeNetworkEffect()
      home.homeOurwork()
    },
    setHeightSection: function() {
      $('.kv, .l-section, body::before').css({ 'min-height': $(window).height()*70/100 })
    },
    kvLogoEffect: function() {
      // kv effect
      var direction = 'top'
      var animeHomeKVLogo = new ScrollMagic.Scene({
        triggerElement: '.l-home-page .kv-logo-wrap',
        triggerHook: $('.l-logo-header').position().top / $(window).innerHeight(),
        duration: 100
      })
      .addTo(controller)
      // .addIndicators() // add indicators (requires plugin)
      .on("enter", function (e) {
        // if (direction === 'top') {
          $(".l-home-page .kv .logo-effect").addClass('fixLogo')
        // }
        if (direction === 'bottom') {
          $('.l-logo-header').css({ 'opacity': 0 })
        }
      })
      .on("leave", function (e) {
        if (direction === 'bottom') {
          $(".l-home-page .kv .logo-effect").removeClass('fixLogo')
          $('.l-logo-header').css({ 'opacity': 1 })
          $(".l-home-page .kv .logo-effect .logo").css({ 'opacity': 0 })
        } else if (direction === 'top') {
          $(".l-home-page .kv .logo-effect").removeClass('fixLogo')
          $('.l-home-page .l-logo-header').css({ 'opacity': 0 })
        }
      })
      .on("start end", function (e) {
        direction = e.type === 'start' ? 'top' : 'bottom'
      })
      .on("progress", function (e) {
        var translateX = (-e.progress.toFixed(3)) + 'px'
        var translateY = (e.progress.toFixed(3) * 4) + 'px'
        var scale = (1 - e.progress.toFixed(3) * 0.76)
        var opacity = 1// - e.progress.toFixed(3)
        $(".l-home-page .kv .logo-effect .logo").css({ 'opacity': opacity, 'transform': `translate(${translateX}, ${translateY}) scale(${scale})` });
      });
    },
    kvIconScrollDownEffect: function() {
      anime({
        targets: '.l-icon-scroll-down',
        translateY: [0, '30%'],
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutSine',
      })
    },
    homeServiceEffect: function() {
      // scroll
      // button 1 
      var button1Opacity = new ScrollMagic.Scene({
        triggerElement: '.l-home-page .l-section-service .group-button .l-btn-service--1',
        triggerHook: 1,
        duration: 200, //$('.l-home-page .l-section-service .group-button').innerHeight() + $(window).height() / 2
      })
      .addTo(controller)
      // .addIndicators() // add indicators (requires plugin)
      .on("progress", function(e) {
        var opacity = e.progress.toFixed(3)
        $('.l-home-page .l-section-service .group-button .l-btn-service--1').css( {'opacity': opacity })
      })
      var button1Position = new ScrollMagic.Scene({
        triggerElement: '.l-home-page .l-section-service .group-button .l-btn-service--3',
        triggerHook: 1,
        duration: $(window).height() - $('.l-logo-header').height()
      })
      .addTo(controller)
      // .addIndicators() // add indicators (requires plugin)
      .on("progress", function(e) {
        var left = ((e.progress.toFixed(3) - 0.43) * -122) + 'vw'
        $('.l-home-page .l-section-service .group-button .l-btn-service--1').css( { 'left': left })
      })

      // button 2
      var button2Opacity = new ScrollMagic.Scene({
        triggerElement: '.l-home-page .l-section-service .group-button .l-btn-service--2',
        triggerHook: 1,
        duration: 200, //$('.l-home-page .l-section-service .group-button').innerHeight() + $(window).height() / 2
      })
      .addTo(controller)
      // .addIndicators() // add indicators (requires plugin)
      .on("progress", function(e) {
        var opacity = e.progress.toFixed(3)
        $('.l-home-page .l-section-service .group-button .l-btn-service--2').css( {'opacity': opacity })
      })
      var button2Position = new ScrollMagic.Scene({
        triggerElement: '.l-home-page .l-section-service .group-button .l-btn-service--3',
        triggerHook: 1,
        duration: $(window).height() - $('.l-logo-header').height()
      })
      .addTo(controller)
      // .addIndicators() // add indicators (requires plugin)
      .on("progress", function(e) {
        var right = ((e.progress.toFixed(3) - 0.43) * -122) + 'vw'
        $('.l-home-page .l-section-service .group-button .l-btn-service--2').css( { 'right': right })
      })

      // button 3
      var button3Opacity = new ScrollMagic.Scene({
        triggerElement: '.l-home-page .l-section-service .group-button .l-btn-service--3',
        triggerHook: 1,
        duration: 200, //$('.l-home-page .l-section-service .group-button').innerHeight() + $(window).height() / 2
      })
      .addTo(controller)
      // .addIndicators() // add indicators (requires plugin)
      .on("progress", function(e) {
        var opacity = e.progress.toFixed(3)
        $('.l-home-page .l-section-service .group-button .l-btn-service--3').css( {'opacity': opacity })
      })
      var button3Position = new ScrollMagic.Scene({
        triggerElement: '.l-home-page .l-section-service .group-button .l-btn-service--3',
        triggerHook: 1,
        duration: $(window).height() - $('.l-logo-header').height()
      })
      .addTo(controller)
      // .addIndicators() // add indicators (requires plugin)
      .on("progress", function(e) {
        var left = ((e.progress.toFixed(3) - 0.43) * -122) + 'vw'
        $('.l-home-page .l-section-service .group-button .l-btn-service--3').css( { 'left': left })
      })

      // button 4
      var button4Opacity = new ScrollMagic.Scene({
        triggerElement: '.l-home-page .l-section-service .group-button .l-btn-service--1',
        triggerHook: 1,
        duration: 200, //$('.l-home-page .l-section-service .group-button').innerHeight() + $(window).height() / 2
      })
      .addTo(controller)
      // .addIndicators() // add indicators (requires plugin)
      .on("progress", function(e) {
        var opacity = e.progress.toFixed(3)
        $('.l-home-page .l-section-service .group-button .l-btn-service--4').css( {'opacity': opacity })
      })
      var button4Position = new ScrollMagic.Scene({
        triggerElement: '.l-home-page .l-section-service .group-button .l-btn-service--3',
        triggerHook: 1,
        duration: $(window).height() - $('.l-logo-header').height()
      })
      .addTo(controller)
      // .addIndicators() // add indicators (requires plugin)
      .on("progress", function(e) {
        var right = ((e.progress.toFixed(3) - 0.43) * -122) + 'vw'
        $('.l-home-page .l-section-service .group-button .l-btn-service--4').css( { 'right': right })
      })
  
    },
    homeNetworkEffect: function() {
      // network effect
      var videoNetwork = document.getElementById('video-network')
      var animeHomeNetwork = anime({
        targets: '.l-home-page .l-section-network .group-network .l-network',
        opacity: [0, 1],
        visibility: ['hidden', 'visible'],
        translateX: function(target, index) {
          // console.log(a, b)
          if (index == 0) {
            return ['-10vw', 0]
          } else if (index == 2) {
            return ['10vw', 0]
          }
        },
        translateY: function(target, index) {
          // console.log(a, b)
          if (index == 1) {
            return ['10vw', 0]
          }
        },
        delay: anime.stagger(100, {start: 500}),
        easing: 'cubicBezier(.5, .05, .1, .3)',
        duration: 500,
        autoplay: false,
        begin: function() {
          if (videoNetwork) {
            $(videoNetwork).animate({opacity: 0})
            $('img', videoNetwork).animate({opacity: 0})
            videoNetwork.currentTime = 0
          }
        },
        complete: function() {
          if (videoNetwork) {
            if (animeHomeNetwork.direction === 'normal') {
              $(videoNetwork).animate({opacity: 1})
              $('img', videoNetwork).animate({opacity: 1})
            }
            // videoNetwork.play()
          }
        }
      });

      // scroll
      var direction = 'top'
      var scene = new ScrollMagic.Scene({
        triggerElement: '.l-home-page .l-section-network .group-network', 
        triggerHook: 0.7,
        duration: $('.l-home-page .l-section-network .group-network').innerHeight() + $(window).height() / 2
      })
      .addTo(controller)
      // .addIndicators() // add indicators (requires plugin)
      .on("start end", function(e) {
        // animeHomeService.play()
        direction = e.type === 'start' ? 'top' : 'bottom'
      })
      .on("enter leave", function(e) {
        var type = e.type === 'enter' ? 'inside' : 'outside'
        // console.log('end')
        if (type === 'inside') {
          animeHomeNetwork.direction = 'normal'
        } else if (type === 'outside') {
          animeHomeNetwork.direction = 'reverse'
        }
        animeHomeNetwork.restart()
      })
  
    },
    homeOurwork: function() {
      $('.l-ourwork').click(function() {
        var imageUrl = $(this).data('image')
        var modal = $('#l-modal-ourwork')
        var image = $('#l-modal-ourwork-image')
        // var image1 = $('.containerZoom')
        image.attr('src', imageUrl)
        // image1.css('background-image', 'url("' + imageUrl + '")')
        modal.fadeIn()
        if (!$('body').hasClass('disable-scroll')) {
          $('body').addClass('disable-scroll')
        }
      })
    },
    sectionScrollMagic: function() {
      // build scene
      for (let i = 0; i < section.length; i++) {
        initSection(i)
      }
    }
  }

  /**
   * Career
   */
  var career = {
    init: (function() {
        function activeTab(obj){
          // $('.tab-wrapper ul li').removeClass('active');
          $(obj).addClass('active');
          var id = $(obj).attr('href');
          $('.l-detail-item').hide();
          $('.l-box-list').hide();
          $('.l-box-detail').show();
          $(id).fadeIn();
      }
      $('.l-list-career .l-btn-view').click(function(){
          activeTab(this);
          $('#btn-back-home').hide();
          $('#btn-back-list').show();
          return false;
      });
      $('#btn-back-list').click(function(){
          $('#btn-back-home').show();
          $('#btn-back-list').hide();
          $('.l-detail-item').hide();
          $('.l-box-resume').hide();
          $('.l-box-detail').hide();
          $('.l-box-list').fadeIn();
          $('#btn-submit-resume').show();
          $('#btn-submit-form-resume').hide();
      })
      $('#btn-submit-resume').click(function(){
        $('#btn-back-home').hide();
        $('#btn-back-list').show();
        $('.l-detail-item').hide();
        $('.l-box-list').hide();
        $('.l-box-detail').hide();
        $('#btn-submit-resume').hide();
        $('#btn-submit-form-resume').show();
        $('.l-box-resume').fadeIn();
      })
    })()
  }

  /**
   * News
   */
  var news = {
    init: function() {
      $('.group-news .l-article').hide();
      size_news = $('.group-news .l-article').length;
      if ($(window).width() < 768) {
        x=4;
      }
      else {
        x=12;
      }
      $('.group-news .l-article:lt('+x+')').show();
      $('#loadMore').click(function () {
        
        if ($(window).width() < 768) {
          x= (x+4 <= size_news) ? x+4 : size_news;
        }
        else {
          x= (x+6 <= size_news) ? x+6 : size_news;
        }
        $('.group-news .l-article:lt('+x+')').show();
      });
      if (size_news <= x) {
        $('#loadMore').hide()
      }
    }
  }

  /**
   * About
   */
  var about = {
    init: function() {
      
    }
  }

  var scroll = {
    init: function() {
      scroll.sectionScrollMagic()
    },
    sectionScrollMagic: function() {
      // build scene
      for (let i = 0; i < section.length; i++) {
        initSection(i)
      }
    }
  }
  $(document).ready(function () {
    news.init();
    $('body').css('overflow', 'hidden')
    setTimeout(() => {
      $('.logo-effect').fadeIn(1500)
      $('body').css('overflow', '')
    }, 500);
    setTimeout(() => {
        $('.base-loading').fadeOut()
    }, 2000);
  })

  $(window).on('load', function() {
    // scroll to target url
    base.hash()
    if ($("body").hasClass("l-home-page")) {
      // $(window).on('beforeunload', function(){
      //   $(window).scrollTop(0);
      // });
      setTimeout(function() {
        // $('.base-loading').fadeOut()
        // setTimeout(() => {
        //   $('.base-loading').remove()
        // }, 300);
        
        base.initWow()
        if ($('.l-home-page').length) {
          $('.l-home-page').removeClass('disable-scroll')
          sliders.homeOurwork()
          setTimeout(() => {
            home.init();
            
            // scroll.init();
          }, 1500);
          
        } else {
          sliders.value()
          sliders.leader()
          sliders.office()
          
        }
        
        // header & footer
        setTimeout(function() {
          // show hamburger, right menu, footer
          $('.l-hamburger').removeClass('l-hamburger-hidden')
          $('.l-right-menu').removeClass('l-right-menu-hidden')
          $('.l-footer').removeClass('l-footer-hidden')
        }, 1000)
        // info
        setTimeout(function() {
          $('.l-info').addClass('l-info-bottom-fixed-show')
        }, 2000)
      }, 2000)
      
    }
    else {
      setTimeout(function() {
        base.initWow()
  
        if ($('.l-home-page').length) {
          $('.l-home-page').removeClass('disable-scroll')
          sliders.homeOurwork()
          home.init()
        } else {
          sliders.value()
          sliders.leader()
          sliders.office()
        }
        scroll.init();
        // header & footer
        setTimeout(function() {
          // show hamburger, right menu, footer
          $('.l-hamburger').removeClass('l-hamburger-hidden')
          $('.l-right-menu').removeClass('l-right-menu-hidden')
          $('.l-footer').removeClass('l-footer-hidden')
        }, 500)
        // info
        setTimeout(function() {
          $('.l-info').addClass('l-info-bottom-fixed-show')
        }, 1000)
      },0)
    }
    

    
  })

  $(window).scroll(function() {
  })

  function activateMaps() {
    let zoomMap = $('.image-zoom img').ZoomArea({
      usedAnimateMethod: 'linear',
      // virtualScrollbars: false,
      zoomLevel: 1,
      minZoomLevel: 1,
      maxZoomLevel: 15,
      // parentOverflow: 'auto',
      externalIncrease:'.image-zoom-zoomin',
      externalDecrease:'.image-zoom-zoomout'

    });
  }
  $(window).on("load", function () {
      activateMaps();
  });

  

    
  
})(jQuery)
