
//section menu
$('.kind__title').on('click', function() {
    var $kind = $(this).parent(),
        activeClass = 'kind_active';

    if($kind.hasClass(activeClass)){
        $kind.removeClass(activeClass);
    } else {
        $kind.addClass(activeClass).siblings().removeClass(activeClass);
    }
    
});

//section team

$('.team-acco__name').on('click', function() {

    let $teamAcco = $(this).parent(),
        activeClass = 'team-acco__item_active';

    if($teamAcco.hasClass(activeClass)){
        $teamAcco.removeClass(activeClass)
    } else {
        $teamAcco.addClass(activeClass).siblings().removeClass(activeClass);
    }

    return false;
});


//map

function initMap() {
    var uluru = {lat: 48.9215000, lng: 24.7097200};
    var map = new google.maps.Map(document.getElementById('mapq'), {
      zoom: 12,
    //   scrollwheel: false,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });

  }
  