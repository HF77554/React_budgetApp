import './index.css';

import { Container, Stack, Button } from 'react-bootstrap'

import BudgetCard from './components/BudgetCard'
import AddBudgetModal from './components/AddBudgetModal'

function App() {
  return (
    <>
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
    <AddBudgetModal show />
    </>
  );
}

export default App;
