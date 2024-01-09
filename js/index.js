

$(document).ready(function(){
$('.skip_but').fadeIn(3000);

  // 로딩화면
  
    $('.ice_wrap').ripples({
        resolution: 600,
        dropRadius: 40,
        perturbance: 0.04, 
      });
      // 첫번째페이지 배경 물결효과

let num=1;
$('.wrap .dice').click(function(){
  if(num==1){
    $('.wrap .dice > div:nth-child(1)').css({
      boxShadow: '30px 40px 80px 0px rgb(50, 134, 243) inset'
    })
    $('.wrap .dice > div:nth-child(2)').css({
      boxShadow: '30px 40px 80px 0px rgb(50, 134, 243) inset'
    })
    $('.wrap .dice > div:nth-child(3)').css({
      boxShadow: '30px 40px 80px 0px rgb(50, 134, 243) inset'
    })
    $('.wrap .dice > div:nth-child(4)').css({
      boxShadow: '30px 40px 80px 0px rgb(50, 134, 243) inset'
    })
    $('.wrap .dice > div:nth-child(5)').css({
      boxShadow: '30px 40px 80px 0px rgb(50, 134, 243) inset'
    })
    $('.wrap .dice > div:nth-child(6)').css({
      boxShadow: '30px 40px 80px 0px rgb(50, 134, 243) inset'
    })
    num++;
  }else{
    $('.wrap .dice > div:nth-child(1)').css({
      boxShadow: '30px 40px 80px 0px rgb(204, 216, 255) inset'
    })
    $('.wrap .dice > div:nth-child(2)').css({
      boxShadow: '30px 20px 80px 20px rgb(92, 173, 255) inset'
    })
    $('.wrap .dice > div:nth-child(3)').css({
      boxShadow: '10px 10px 50px 20px rgb(150, 193, 240) inset'
    })
    $('.wrap .dice > div:nth-child(4)').css({
      boxShadow: '5px 5px 50px 10px rgb(169, 210, 252) inset'
    })
    $('.wrap .dice > div:nth-child(5)').css({
      boxShadow: '3px 5px 50px 0px rgb(147, 200, 253) inset'
    })
    $('.wrap .dice > div:nth-child(6)').css({
      boxShadow: '10px 10px 50px 10px rgb(183, 219, 255) inset'
    })
    num--;
  }
  })
  




  // 첫번째 페이지 포트폴리오 글자나타나는 효과
  page_h1=$('.ice_wrap').height()
  page_h2=$('.two_wrap').height()
  page_h3=$('.mask_wrap').height()
  page_h4=$('.four_wrap').height()
  page_h5=$('.five_wrap').height()
  page_h6=$('.five_move_box').height()
  page_h123456=page_h1+page_h2+page_h3+page_h4+page_h5+page_h6
 
  $(window).scroll(function(){
    st=$(window).scrollTop();
    console.log(st)
    // alert(st)
    
    if(st>=1100 && st<1300){
      $('.dong').attr('src','./imge/back_two_1.jpg')
    }else if(st<1000){
      $('.dong').attr('src','./imge/back_two_0.jpg')
    } if(st>=1300 && st<1500){
      $('.dong').attr('src','./imge/back_two_2.jpg')
      $('.mask_text2,.mask_text_1,.mask_text3').animate({
        left: '7.5%'
       })
    }else if(st>=1500 && st<1700){
      $('.dong').attr('src','./imge/back_two_3.jpg')
      
    }else if(st>=1700 && st<1900){
      $('.dong').attr('src','./imge/back_two_4.jpg')
      $('.text_box_1').animate({
        top: '12%'
       })
       $('.text_box_2').animate({
        top: '35%'
       })
     
    }else if(st>=1900 && st<2100){
      $('.dong').attr('src','./imge/back_two_5.jpg')
     
    }else if(st>=2600 && st<2700){
      $('.dong').attr('src','./imge/back_two_3.jpg')
     
    }else if(st>=2700 && st<2800){
      $('.dong').attr('src','./imge/back_two_2.jpg')
    }else if(st>=2800 && st<2900){
    $('.dong').attr('src','./imge/back_two_1.jpg')
    }else if(st>=2900 && st<3000){
    $('.dong').attr('src','./imge/back_two_0.jpg')
    }else if(st>=2300 && st<2400){
     $('.mask_text,.mask_text2,.mask_text_1,.mask_text3').animate({
      left: '7.5%'
     })
    }else if(st>=3700 && st<3800){
      $('.text_box').animate({
       top: '10%'
      })
  
     }
// 두번째 페이지 배경화면 바뀌는 효과
        
if(st>=4500 && st<4900){
  $('.move_box1').animate({
    top:-620
  },2000,function(){
    $('.move_box1>.banner_img').first().appendTo('.move_box1');
    $('.move_box1').css({
      top:0,
    })
  })
  $('.move_box2').animate({
    top:0
  },2000,function(){
    $('.move_box2>.banner_img2').last().prependTo('.move_box2');
    $('.move_box2').css({
      top:-520
    })
  })
}
   //  네번째 페이지 배너 [위아래]무한반복

  st2=(st-6900) 
  // alert(sct);
  // sct_num=(st2*1);
  
  if(st2>=0 && st2<5100){
    st2=(st-6900) 
  
     if(st2>0 && st2<600){
      $('.in_box').eq(0).css({
        opacity: 1
      }) 
      $('.in_box').eq(4).css({
        opacity: 0.5
      })
      $('.in_box').eq(0).css({
        transform:`rotateZ(0deg) translate3d(-700px,0,${st2}px)`
       })
       $('.in_box').eq(4).css({
        transform:`rotateZ(15deg) translate3d(0px,0,-100px)`
       })
      }else {
        $('.in_box').eq(0).css({
          transform:`rotateZ(-15deg) translate3d(0px,0,${st2}px)`
        })
      }
  
  if(st2>500 && st2<1200){
    st2=(st-7500)
    
    $('.in_box').eq(4).css({
      opacity: 1
    })
    $('.in_box').eq(1).css({
      opacity: 0.5
    })
    $('.in_box').eq(4).css({
      transform:`rotateZ(3deg) translate3d(-1000px,0,${st2}px)`
     })
     $('.in_box').eq(4).css({
      transform:`rotateZ(3deg) translate3d(-800px,0,${st2}px)`
     })
     $('.in_box').eq(1).css({
      transform:`rotateZ(-15deg) translate3d(0px,0,0px)`
     })
  }
  if(st2>1200 && st2<1600){
    st2=(st-8000)
  
    $('.in_box').eq(1).css({
      opacity: 1
    })
    $('.in_box').eq(5).css({
      opacity: 0.5
    })
    $('.in_box').eq(1).css({
      transform:`rotateZ(0deg) translate3d(-800px,0,${st2}px)`
     })
     $('.in_box').eq(5).css({
      transform:`rotateZ(15deg) translate3d(0px,0,-100px)`
     })
      $('.five_move_box>img').attr('src','./imge/back_two_3.jpg')
   
  }
  if(st2>1600 && st2<2100){
    st2=(st-8500)
    $('.in_box').eq(5).css({
      opacity: 1
    })
    $('.in_box').eq(2).css({
      opacity: 0.5
    })
    $('.in_box').eq(5).css({
      transform:`rotateZ(3deg) translate3d(-800px,0,${st2}px)`
     })
     $('.in_box').eq(2).css({
      transform:`rotateZ(-15deg) translate3d(0px,0,0px)`
     })
  }
  if(st2>2100 && st2<2600){
    st2=(st-9000)
    $('.in_box').eq(2).css({
      opacity: 1
    })
    $('.in_box').eq(6).css({
      opacity: 0.5
    })
    $('.in_box').eq(2).css({
      transform:`rotateZ(0deg) translate3d(-800px,0,${st2}px)`
     })
     $('.in_box').eq(6).css({
      transform:`rotateZ(15deg) translate3d(0px,0,-100px)`
     })
     $('.five_move_box>img').attr('src','./imge/back_two_2.jpg')
  }
  if(st2>2600 && st2<3100){
    st2=(st-9500)
    $('.in_box').eq(6).css({
      opacity: 1
    })
    $('.in_box').eq(3).css({
      opacity: 0.5
    })
    $('.in_box').eq(6).css({
      transform:`rotateZ(3deg) translate3d(-800px,0,${st2}px)`
     })
     $('.in_box').eq(3).css({
      transform:`rotateZ(-15deg) translate3d(0px,0,0px)`
     })
  }
  if(st2>3100 && st2<3600){
    st2=(st-10000)
    $('.in_box').eq(3).css({
      opacity: 1
    })
    $('.in_box').eq(7).css({
      opacity: 0.5
    })
    $('.in_box').eq(3).css({
      transform:`rotateZ(0deg) translate3d(-800px,0,${st2}px)`
     })
     $('.in_box').eq(7).css({
      transform:`rotateZ(15deg) translate3d(0px,0,-100px)`
     })
  }
  if(st2>3600 && st2<4100){
    st2=(st-10500)
    $('.in_box').eq(7).css({
      opacity: 1
    })
    $('.in_box').eq(7).css({
      transform:`rotateZ(3deg) translate3d(-800px,0,${st2}px)`
      
     })
     $('.five_move_box>img').attr('src','./imge/back_two_1.jpg')
  }
  }
  // alert(st2)
  if(st<page_h123456){
    st3=0
    $("#color_img").css({
      'clip-path':`circle(${st3}px at 50% 50%)`
    })
  }
  st3=(st-page_h123456)*0.2
 if(st>=page_h123456){
  if(st>=page_h123456 && st<page_h123456+99){
    st3=0
    $(window).scrollTop(page_h123456)
  }
  $("#color_img").css({
    'clip-path':`circle(${st3}px at 50% 50%)`
  })
 }

})

// 5페이지 이미지확대슬라이드

$('.but').click(function(){
  $('.img_box').first().fadeOut().appendTo('.mask_wrap1');
  $('.img_box').fadeIn();
})


time=setInterval(function(){
  $('.but').trigger('click');
},3500);

// $(".img_box").hover(function(){
//  clearInterval(time);
// },function(){
//  time=setInterval(function(){
//      $('.but').trigger('click');
//  },2000)
// }) 




// 세번째 페이지 넘어가는 효과


let click_num=1;
$('.logo #logo_wrap').click(function(){
    if(click_num==1){
      $('.logo_box').css({
        opacity: 1
    })  
        click_num++;
    }else{
      $('.logo_box').css({
        opacity: 0
    })  
        click_num--;
    }

})

$("#web_maue").click(function(){
  wh=$(window).height();
  ww=$(window).width();
  
  if(ww>=1493){
    $('html, body').animate( { scrollTop : wh*3 }, 400 );
  } else if(ww<1493 && ww>=1024){
    $('html, body').animate( { scrollTop : wh*3 }, 400 );
  }
  else{
    $('html, body').animate( { scrollTop : wh*2 }, 400 );
  }
})
$("#banner_maue").click(function(){
  ww=$(window).width();
  wh=$(window).height();
  if(ww>=1493){

    $('html, body').animate( { scrollTop : wh*5 }, 400 );
  }else if(ww<1493 && ww>=1024){
    $('html, body').animate( { scrollTop : wh*4.5 }, 400 );
  }else{
    $('html, body').animate( { scrollTop : wh*3 }, 400 );
  }
})
$("#about_maue").click(function(){
  ww=$(window).width();
  wh=$(window).height();
  if(ww>=1493){
    $('html, body').animate( { scrollTop : wh*18 }, 400 );
   
  }else if(ww<1493 && ww>=1024){
    $('html, body').animate( { scrollTop : wh*7 }, 400 );
  }else{
    $('html, body').animate( { scrollTop : wh*5 }, 400 );
  }
})


// 메뉴 

// $('.skill_wrap').ripples({
//   resolution: 600,
//   dropRadius: 40,
//   perturbance: 0.04, 
// });

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



var swiper1 = new Swiper(".mySwiper1", {
  effect: "cards",
  grabCursor: true,
});


// 지우지마
  })
