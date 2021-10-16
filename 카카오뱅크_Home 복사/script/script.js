
$(function(){

    $(" ul.subMenu").css({"display": "none"});
    // CSS에서 display:none 할경우 코드 에러 발생

    $("li#mainFade").mouseover(function(){
        $(this).children("ul.subMenu").stop().fadeIn(100);
        $("div#subMenuBG").stop().fadeIn(100);     

        // $("#headerArea").css({"background-color":"#fff"});
        // $("#mainMenu a").css({"color":"#000"});        
  
    });
      $("li#mainFade").mouseout(function(){
        $(this).children("ul.subMenu").stop().fadeOut(100);
        $("div#subMenuBG").stop().fadeOut(200);

        // $("#headerArea").css({"background-color":"#323a56"});
        // $("#mainMenu a").css({"color":"#fff"});      
    });
    // 기본 GNB 메뉴 설정 완료
    // 마우스 애니메이션 효과 적용 완료

    $("ul#mainMenu").mouseover(function(){
      $("#headerArea").css({"background-color":"#fff"});
      $("#mainMenu a").css({"color":"#000"});        
      $("img#bkLogo").css({"display":"none"});
      $("img#htLogo").css({"display":"block"});
      $("img#htLogo").css({"padding":"32px 0"});
  });
    $("ul#mainMenu").mouseout(function(){
      $("#headerArea").css({"background-color":"#323a56"});
      $("#mainMenu a").css({"color":"#fff"});      
      $("img#bkLogo").css({"display":"block"});
      $("img#htLogo").css({"display":"none"});
      $("img#bkLogo").css({"padding":"32px 0"});

  });


  $("#bbs button").click(function(){
    $("#bbs button").removeClass("selected");
    $(this).addClass("selected");
    
    var dataLink = $(this).attr("data-link");
    $("#bbs .tabContents").css({"display":"none"});
    $("#"+dataLink).css({"display":"block"});
});
});



$('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });