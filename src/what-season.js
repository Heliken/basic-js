const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(date === undefined)
    return 'Unable to determine the time of year!'
  if(Object.prototype.toString.call(date) === '[object Date]'){
    let month = date.getMonth();
    console.log(date,month);
    let season;
    switch(true){
      case month < 2 || month === 11:
        season = 'winter'
        break
      case month > 1 && month < 5:
        season = 'spring'
        break
      case month > 4 && month < 8:
        season = 'summer'
        break
      default:
        season = 'autumn'
        break
    }
    return season
  }
  throw "THROWN"
};
