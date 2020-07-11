export default class IfThisHeightResponse {
  constructor() {
    this.feet = [3, 4, 5, 6, 7]
    this.inches = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1.5, 2.5, 3.5, 4.5, 5.5, 6.5, 7.5, 8.5, 9.5, 10.5, 11.5]
    this.tallerOrShorter = ['taller', 'shorter']
    this.randomFeet
    this.randomInches
    this.randomTallerOrShorter
  }
  getAnswer() {
    const randomFeetIdx = Math.floor(Math.random() * this.feet.length)
    const randomFeet = this.feet[randomFeetIdx]
    const randomInchesIdx = Math.floor(Math.random() * this.inches.length)
    const randomInches = this.inches[randomInchesIdx]
    const randomTallerOrShorterIdx = Math.floor(Math.random() * this.tallerOrShorter.length)
    const randomTallerOrShorter = this.tallerOrShorter[randomTallerOrShorterIdx]
    this.randomFeet = randomFeet
    this.randomInches = randomInches
    this.randomTallerOrShorter = randomTallerOrShorter
    return `If you're ${randomTallerOrShorter} than ${randomFeet}'${randomInches}", then absolutely`
  }
  getResults() {
    return {
      answer: this.getAnswer(),
      index: 8,
      randomFeet: this.randomFeet,
      randomInches: this.randomInches,
      randomTallerOrShorter: this.randomTallerOrShorter
    }
  }
}
