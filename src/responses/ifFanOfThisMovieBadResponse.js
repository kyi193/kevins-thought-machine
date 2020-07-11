export default class IfFanOfThisMovieBadResponse {
  constructor() {
    this.movies = ['The Hunger Games Series',
      'Gravity',
      'Avatar (by James Cameron)',
      'Memento',
      'Catwoman',
      'Gigli',
      'Disaster Movie',
      'Movie 43',
      'The Mummy 3',
    ]
    this.randomMovie
  }
  getAnswer() {
    const randomMovieIdx = Math.floor(Math.random() * this.movies.length)
    const randomMovie = this.movies[randomMovieIdx]
    this.randomMovie = randomMovie
    return `If you thought ${randomMovie} was a good movie, then unfortunately there is no hope...`
  }
  getResults() {
    return {
      answer: this.getAnswer(),
      index: 10,
      randomMovie: this.randomMovie
    }
  }
}
