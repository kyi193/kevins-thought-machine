export default class BetterNotTellResponse {
  getAnswer() {
    return "Better to not say, sorry"
  }
  getResults() {
    return {
      answer: this.getAnswer(),
      index: 5
    }
  }
}
