// external js: flickity.pkgd.js

$(document).ready( function() {
  var $carousel = $('.carousel');
  var $numberofSlides = $('.carousel-cell').length;
  $carousel.flickity({
    contain: true,
    wrapAround: true,
    autoPlay: 6000,
    accessibility: true,
    pauseAutoPlayOnHover: false,
    prevNextButtons: false,
    pageDots: false,
    initialIndex: Math.floor( Math.random() * $numberofSlides)
  });

  $("#slideshow > div:gt(0)").hide();
  setInterval(function() {
    $('#slideshow > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#slideshow');
  },  6000);

  function onLoadeddata( event ) {
    var cell = $carousel.flickity( 'getParentCell', event.target );
    $carousel.flickity( 'cellSizeChange', cell && cell.element );
  }

  $carousel.find('video').each( function( i, video ) {
    video.play();
    $(video).on( 'loadeddata', onLoadeddata );
  });

  var $video  = $('video'),
    $window = $(window); 

  $(window).resize(function(){
      
      var height = $window.height();
      var width = $window.width();
      // $video.css('height', height);
      
      // var videoWidth = $video.width(),
      //     windowWidth = $window.width(),
      // marginLeftAdjust =   (windowWidth - videoWidth);

      var videoWidth = $video.width(),
          videoHeight = $video.height();

      $video.css({
          'height': videoHeight, 
          'width' : videoWidth
      });
      
      // $video.css({
      //     'height': height, 
      //     'width' : width
      // });
  }).resize();
});