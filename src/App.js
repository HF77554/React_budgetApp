import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'

function App() {
  return (
    <Container>
      <Stack direction='horizontal' gap='2' className='mb-4'>
        <h1 className='me-auto'>Budget</h1>
        <Button variatn='primary'>Add Budget</Button> 
      </Stack>
    </Container>
  );
}

export default App;
