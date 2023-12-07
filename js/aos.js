/* global AOS */

// Your existing JavaScript code follows...
// Initialize AOS
var delayBeforeAOSInit = 1500;

// Set up the interval to initialize AOS after the delay
var aosInitInterval = setInterval(function () {
  // Initialize AOS
  AOS.init();

// Stop the interval after AOS is initialized 
  clearInterval(aosInitInterval);
}, delayBeforeAOSInit);