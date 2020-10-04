const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity === "string"){
    let sampleActivityNumber = parseFloat(sampleActivity);
    let isSampleActivityNumberCorrect = typeof sampleActivityNumber === "number" && sampleActivityNumber > 0 && sampleActivityNumber <= 15
    let date = Math.ceil(Math.log(sampleActivity/MODERN_ACTIVITY) / (0.693/HALF_LIFE_PERIOD));
    return isSampleActivityNumberCorrect  ? date : false
  }
  return false
};
