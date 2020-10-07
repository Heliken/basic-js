const CustomError = require("../extensions/custom-error");

const chainMaker = {
  structure: [],
  makeLink(linkValue) {
    return linkValue !== '' ? `~( ${linkValue} )~` : `~(${linkValue})~`
  },
  getLength() {
    return this.structure.length
  },
  addLink(value = '') {
    this.structure.push(value)

    return this
  },
  removeLink(position) {
    if(!(position > this.structure.length - 1 || !Number.isInteger(position) || position < 0)){
      this.structure.splice(position-1,1)
    } else{
      this.structure = []
      throw "Wrong position"
    }

    return this
  },
  reverseChain() {
    this.structure.reverse()

    return this
  },
  finishChain() {
    let resultStructure = this.structure;
    this.structure = []

    return resultStructure
      .map((x) =>{return this.makeLink(x) })
      .join("")
      .slice(1,-1)
  }
};

module.exports = chainMaker;
