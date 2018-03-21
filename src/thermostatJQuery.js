$( document ).ready(function() {
  function show_temp_energy() {
    $( "h1#current_temp").text("Current temp: " + thermostat.temp + "C");
    $( "h2#EU_indicator").text("Energy Usage: " + thermostat.energyUsage);
    $( "h2#message").text("Message: " + thermostat.message);
    $( '#EU_indicator').attr('class', thermostat.energyUsage);
  };

  $( function() {
    $(  thermostat = new Thermostat() );
    $( "h1#current_temp").text(thermostat.temp + "C");
    $( "h2#PSM_indicator").text("Power Save: " + thermostat.powerSave);
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
    $( "h2#PSM_indicator").text("Power Save: " + thermostat.powerSave);
  });

  $( "button#reset" ).click(function( ) {
    $(thermostat.reset());
    show_temp_energy();
  });

});
