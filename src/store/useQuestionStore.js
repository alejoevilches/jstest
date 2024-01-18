import { create } from 'zustand'
import confetti from 'canvas-confetti'
import { persist } from 'zustand/middleware'

export const useQuestionStore = create(persist((set) => {
  const questions = []
  const currentQuestion = 0
  const fetchQuestions = async (limit) => {
    const res = await fetch('http://localhost:5173/data.json')
    const data = await res.json()
    const questions = data.sort(() => Math.random() - 0.5).slice(0, limit)
    set({ questions })
  }
  const selectAnswer = (questionId, answerIndex) => {
    set((state) => {
      const { questions } = state
      const newQuestions = structuredClone(questions)
      const questionIndex = newQuestions.findIndex(q => q.id === questionId)
      const questionInfo = newQuestions[questionIndex]
      const isAnswerCorrect = questionInfo.correctAnswer === answerIndex
      if (isAnswerCorrect) confetti()
      newQuestions[questionIndex] = {
        ...questionInfo,
        isAnswerCorrect,
        userSelectedAnswer: answerIndex
      }
      return { questions: newQuestions }
    })
  }
  const goNextQuestion = () => {
    set((state) => {
      const { currentQuestion, questions } = state
      const nextQuestion = currentQuestion + 1
      if (nextQuestion < questions.length) {
        return { currentQuestion: nextQuestion }
      }
    })
  }
  const goPreviousQuestion = () => {
    set((state) => {
      const { currentQuestion } = state
      const previousQuestion = currentQuestion - 1
      if (previousQuestion >= 0) {
        return { currentQuestion: previousQuestion }
      }
    })
  }
  const resetQuestions = () => {
    set({ currentQuestion: 0, questions: [] })
  }

  return { questions, currentQuestion, fetchQuestions, selectAnswer, goNextQuestion, goPreviousQuestion, resetQuestions }
}, {
  name: 'questions'
}))
