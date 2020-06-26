/*Hospital Ssection */
$(".tag h2").click(function(){
  var mkm= $(this).attr('target');
   $(`#div${mkm}`).show();
   $(`#div${mkm}`).nextAll().hide();
   $(`#div${mkm}`).prevAll().hide();  
});

console.log($("#hospitals").outerHeight());
/*Chat box*/
$(".sendIcon").click(sendData);
function sendData(){
  let message= document.getElementById("textarea").value;
 // console.log(message.length);
  //console.log($(".chatMessage input").outerHeight());
  
  let messageList= document.createElement("li");
  messageList.innerHTML =message;
  document.getElementById("messages").appendChild(messageList);
  $("#textarea").val("");
  
}






$(window).scroll(function(){


    let scrollTopValue =  $(this).scrollTop();
    

    if( scrollTopValue > 100){
        $(".mainMenu").css({ backgroundColor : "#fff"  , top : "0"});
        $(".nav-link").css({color : "#000"} );
        $(".contectSection").css({ display : "none" });
        $("#logo").attr("src" , "images/dark-version-logo.png") ;
        
    }
    else {
        $(".mainMenu").css({ backgroundColor : "rgba(0,0,0,0)" , top : "40"});
        $(".nav-link").css({color : "#fff"} );
        $(".contectSection").css({ display : "inline-block"});
         $("#logo").attr("src" , "images/1logo.png") ;
    }


    $("section").each(function(){




    })
    let menuHight = $(".mainMenu").height();

     $("section").each(function(){
        let  thisSection = $(this);
        
        
        if( thisSection.offset().top <  (scrollTopValue + menuHight)  &&  (thisSection.offset().top + thisSection.outerHeight() ) > (scrollTopValue + menuHight) ){
            let classCatch = '.'+thisSection.attr("class")+'-N';
            $(".nav-link").removeClass("customColor");
            $(classCatch).addClass("customColor") 
        }
        
        
     })
    

})




$(".nav-link").click( ScrollFunction )

function ScrollFunction(){

    
    let menuLink = $(this).attr("href");
    let rowTopPosition = $(menuLink).offset().top;
    $("body").animate({ scrollTop :  rowTopPosition } , 1000);


    $(".nav-link").removeClass("customColor")
    $(this).addClass("customColor");


}

/* sroll button */

$(".clickButton").click(function(){
     let serviceSectionPosition =  $("#header").offset().top;
   $("body").animate({ scrollTop : serviceSectionPosition } , 1000) ; 
})




/* Slider */

$(".sectionslider1").css({display : "none"});
$(".sectionslider2").css({display : "none"});
$(".sectionslider3").css({display : "none"});
$("#content1").css({display : "none"});
$("#content2").css({display : "none"});
$("#content3").css({display : "none"});

$(document).ready(function(){


    $(".sectionslider1").show(2000 , function(){
        $("#content1").fadeIn(2000);
        $("#slide1").addClass("whiteBG");
    });

    $("#slide1").click(function(){
        $(".sectionslider2").slideUp(2000);
        $(".sectionslider3").slideUp(2000);
        $(".sectionslider1").show(1000);
        $(".switcher div").removeClass("whiteBG");
        $(this).addClass("whiteBG");
       
      })
    
    $("#slide2").click(function(){
        $(".sectionslider3").slideUp(1000);
        $(".sectionslider1").slideUp(2000);
        $(".sectionslider2").show(1000 , function(){
            $("#content2").fadeIn(2000);
        });
        $(".switcher div").removeClass("whiteBG");
        $(this).addClass("whiteBG");
     
    })
    $("#slide3").click(function(){
        $(".sectionslider1").slideUp(2000);
        $(".sectionslider2").slideUp(2000);
        $(".sectionslider3").show(1000 ,  function(){
            $("#content3").fadeIn(2000);
        });
        $(".switcher div").removeClass("whiteBG");
        $(this).addClass("whiteBG");
      })

})


/** End Slider **/



/*Fixed Nav 
$('.donate').hover(function(){
  $('.sstyle1').css( 'transform' , 'translate(0px)' );
  $('.donate').css('backgroundColor' , '#D02323');
  $('.donate').css('color' , 'white');

  $('.sstyle2').css( 'transform' , 'translate(-120px)' );
  $('.needDonate').css('backgroundColor' , 'white');
  $('.needDonate').css('color' , 'black');

  $('.sstyle3').css( 'transform' , 'translate(-120px)' );
  $('.tour').css('backgroundColor' , 'white');
  $('.tour').css('color' , 'black');

})
$('.needDonate').hover(function(){
  $('.needDonate').prevAll().hide();
  $('.sstyle2').css( 'transform' , 'translate(0px)' );
  $('.needDonate').css('backgroundColor' , '#D02323');
  $('.needDonate').css('color' , 'white');

  $('.sstyle1').css( 'transform' , 'translate(-120px)' );
  $('.donate').css('backgroundColor' , 'white');
  $('.donate').css('color' , 'black');

  $('.sstyle3').css( 'transform' , 'translate(-120px)' );
  $('.tour').css('backgroundColor' , 'white');
  $('.tour').css('color' , 'black');

})
$('.tour').hover(function(){
  $('.sstyle3').css( 'transform' , 'translate(0px)' );
  $('.tour').css('backgroundColor' , '#D02323');
  $('.tour').css('color' , 'white');

  $('.sstyle1').css( 'transform' , 'translate(-120px)' );
  $('.donate').css('backgroundColor' , 'white');
  $('.donate').css('color' , 'black');

  $('.sstyle2').css( 'transform' , 'translate(-120px)' );
  $('.needDonate').css('backgroundColor' , 'white');
  $('.needDonate').css('color' , 'black');
})*/

