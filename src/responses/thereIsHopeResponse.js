export default class ThereIsHopeResponse {
  getAnswer() {
    return `There is hope`
  }
  getResults() {
    return {
      answer: this.getAnswer(),
      index: 11,
    }
  }
}
