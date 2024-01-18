import { Container, Typography, Stack } from '@mui/material'
import { JavaScriptLogo } from './components/JavaScriptLogo'
import { Start } from './components/Start'
import { useQuestionStore } from './store/useQuestionStore'
import { Game } from './components/Game'
import './App.css'

function App () {
  const { questions } = useQuestionStore()
  console.log(questions)
  return (
    <main>
      <Container maxWidth='sm' sx={{ justifyContent: 'center' }}>
        <Stack direction='row' gap={2} alignItems='center' justifyContent='center'>
          <JavaScriptLogo />
          <Typography variant='h2' component='h1'>
            JavaScript Quiz
          </Typography>
        </Stack>
        {questions.length === 0 && <Start />}
        {questions.length > 0 && <Game />}
      </Container>
    </main>
  )
}

export default App
