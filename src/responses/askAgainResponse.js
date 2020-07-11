export default class AskAgainLaterResponse {
  constructor() {
    this.randomHour
  }
  getAnswer() {
    const randomHour = Math.floor(Math.random() * 13) + 1
    this.randomHour = randomHour
    return `Ask again in ${randomHour} hours`
  }
  getResults() {
    return {
      answer: this.getAnswer(),
      index: 4,
      randomHour: this.randomHour

    }
  }
}
