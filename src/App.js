import './index.css';

import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import BudgetCard from './components/BudgetCard';

function App() {
  return (
    <Container className='my-4'>
      <Stack direction='horizontal' gap='2' className='mb-4'>
        <h1 className='me-auto'>Budget</h1>
        <Button variant='primary'>Add Budget</Button>
        <Button variant='outline-primary'>Add Expense</Button> 
      </Stack>
      <div className='custom_card_grid'>
        <BudgetCard name='Entertainment' amount={300} max={1000} gray></BudgetCard>
      </div>
    </Container>
  );
}

export default App;
