
//section menu
$('.kind__title').on('click', function() {
    var $kind = $(this).parent(),
        $kindText = $kind.find('.kind__text'),
        $kindTextInner = $kindText.find('.kind__text-inner'),
        activeClass = 'kind_active';

    if($kind.hasClass(activeClass)){
        $kind.removeClass(activeClass);

        $kindTextInner.fadeOut(function(){
            $kindText.css({
                width:0
            });
        });

    } else {
        $kind.addClass(activeClass).siblings().removeClass(activeClass);
        
        $kindText.css({
            width: Math.min(500, $('.menu').outerWidth()-$('.kind__title').length*$('.kind__title').outerWidth())
        });


        setTimeout(function(){
            $kindTextInner.fadeIn();
        },400);

        $kind.siblings().find('.kind__text-inner').hide().parent().css({
             width:0
        });
    };
    
    

});


//section team

$('.team-acco__name').on('click', function() {

    let $teamAcco = $(this).parent(),
        activeClass = 'team-acco__item_active';
    
    if(!$teamAcco.hasClass(activeClass)){
        $teamAcco.siblings().removeClass(activeClass).find('.team-acco__content').slideUp();
    }
    
    $teamAcco.toggleClass(activeClass).find('.team-acco__content').slideToggle();

    return false;
});


//map

function initMap() {
    var uluru = {lat: 48.9215000, lng: 24.7097200};
    var map = new google.maps.Map(document.getElementById('mapq'), {
      zoom: 12,
      scrollwheel: false,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });

  }
  