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