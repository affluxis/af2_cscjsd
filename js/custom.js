(function($){"use strict";$(window).scroll(function(){if($(this).scrollTop()>90){$(".header-navigation").addClass("fixed-nav");}else{$(".header-navigation").removeClass("fixed-nav");}});if($('.loading-main').length>0){$(window).on('load',function(){$('.loading-main').fadeOut();$('.pre-loader').delay(350).fadeOut("slow",0.0);$('body').css({'overflow-y':'scroll'});});}
$('.slimmenu').slimmenu({resizeWidth:'992',collapserTitle:'',animSpeed:'fast',easingEffect:null,indentChildren:true,});if($('.slider-carousel').length>0){$('.slider-carousel').owlCarousel({loop:true,nav:false,dots:false,autoplay:true,responsiveClass:true,responsive:{0:{items:1,},768:{items:1,}}})}
if($('.company-slider').length>0){$('.company-slider').owlCarousel({loop:true,nav:false,dots:false,center:true,margin:70,autoplay:true,responsiveClass:true,responsive:{0:{items:3,},768:{items:5,}}})}
if($('.testimonial-slider').length>0){$('.testimonial-slider').owlCarousel({loop:true,nav:true,dots:false,margin:60,autoplay:true,responsiveClass:true,responsive:{0:{items:1,},768:{items:2,}}})}
if($('.testimonial-slider2').length>0){$('.testimonial-slider2').owlCarousel({loop:true,nav:true,dots:false,margin:60,autoplay:true,responsiveClass:true,responsive:{0:{items:1,},768:{items:2,},992:{items:3,}}})}
if($('.parallax-window').length>0){$('.parallax-window').parallax({naturalWidth:600,naturalHeight:400});}
var wow=new WOW({boxClass:'wow',animateClass:'animated',offset:10,mobile:true,live:true})
wow.init();if($('.popup-youtube, .popup-vimeo, .popup-gmaps').length>0){$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({disableOn:0,type:'iframe',mainClass:'mfp-fade',removalDelay:160,preloader:false,fixedContentPos:true,});}
$(".form-action").on("change",".file-upload-field",function(){$(this).parent(".file-upload").attr("data-text",$(this).val().replace(/.*(\/|\\)/,''));});var items=document.querySelectorAll(".timeline li");function isElementInViewport(el){var rect=el.getBoundingClientRect();return(rect.top>=0&&rect.left>=0&&rect.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&rect.right<=(window.innerWidth||document.documentElement.clientWidth));}
function callbackFunc(){for(var i=0;i<items.length;i++){if(isElementInViewport(items[i])){items[i].classList.add("in-view");}}}
window.addEventListener("load",callbackFunc);window.addEventListener("resize",callbackFunc);window.addEventListener("scroll",callbackFunc);var offset=300,offset_opacity=1200,scroll_top_duration=1000,$back_to_top=$('.home-top');$back_to_top.on('click',function(event){event.preventDefault();$('body,html').animate({scrollTop:0,},scroll_top_duration);});})(jQuery);