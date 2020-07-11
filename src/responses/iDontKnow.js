export default class IDontKnow {
  getAnswer() {
    return `I don't know lol`
  }
  getResults() {
    return {
      answer: this.getAnswer(),
      index: 12,
    }
  }
}
