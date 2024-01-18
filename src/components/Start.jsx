import { Button } from '@mui/material'
import { useQuestionStore } from '../store/useQuestionStore'
const LIMIT_QUESTIONS = 10

export function Start () {
  const { fetchQuestions } = useQuestionStore()
  const handleClick = () => {
    fetchQuestions(LIMIT_QUESTIONS)
  }
  return (
    <Button onClick={handleClick} variant='contained' sx={{marginTop:"15px"}}>
      Empezar
    </Button>
  )
}
