const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if(Array.isArray(matrix)){
    return matrix.flat(2).filter((item) =>{
      return item === "^^"
    }).length
  }
  return false
};
