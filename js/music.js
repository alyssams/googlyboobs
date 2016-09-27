$(document).ready(function(){
	$(".toggle").click(function(){
	$(this).toggleClass("active");
	});

	$(".slide-body").click(function(){
	$(".slide-body .slide").toggleClass("active");
	});

  $(".on").click(function(){
    $("#audio-player")[0].play();
  });

  $(".off").click(function(){
    $("#audio-player")[0].pause();
  });
});