const CustomError = require("../extensions/custom-error");

module.exports = function repeater(string, options) {
  function checkIfOptionExists(option, type) {
    let typeCheckValue = type === 'int' ? parseInt(option) : String(option)
    return option !== undefined && typeCheckValue 
  }
  options.repeatTimes = checkIfOptionExists(options.repeatTimes, 'int') ? parseInt(options.repeatTimes) : 1
  options.separator = checkIfOptionExists(options.separator, 'str') ? String(options.separator) : '+'
  options.addition = checkIfOptionExists(options.addition, 'str') ? String(options.addition) : ''
  options.additionRepeatTimes = checkIfOptionExists(options.additionRepeatTimes,'int') ? parseInt(options.additionRepeatTimes) : 1
  options.additionSeparator = checkIfOptionExists(options.additionSeparator, 'str') ? String(options.additionSeparator) : "|"
  
  let separatorString = options.addition.concat(options.additionSeparator).repeat(options.additionRepeatTimes).slice(0,-options.additionSeparator.length)
  let completeString = (string + separatorString + options.separator).repeat(options.repeatTimes).slice(0,-options.separator.length)
  return completeString
};
