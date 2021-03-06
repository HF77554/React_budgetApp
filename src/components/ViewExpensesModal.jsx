import { Modal, Button, Stack } from 'react-bootstrap'
import {useBudgets, UNCATEGORIZED_BUDGET_ID} from '../contexts/BudgetContext'
import {currencyFormatter} from '../utilities/Utilities'

const ViewExpensesModal = ( { budgetId, handleClose } ) => {
    
    const { budgets, getBudgetExpenses, deleteBudget, deleteExpanse } = useBudgets()

    const expenses = getBudgetExpenses(budgetId)
    const budget = UNCATEGORIZED_BUDGET_ID === budgetId ? { name: "Uncategorized", id: UNCATEGORIZED_BUDGET_ID } : budgets.find(b => b.id === budgetId)

    return (
        <Modal show={budgetId != null} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <Stack direction="horizontal" gap={5}>
                        <div className='text-break'>Expenses - {budget?.name}</div>
                        {budgetId !== UNCATEGORIZED_BUDGET_ID && (
                        <Button
                            onClick={() => {
                            deleteBudget(budget)
                            handleClose()
                            }}
                            variant="outline-danger"
                        >
                            Delete
                        </Button>
                        )}
                    </Stack>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Stack direction="vertical" gap="3">
                    {expenses.map(expense => (
                        <Stack direction="horizontal" gap="2" key={expense.id}>
                        <div className="me-auto fs-4">{expense.description}</div>
                        <div className="fs-5">
                            {currencyFormatter.format(expense.amount)}
                        </div>
                        <Button
                            onClick={() => deleteExpanse(expense)}
                            size="sm"
                            variant="outline-danger"
                        >
                            &times;
                        </Button>
                        </Stack>
                    ))}
                </Stack>
            </Modal.Body>
        </Modal>
    )
}

export default ViewExpensesModal
