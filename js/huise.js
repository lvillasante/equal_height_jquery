$(document).ready(function(){
if($("div#content_center").height()<= ($(window).height()-320))
$("div#content_center").height($(window).height()-320) ;

// Container Left & Container Right
if ($("div#container_left").height() > $("div#container_rigth").height()) {
$("div#container_rigth").height($("div#container_left").height())
}else{
$("div#container_left").height($("div#container_rigth").height())
};

 // Inside container Left, Menu left & Content Center
 if ($("div#menu_left").height() > $("div#content_center").height()) {
 $("div#content_center").height($("div#menu_left").height())
 }else{
 $("div#menu_left").height($("div#content_center").height())
 };
});
