# Thermostat

## Introduction
This is a single page app which allows you to control your (fictional) thermostat. It uses JavaScript and jQuery for the model / business logic, Ruby for the controller, and HTML / CSS for the views.

## Features
* `Current temp` the current temperature the thermostat is set to.
* `Power Save Mode` is toggled by the PSM button and controls the maximum temperature the thermostat can be set to:
  * On: dot is green; max temperature is 25C
  * Off: dot is red; max temperature is 32C
* `Energy Usage` indicates the energy usage level based on the current thermostat temperature:
  * Low: 17C or lower
  * Medium: 18C - 24C
  * High:25C or higher
* The notification text (in blue) displays messages based on user actions and thermostat settings
* `London temp` is determined by a web-API and displays the current temperature in London
* `Reset` returns the thermostat settings to its defaults (current temp: 20C; PSM: on)

## Installation and Use
* Clone this repo: `$ git clone git@github.com:julesnuggy/thermostat.git`
* Install dependencies: `$ bundle install && npm install`
* Boot the server: `$ ruby app.rb`
* Open the localhost in your browser - by default this is usually http://localhost:4567 but check the port number displayed in your Terminal

## Testing 
