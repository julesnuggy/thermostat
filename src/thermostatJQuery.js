$( document ).ready(function() {
  function show_temp_energy() {
    $( "p#current_temp").text("Current temp: " + thermostat.temp + "C");
    $( "span#EU_indicator").text(thermostat.energyUsage);
    $( "p#message").text(thermostat.message);
    $( '#EU_indicator').attr('class', thermostat.energyUsage);
  };

  $( function() {
    $(  thermostat = new Thermostat() );
    $( "p#current_temp").text(thermostat.temp + "C");
    $( "span#PSM_indicator").text("@");
    $( '#PSM_indicator').attr('class', thermostat.powerSave);
    show_temp_energy();
  });

  $( "button#up" ).click(function( ) {
    $(thermostat.up(1));
    show_temp_energy();
  });

  $( "button#down" ).click(function( ) {
    $(thermostat.down(1));
    show_temp_energy();
  });

  $( "button#PSM" ).click(function( ) {
    $(thermostat.powerSaveMode());
    $( "p#PSM_indicator").text("Power Save: " + thermostat.powerSave);
  });

  $( "button#reset" ).click(function( ) {
    $(thermostat.reset());
    show_temp_energy();
  });


  $( function getWeather(city) {
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather",
      type: "GET",
      dataType: "JSON",
      data: {
        id: 2643743,
        APPID: "0a783ed3b1845cc33e4045030a541008"
      },
      success: function(data) {
        console.log(data);
        var cityName = data.name;
        var cityTemp = Math.round(data.main.temp - 273.15, 1);
        $( "p#weather" ).text(cityName + " temp: " + cityTemp + "C");
      },
      error: function(data, textStatus, errorThrown) {
        console.log(textStatus);
      }
    }); //end of Ajax code
  });

});
