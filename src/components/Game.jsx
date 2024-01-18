import { IconButton, Stack } from '@mui/material'
import { useQuestionStore } from '../store/useQuestionStore'
import { Question } from './Question'
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material'
import { Footer } from './Footer'

export function Game () {
  const { questions, currentQuestion, goNextQuestion, goPreviousQuestion } = useQuestionStore()
  const questionInfo = questions[currentQuestion]
  return (
    <>
      <Stack direction='row' gap={2} alignItems='center' justifyContent='center'>
        <IconButton onClick={goPreviousQuestion} disabled={currentQuestion === 0}>
          <ArrowBackIosNew />
        </IconButton>
        {currentQuestion + 1} / {questions.length}
        <IconButton onClick={goNextQuestion} disabled={currentQuestion >= questions.length - 1}>
          <ArrowForwardIos />
        </IconButton>
      </Stack>
      <Question info={questionInfo} />
      <Footer />
    </>
  )
}
