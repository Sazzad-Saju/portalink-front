// ==========isotope filtering================
// external js: isotope.pkgd.js

// init Isotope
var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
  });
  // filter functions
  var filterFns = {
  };
  // bind filter button click
  $('.filters-button-group').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });

    $('.card').mouseenter(function(){

        $(this).find('.card-hover').css({'top':'0'});

    }).mouseleave(function(){

        $(this).find('.card-hover').css({'top':'100%'});

    });

  });
  
// ========smooth scroll==============
const scroll = new SmoothScroll('a[href*="#"]', {
speed: 600
});

$(".navbar-nav .nav-link").on("click", function(){
  $(".navbar-nav").find(".active").removeClass("active");
  $(this).addClass("active");
});


//========= initialize wow js=============
new WOW().init();

//========= Navbar changes color on scroll =============
// $(window).scroll(function(){
//   var scroll = $(window).scrollTop();
//   if(scroll < 50){
//       $('.fixed-top').css('background', 'transparent');
//   } else{
//       $('.fixed-top').css('background', 'rgba(27,36,47)');
//   }
// });
