import './index.css';
import { useState } from 'react';

import { Container, Stack, Button } from 'react-bootstrap'

import BudgetCard from './components/BudgetCard'
import AddBudgetModal from './components/AddBudgetModal'
import AddExpenseModal from './components/AddExpenseModal'
import UncategorizedBudgetCard from './components/UncategorizedBudgetCard'
import ViewExpensesModal from './components/ViewExpensesModal'
import TotalBudgetCard from './components/TotalBudgetCard'
import GraphDisplay from './components/graphs/GraphDisplay';

import { useBudgets, UNCATEGORIZED_BUDGET_ID } from './contexts/BudgetContext';

function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false)
  const [viewExpensesModalBudgetId, setViewExpensesModalBudgetId] = useState()
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState()
  const { budgets, getBudgetExpenses } = useBudgets()

  function openAddExpenseModal(budgetId) {
    setShowAddExpenseModal(true)
    setAddExpenseModalBudgetId(budgetId)
  }

  return (
    <>
    <Container className='my-4'>
      <Stack direction='horizontal' gap='2' className='mb-4'>
        <h1 className='me-auto'>Budget</h1>
        <Button variant='primary' onClick={() => setShowAddBudgetModal(true)}>Add Budget</Button>
        <Button variant='outline-primary' onClick={openAddExpenseModal}>Add Expense</Button> 
      </Stack>
      <GraphDisplay />
      <div className='custom_card_grid'>
        {budgets.map(budget => {

          const amount = getBudgetExpenses(budget.id).reduce((total,expense) => total + expense.amount, 0)

          return(
            <BudgetCard 
              key={budget.id} 
              name={budget.name} 
              amount={amount} 
              max={budget.max} 
              onAddExpenseClick={()=>openAddExpenseModal(budget.id)}
              onViewExpensesClick={()=>setViewExpensesModalBudgetId(budget.id)}
            />
          ) 
          })}
          <UncategorizedBudgetCard onAddExpenseClick={openAddExpenseModal} onViewExpensesClick={() => setViewExpensesModalBudgetId(UNCATEGORIZED_BUDGET_ID)}/>
          <TotalBudgetCard />
      </div>
    </Container>

    <AddBudgetModal show={showAddBudgetModal} handleClose={() => setShowAddBudgetModal(false)} />
    <AddExpenseModal show={showAddExpenseModal} defaultBudgetId={addExpenseModalBudgetId} handleClose={() => setShowAddExpenseModal(false)} />
    <ViewExpensesModal budgetId={viewExpensesModalBudgetId} handleClose={() => setViewExpensesModalBudgetId()}/>
    </>
  );
}

export default App;
