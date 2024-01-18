import { Card, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { gradientDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { useQuestionStore } from '../store/useQuestionStore'

export function Question ({ info }) {
  const { selectAnswer } = useQuestionStore()
  const createHandleClick = (answerIndex) => () => {
    selectAnswer(info.id, answerIndex)
  }
  const getBackgroundColor = (index) => {
    const { userSelectedAnswer, correctAnswer } = info
    if (userSelectedAnswer == null) return 'transparent'
    if (index !== correctAnswer && index !== userSelectedAnswer) return 'transparent'
    if (index === correctAnswer) return 'green'
    if (index === userSelectedAnswer) return 'red'
    return 'transparent'
  }
  return (
    <Card variant='outlined' sx={{ bgcolor: '#222', p: 2, textAlign: 'left', marginTop: 4 }}>
      <Typography variant='h5'>
        {info.question}
      </Typography>
      <SyntaxHighlighter language='javascript' style={gradientDark}>
        {info.code}
      </SyntaxHighlighter>
      <List sx={{ bgcolor: '#333' }} disablePadding>
        {info.answers.map((answer, index) => {
          return (
            <ListItem key={index} divider>
              <ListItemButton onClick={createHandleClick(index)} sx={{ backgroundColor: getBackgroundColor(index) }} disabled={info.userSelectedAnswer != undefined}>
                <ListItemText primary={answer} sx={{ textAlign: 'center' }} />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
    </Card>
  )
}
