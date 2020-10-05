const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
  let turnsPerSecond = turnsSpeed / 3600
  let turnsAmount = Math.pow(2, disksNumber) - 1
  return {turns: turnsAmount, seconds: Math.floor( turnsAmount / turnsPerSecond)}
};
