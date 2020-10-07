const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
  if(Array.isArray(array)){
    let newArray = [...array];

    isStringCommand = (string) =>{
      return string.toString().startsWith("--")
    }

    newArray.forEach((value, i) => {
      if(typeof value === 'string' && value.startsWith("--")) {
        let isArrayStart = (i === 0);
        let isArrayEnd = (i === newArray.length - 1);
        switch(value) {
          case "--discard-prev":
            if(!isArrayStart && !isStringCommand(newArray[i-1]))
              newArray.splice(i-1,1)
            break
          case "--discard-next":
            if(!isArrayEnd)
              newArray.splice(i+1,1)
            break
          case "--double-prev":
            if(!isArrayStart && !isStringCommand(newArray[i-1]))
              newArray[i] = newArray[i-1]
            break
          case "--double-next":
            if(!isArrayEnd && !isStringCommand(newArray[i+1]))
              newArray[i] = newArray[i+1]
            break
          default:
            break
        }
      }
    })
    
    return newArray.filter(x => !x.toString().startsWith('--'))
  }

  throw "Error"
}