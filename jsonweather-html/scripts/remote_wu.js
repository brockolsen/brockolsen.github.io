// Current Location Scripts
$(function () {

  var status = $('#status');

  (function getGeoLocation() {
    status.text('Getting Location...');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        // Call the getData function, send the lat and long
        getData(lat, long);

      });
    } else {
      status.text("Your browser doesn't support Geolocation or it is not enabled!");
    }

  })();

  // Get the data from the wunderground API
  function getData(lat, long){
    $.ajax({
url : "http://api.wunderground.com/api/2fe9f010720652d7/conditions/q/" + lat +"," + lat + long + ".jsonp", ".json",
    dataType : "jsonp"   
    success : function(parse_jason) {
        consle.log(parse_jason);
        var city = parsed_ jason['location']['city']
        val state = parsed_jason ['location'] ['state']
        $("#cityDislplay").text(city +"," + state);
        var temp_f = Math.round(parseInt(parsed_json['current_observation']['temp_f']));
        var state = parsed_json['location']['state'];
        var summary = parsed_json["current_observation"]["weather"];
        var humidity = parsed_json['current_observation']['relative_humidity'];
  
  $("#cityDisplay").text(city + ", " + state);
  $("#summary").text(summary);
  $("#currentTemp").text(temp_f + "°");
  $("#add1").text("Humidity:" + " " + humidity);
  
               
                
      $("#cover").fadeOut(250);
    }

           });

  }

  // A function for changing a string to TitleCase
  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
});
