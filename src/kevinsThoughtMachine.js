import AskAgainLaterResponse from '../src/responses/askAgainResponse'
import BetterNotTellResponse from '../src/responses/betterNotTellResponse'
import IDontKnow from '../src/responses/iDontKnow'
import IfFanOfThisMovieBadResponse from '../src/responses/ifFanOfThisMovieBadResponse'
import IfFanOfThisMovieGoodResponse from '../src/responses/ifFanOfThisMovieGoodResponse'
import IfNameStartsWithResponse from '../src/responses/ifNameStartsWithResponse'
import IfThisHeightResponse from '../src/responses/ifThisHeightResponse'
import MaybeResponse from '../src/responses/maybeResponse'
import NotTodayResponse from '../src/responses/notTodayResponse'
import OnThisMonthResponse from '../src/responses/onThisMonthResponse'
import PerhapsResponse from '../src/responses/perhapsResponse'
import ThereIsHopeResponse from '../src/responses/thereIsHopeResponse'
import YesResponse from '../src/responses/yesResponse'

export default class KevinsThoughtMachine {
  constructor() {
    this.response = [
      YesResponse,
      PerhapsResponse,
      MaybeResponse,
      NotTodayResponse,
      AskAgainLaterResponse,
      BetterNotTellResponse,
      OnThisMonthResponse,
      IfNameStartsWithResponse,
      IfThisHeightResponse,
      IfFanOfThisMovieGoodResponse,
      IfFanOfThisMovieBadResponse,
      ThereIsHopeResponse,
      IDontKnow
    ]
  }

  getResponse() {
    const randomIdx = Math.floor(Math.random() * this.response.length)
    const response = new this.response[randomIdx]
    const answer = response.getResults()
    return answer
  }
}
