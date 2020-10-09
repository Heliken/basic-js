const CustomError = require("../extensions/custom-error");

module.exports =  class DepthCalculator {
  calculateDepth(array) {
    let hasInnerArray = array.some(element => Array.isArray(element))
    let flatArray = array.flat();

    return hasInnerArray ? 1 + this.calculateDepth(flatArray) : 1
  }
}