$('#fdonate').click(function(){

    $('#donation').css( 'display'  , 'flex' );
    $('#bol').css('display' , 'none');
    $('#hospitals').hide();
 })

 $('#fndonate').click(function(){

    $('#needDonation').css( 'display'  , 'flex' );
    $('#bol').css('display' , 'none');
    $('#hospitals').hide();
 })
$('#nclose').click(function(){

    $('#needDonation').css( 'display' , 'none' );
    $('#hospitals').show();
})
$('#close').click(function(){
  $('#donation').css( 'display' , 'none' );
  $('#hospitals').show();
})

let don = document.getElementById('don');
document.addEventListener("click" , function(e)
{
    if (e.target ==  don )  
    {
        $('#donation').css( 'display' , 'none' )    
    }

})
let ndon = document.getElementById('ndon');
document.addEventListener("click" , function(e)
{
    if (e.target ==  ndon )  
    {
        $('#needDonation').css( 'display' , 'none' )    
    }

})

$('.backWidth').click(function(){


    let idForm =  $(this).attr('id')

    let formSelector = '#' + idForm + '-m' ;

    let spanSelector = '#' + idForm + ' span';

    /////////////////////////////

    $('.backWidth').removeClass( 'currentbackwidth' )

   
    $('.backWidth span').removeClass( 'currentspan')

    $(this).addClass( 'currentbackwidth' )


    $(spanSelector).addClass( 'currentspan' )

    ////////////////////////

    $(formSelector).nextAll().hide(1000);

    $(formSelector).prevAll().hide(1000);

    $(formSelector).show(1000);  

})


$('#search').click(function(){

    $('#needDonation').hide(1000) ;  
    
    $('#donation').hide(1000) ;   

    $('#resultsDonation').hide(1000) ;  

    $('#resultsNeedDonation').show(1000) ;  

})

$('#submit').click(function(){

    $('#donation').hide(1000) ;   

    $('#needDonation').hide(1000) ;  

    $('#resultsNeedDonation').hide(1000) ;  

    $('#resultsDonation').show(1000) ;  

})

/*Expansion Feature:
if(message.length>21){
    $(".chatMessage input").css({height:"4rem"});
    alert("hello");
     }


using JQuery:
 // let message= $("textarea").val();
// let m= $("#messages").appendChild(messageList);
m.css("display", "block");
 */
/* console.log(z);
  $("#targetedDiv").show(z);
  console.log($("#targetedDiv").html(z));
var z= $(`#div${mkm}`).html();
$("#targetedDiv").empty();
  $(".gm").show();
function changeContent(){
  var mkm= $(this).attr('target');
  var z= $(`#div${mkm}`);
  console.log(z);
  $("#targetedDiv").html(z);
  $("#targetedDiv").html($(`#div${mkm}`));

  console.log($("#targetedDiv").children());
  console.log($("#targetedDiv").find($(`#div${mkm}`)));*/
/*} 
//Sol: jquery children lis eq(),change in html
  //var booleanValue= $(`#div${mkm}`).hasClass("d-none");
  /*if(booleanValue==true){
    //$(`#div${mkm}`).removeClass("d-none");
   // $(`#div1`).addClass("d-none");
    $("#targetedDiv").html($(`#div${mkm}`));
  }
  else{ 
    $(`#div1`).removeClass("d-none");  
  }*/
  //let inText= $(`#div${mkm}`).text();
 // let inText= $(`#div${mkm}`);
  //console.log(inText);
 // document.getElementById("targetedDiv").innerHTML=$(`#div${mkm}`).text();
 // $("#targetedDiv").empty();
 //inText.show();
 


/*
ideas to implement this code: 
2)check siblings 
4)Hide/show/toggle
if(mkm!=1){
    $(`#div${mkm}`).animate({display:'block'},1000);

  } 
    jQuery(function() {
  jQuery('#showall').click(function() {
    jQuery('.targetDiv').show();
  });
  jQuery('.showSingle').click(function() {
    jQuery('.targetDiv').hide();
    jQuery('#div' + $(this).attr('target')).show();
  });
});
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<div class="buttons">
  <a id="showall">All</a>
  <a class="showSingle" target="1">Div 1</a>
  <a class="showSingle" target="2">Div 2</a>
  <a class="showSingle" target="3">Div 3</a>
  <a class="showSingle" target="4">Div 4</a>
</div>

<div id="div1" class="targetDiv">Lorum Ipsum1</div>
<div id="div2" class="targetDiv">Lorum Ipsum2</div>
<div id="div3" class="targetDiv">Lorum Ipsum3</div>
<div id="div4" class="targetDiv">Lorum Ipsum4</div>
   */
  /*
  Extras: 1)design, more detail for each hospital
  2)responsive design
  3)attach file button, local storage, more features in chat box.
  */