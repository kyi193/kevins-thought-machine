export default class OnThisMonthResponse {
  constructor() {
    this.months = ['January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December']
    this.when = ['before', 'after']
    this.randomMonth
    this.randomWhen
  }
  getAnswer() {
    const randomMonthIdx = Math.floor(Math.random() * this.months.length)
    const randomWhenIdx = Math.floor(Math.random() * this.when.length)
    const randomMonth = this.months[randomMonthIdx]
    const randomWhen = this.when[randomWhenIdx]
    this.randomMonth = randomMonth
    this.randomWhen = randomWhen
    if (randomMonth === 'January' && randomWhen === 'before') {
      this.randomWhen = 'after'
    }
    if (randomMonth === 'December' && randomWhen === 'after') {
      this.randomWhen = 'before'
    }
    return `If you were born ${randomWhen} the month of ${randomMonth}, then yes`
  }
  getResults() {
    return {
      answer: this.getAnswer(),
      index: 6,
      randomWhen: this.randomWhen,
      randomMonth: this.randomMonth
    }
  }
}
