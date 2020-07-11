import AskAgainLaterResponse from './responses/askAgainResponse'
import BetterNotTellResponse from './responses/betterNotTellResponse'
import IDontKnow from './responses/iDontKnow'
import IfFanOfThisMovieBadResponse from './responses/ifFanOfThisMovieBadResponse'
import IfFanOfThisMovieGoodResponse from './responses/ifFanOfThisMovieGoodResponse'
import IfNameStartsWithResponse from './responses/ifNameStartsWithResponse'
import IfThisHeightResponse from './responses/ifThisHeightResponse'
import MaybeResponse from './responses/maybeResponse'
import NotTodayResponse from './responses/notTodayResponse'
import OnThisMonthResponse from './responses/onThisMonthResponse'
import PerhapsResponse from './responses/perhapsResponse'
import ThereIsHopeResponse from './responses/thereIsHopeResponse'
import YesResponse from './responses/yesResponse'

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
