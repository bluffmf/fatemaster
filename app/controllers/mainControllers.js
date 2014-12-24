var mainControllers = angular.module('mainControllers', []);

var MainCtrl = function($scope) {

    /*
    $(document).ready(function() {

        alert("EEEEEEE");
        $("#owl-demo").owlCarousel({

            autoPlay: 3000, //Set AutoPlay to 3 seconds

            items : 1,
            itemsDesktop : [52,1],
            itemsDesktopSmall : [50,1]

        });

    });
    */

    $(document).ready(function() {
        $('.carousel').carousel({
            interval: 5000
        });


      var scrollUp = document.getElementById('scrollup'); // найти элемент

      scrollUp.onmouseover = function() { // добавить прозрачность
        scrollUp.style.opacity=0.3;
        scrollUp.style.filter  = 'alpha(opacity=30)';
      };

      scrollUp.onmouseout = function() { //убрать прозрачность
        scrollUp.style.opacity = 0.5;
        scrollUp.style.filter  = 'alpha(opacity=50)';
      };

      scrollUp.onclick = function() { //обработка клика
        window.scrollTo(0,0);
      };

      // show button

      window.onscroll = function () { // при скролле показывать и прятать блок
        if ( window.pageYOffset > 0 ) {
          scrollUp.style.display = 'block';
        } else {
          scrollUp.style.display = 'none';
        }
      };


    });






};

mainControllers.controller('MainCtrl', MainCtrl);
