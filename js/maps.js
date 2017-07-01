
    (function($) {
      "use strict";

      $('#estimation-form').validate({
        submitHandler: function(){
          var curForm = $('#estimation-form');
          $("<div />").addClass("formOverlay").appendTo(curForm);  
            
             $.ajax({
              url: 'mail.php',
              type: 'POST',
              data: curForm.serialize(),
              success: function(data) {
              var res=data.split("::");
              curForm.find("div.formOverlay").remove();
              curForm.prev('.expMessage').html(res[1]);
              if(res[0]=='Success')
              {
                 curForm.remove(); 
                 curForm.prev('.expMessage').html('');
              }              
              }
             });
          return false;
        } 
      });
      $('#subscribe-form').validate({
        submitHandler: function(){
          var curForm = $('#subscribe-form');
          $("<div />").addClass("formOverlay").appendTo(curForm);  
            
             $.ajax({
              url: 'mail.php',
              type: 'POST',
              data: curForm.serialize(),
              success: function(data) {
              var res=data.split("::");
              curForm.find("div.formOverlay").remove();
              curForm.prev('.expMessage').html(res[1]);
              if(res[0]=='Success')
              {
                 curForm.remove(); 
                 curForm.prev('.expMessage').html('');
              }              
              }
             });
          return false;
        } 
      })

      //initmap();      
      google.maps.event.addDomListener(window, 'load', initmap);

     })(jQuery); 

    function initmap() {
    var map = new google.maps.Map(document.getElementById("map"), {
    zoom:11,
    scrollwheel: false ,
    center: new google.maps.LatLng(34.1706,-118.8376), // New York
    
    styles: [
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#a6a6a0"
              },
              {
                "lightness": 17
              }
            ]
          },
          {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f5f5"
              },
              {
                "lightness": 20
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#ffffff"
              },
              {
                "lightness": 17
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#ffffff"
              },
              {
                "lightness": 29
              },
              {
                "weight": 0.2
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              },
              {
                "lightness": 18
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              },
              {
                "lightness": 16
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f5f5"
              },
              {
                "lightness": 21
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dedede"
              },
              {
                "lightness": 21
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "visibility": "on"
              },
              {
                "color": "#ffffff"
              },
              {
                "lightness": 16
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "saturation": 36
              },
              {
                "color": "#333333"
              },
              {
                "lightness": 40
              }
            ]
          },
          {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f2f2f2"
              },
              {
                "lightness": 19
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#fefefe"
              },
              {
                "lightness": 20
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#fefefe"
              },
              {
                "lightness": 17
              },
              {
                "weight": 1.2
              }
            ]
          }
        ]
    
  });
    
    setMarkers(map);
  }
  
  // Data for the markers consisting of a Country name, Item Name, Address for Item, a LatLng and a zIndex // for the order in which these markers should display on top of each other.
  var item_location = [
    ['Camerillo', 'Our Main Office', 34.1899, -119.0376, 4, 'map-icon.png'],
    ['Thousand Oaks', 'Thousand Oaks locksmith service', 34.1706,-118.8376, 5, 'map-icon.png'],    
      ['Agoura Hills', 'Agoura Hills locksmith service', 34.1533,-118.7617, 5, 'map-icon.png'], 
      ['Morpark', 'Morpark locksmith service', 34.2856,-118.8820, 5, 'map-icon.png'], 
  ];
  
  function setMarkers(map) {
        // Adds markers to the map.

        // Marker sizes are expressed as a Size of X,Y where the origin of the image
        // (0,0) is located in the top left of the image.

        // Origins, anchor positions and coordinates of the marker increase in the X
        // direction to the right and in the Y direction down.

           
        // Shapes define the clickable region of the icon. The type defines an HTML
        // <area> element 'poly' which traces out a polygon as a series of X,Y points.
        // The final coordinate closes the poly by connecting to the first coordinate.
        var shape = {
          coords: [1, 1, 1, 60, 68, 60, 68, 1],
          type: 'poly'
        };
        for (var i = 0; i < item_location.length; i++) {
            var item = item_location[i];
            var image = {
              url: 'images/'+item[5],
              
              size: new google.maps.Size(60, 68),
              
              origin: new google.maps.Point(0, 0),
              
              anchor: new google.maps.Point(0, 68)
            };
            var infoWindow = new google.maps.InfoWindow({
                content: item[0],
            });
            var marker = new google.maps.Marker({
            position: {lat: item[2], lng: item[3]},
            animation: google.maps.Animation.DROP,
            map: map,
            icon: image,
            shape: shape,
            title: item[0],
            zIndex: item[4]
          });
          (function (marker, item) {
                google.maps.event.addListener(marker, "click", function (e) {
                    //Wrap the content inside an HTML DIV in order to set height and width of InfoWindow.
                    infoWindow.setContent("<div style = 'width:220px;min-height:40px' id='m-info-window'> <h6 class='info-window-hding'>" + item[0] + "</h6> <p class='info-window-desc'>" + item[1] + "</p> </div>");
                    infoWindow.open(map, marker);
                });                
            })(marker, item);
        }
      }
