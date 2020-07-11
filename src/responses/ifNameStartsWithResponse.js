export default class IfNameStartsWithResponse {
  constructor() {
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    this.randomLetter
  }
  getAnswer() {
    const randomLetterIdx = Math.floor(Math.random() * this.alphabet.length)
    const randomLetter = this.alphabet[randomLetterIdx]
    this.randomLetter = randomLetter
    return `If your name starts with a ${randomLetter} then sadly no`
  }
  getResults() {
    return {
      answer: this.getAnswer(),
      index: 7,
      randomLetter: this.randomLetter
    }
  }
}
