$( document ).ready(function() {
  $( function() {
    $(  thermostat = new Thermostat() );
    $(  memory = new Memory($) );

    $( "span#temp_num"  ).text(thermostat.temp);
    $(  "svg#PSM_dot"  ).svg({onLoad: dot});
    $(  "svg#PSM_dot"  ).attr("height", "10");
    $(  "svg#PSM_dot"  ).attr("width", "10");
    show_temp_energy();
  });

  $( "button#up" ).click(function( ) {
    $(thermostat.up(1));
    $(memory.post_req(thermostat.temp, function() {
      show_temp_energy();
    }));
  });

  $( "button#down" ).click(function( ) {
    $(thermostat.down(1));
    show_temp_energy();
  });

  $( "button#PSM" ).click(function( ) {
    $(thermostat.powerSaveMode());
    update_dot();
    show_temp_energy();
  });

  $( "button#reset" ).click(function( ) {
    $(thermostat.reset());
    update_dot();
    show_temp_energy();
  });

  function show_temp_energy() {
    $( "span#temp_num").text(thermostat.temp);
    $( "span#EU_indicator").text(thermostat.energyUsage);
    $( "p#message").text(thermostat.message);
    $( "#EU_indicator").attr("class", thermostat.energyUsage);
  };

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
        var cityName = data.name;
        var cityTemp = Math.round(data.main.temp - 273.15, 1);
        $( "p#weather" ).text(cityName + " temp: " + cityTemp + "C");
      },
      error: function(data, textStatus, errorThrown) {
        console.log(textStatus);
      }
    }); //end of Ajax code
  });

  function dot(svg) {
    svg.circle(5, 5, 5,
        {fill: "green", id: "psm_svg_dot"});
  }

  function update_dot() {
    var fill_col = (thermostat.powerSave ? "green" : "red");
    $("#psm_svg_dot").attr({fill: fill_col});
  }

});
