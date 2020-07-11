export default class IfFanOfThisMovieGoodResponse {
  constructor() {
    this.movies = ['the Lord of the Rings',
      'The Matrix',
      'Parasite',
      'Memento',
      'No Country For Old Men',
      'Back to the Future',
      'Jurassic Park',
      'The Dark Knight',
      'Inglourious Basterds',
      'Her',
      'The Shawshank Redemption',
      'Blade Runner']
    this.randomMovie
  }
  getAnswer() {
    const randomMovieIdx = Math.floor(Math.random() * this.movies.length)
    const randomMovie = this.movies[randomMovieIdx]
    this.randomMovie = randomMovie
    return `If you're a fan of ${randomMovie}, you're in luck!`
  }
  getResults() {
    return {
      answer: this.getAnswer(),
      index: 9,
      randomMovie: this.randomMovie
    }
  }
}
