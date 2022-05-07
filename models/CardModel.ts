class CardModel {
  question: string
  answer: string
  attempts: number
  isCorrect: any

  constructor(input: {
    question: string,
    answer: string
  }) {
    const { question, answer } = input
    this.question = question
    this.answer = answer
    this.attempts = 0
    this.isCorrect = undefined
  }

  getAnswer = () => {
    return this.answer
  }

  isAttempted = () => {
    return this.attempts > 0 ? true : false
  }

  isCorrectAnswer = (input: string) => {
    this.attempts = this.attempts + 1 // increase attempt by 1

    const isCorrect = this.answer === input
    this.isCorrect = isCorrect // update the questions correct state
    return isCorrect ? true : false
  }
}

export default CardModel