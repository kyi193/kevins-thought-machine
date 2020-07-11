export default class NotTodayResponse {
  getAnswer() {
    return "Not today bud"
  }
  getResults() {
    return {
      answer: this.getAnswer(),
      index: 3
    }
  }
}
