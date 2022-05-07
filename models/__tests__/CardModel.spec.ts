import CardModel from '../CardModel'

describe('CardModel', () => {
  const mockInput = new CardModel({
    question: 'What is jest',
    answer: 'testing tool'
  })

  // first way, using describe and it statements
  describe('getAnswer()', () => { // function to test
    it('should get the saved answer', () => {
      const correctAnswer = mockInput.getAnswer() // first we mock the function
      expect(correctAnswer).toEqual('testing tool') // check that we get the answer we expect from the mock function
    })
  })

  // another way, usingn test
  test('isAttempted()', () => {
    const isAttempted = mockInput.isAttempted()
    expect(isAttempted).toBe(false)
  })

  describe('isCorrectAnswer()', () => {
    it('should return false if I enter the wrong answer', () => {
      const answer = 'random tool' // wrong answer
      const isCorrectAnswer = mockInput.isCorrectAnswer(answer)
      expect(isCorrectAnswer).toBe(false) // <-- expected result
      expect(mockInput.isCorrect).toBe(false) // this should stay fasle because I got it wrong
      expect(mockInput.attempts).toBe(1) // the attempts should be 1 because this is my first time answering the question
    })

    it('should return true if I enter the correct answer', () => {
      const answer = 'testing tool' // correct answer
      const isCorrectAnswer = mockInput.isCorrectAnswer(answer)
      expect(isCorrectAnswer).toBe(true)
      expect(mockInput.isCorrect).toBe(true) // this should be true because I got it right
      expect(mockInput.attempts).toBe(2) // the attempts should be 2 because this is my second time answering the question
    })
  })
})