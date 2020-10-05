const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(Array.isArray(members)){
    let letters = []
    members.forEach(item => {
      if(typeof item === "string")
        letters.push(item.trim()[0].toUpperCase())
    })
    return letters.sort().join('')
  }
  return false
};
