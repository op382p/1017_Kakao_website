
$(function(){

    $(" ul.subMenu").css({"display": "none"});
    // CSS에서 display:none 할경우 코드 에러 발생
    $("li#mainFade").mouseover(function(){
        $(this).children("ul.subMenu").stop().fadeIn(100);
        $("div#subMenuBG").stop().fadeIn(100);
    });
      $("li#mainFade").mouseout(function(){
        $(this).children("ul.subMenu").stop().fadeOut(100);
        $("div#subMenuBG").stop().fadeOut(200);
    });

    // $("ul#mainMenu").mouseover(function(){
    //   $("a#logo_wt").css({"display": "block"});
    //   $("a#logo_bk").css({"display": "none"});
    //   $("#headerArea").css({"background-color":"#313955"})
      
      
    // });
    
    // $("ul#mainMenu").mouseout(function(){
    //   $("a#logo_wt").css({"display": "none"});
    //   $("a#logo_bk").css({"display": "block"});
    //   $("#headerArea").css({"background-color":"#fff"})
    //   $("li.mainLi>a").css({"color":"#fff"})

    // });

  });
