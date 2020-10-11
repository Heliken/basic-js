const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(notReverse = true) {
    this.notReverse = notReverse;
    this.encryptTable = this.createEncryptTable();
  }
  createEncryptTable() {
    let encryptTable = [];
    for(let i = 0; i < 26; i++){
      let encryptRow = [];
      for(let j = 0; j < 26; j++){
        encryptRow.push(String.fromCharCode(((j + i) % 26) + 65));
      }
      encryptTable.push(encryptRow)
    }
    return encryptTable
  }
  encrypt(phrase,keyword) {
    if(phrase !== undefined && keyword !== undefined){
      phrase = phrase.toUpperCase();
      keyword = keyword.toUpperCase();
      let encryptedPhrase = '';
      let specialSymbolsCounter = 0;
      for(let i = 0;i< phrase.length; i++){
        let isSymbolLetter = /([A-Z])/.test(phrase[i]);
        if(isSymbolLetter){
          let colNumber = phrase[i].charCodeAt() - 65;
          let rowNumber = keyword[(i -  specialSymbolsCounter) % keyword.length].charCodeAt() - 65;
          let newSymbol = this.encryptTable[colNumber][rowNumber];
          encryptedPhrase+=newSymbol;
        } else {
          specialSymbolsCounter++;
          encryptedPhrase+=phrase[i];
        }
      }
      return this.notReverse ? encryptedPhrase : encryptedPhrase.split("").reverse("").join("")
    } else{
      throw "Wrong values"
    }
  }   
  decrypt(phrase, keyword) {
    if(phrase !== undefined && keyword !== undefined){
      phrase = phrase.toUpperCase();
      keyword = keyword.toUpperCase();
      let decryptedPhrase = '';
      let specialSymbolsCounter = 0;
      for(let i = 0;i< phrase.length; i++){
        let isSymbolLetter = /([A-Z])/.test(phrase[i]);
        if(isSymbolLetter){
          let rowNumber = keyword[(i -  specialSymbolsCounter) % keyword.length].charCodeAt() - 65
          let colNumber = this.encryptTable[rowNumber].indexOf(phrase[i]);
          let newSymbol = this.encryptTable[0][colNumber];
          decryptedPhrase+=newSymbol;
        } else {
          specialSymbolsCounter++;
          decryptedPhrase+=phrase[i];
        }
      }
      return this.notReverse ? decryptedPhrase : decryptedPhrase.split("").reverse("").join("")
    } else{
      throw "Wrong values"
    }
  }
}

module.exports = VigenereCipheringMachine;
