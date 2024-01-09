
$(document).ready(function(){

    var swiper = new Swiper(".mySwiper", {
        loop:true,
      slidesPerView: 4,
    //   centeredSlides: true,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
              delay: 4000,
              disableOnInteraction: false
            },
    });

    
    var swiper = new Swiper("#tab_swiper", {
      loop:true,
    slidesPerView: 2,
  //   centeredSlides: true,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
            delay: 4000,
            disableOnInteraction: false
          },
  });
  var swiper = new Swiper("#mo_swiper", {
    loop:true,
  slidesPerView: 1,
//   centeredSlides: true,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
          delay: 4000,
          disableOnInteraction: false
        },
});


    var swiper = new Swiper(".event_page .mySwiper", {
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
  
    });


    let ww=$(window).width();
    let wh=$(window).height();
   

    // 

    $(window).scroll(function(){
      
      let st=$(this).scrollTop();
      // alert(st);
      if(st>1880){
        $('.page1').css({
          opacity:1,
        })
      }
      if(st>2400){
        $('.page2').css({
          opacity:1,
        })
      }
      if(st>3000){
        $('.page3').css({
          opacity:1,
        })
      }
    })
    
})