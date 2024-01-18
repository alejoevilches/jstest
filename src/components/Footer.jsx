import { Button } from '@mui/material'
import { useQuestionStore } from '../store/useQuestionStore'

export function Footer () {
  const { questions, resetQuestions } = useQuestionStore()
  let correct = 0
  let incorrect = 0
  let unanswered = 0
  questions.forEach((question) => {
    if (question.userSelectedAnswer === undefined) unanswered++
    else if (question.isAnswerCorrect) correct++
    else incorrect++
  })
  return (
    <footer style={{ marginTop: '16px' }}>
      <strong>Correctas: {correct} - Incorrectas: {incorrect} - No respondidas: {unanswered}</strong>
      <Button onClick={() => resetQuestions()}>
        Resetear
      </Button>
    </footer>
  )
}
