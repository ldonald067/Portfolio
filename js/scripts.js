// var header = $("#nav-toggle").offset().top;
//
// $(document).scroll(function(){
//
//     if($(this).scrollTop() > header)
//     {
//        $('#nav-toggle').css({"background":"white"});
//     } else {
//        $('#nav-toggle').css({"background":"transparent"});
//     }
// });


$(function () {
  $(document).scroll(function () {
	  var $nav = $("#nav-toggle-1");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});
