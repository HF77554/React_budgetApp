import Card from 'react-bootstrap/Card'
import {currencyFormatter} from '../utilities/Utilities'

const BudgetCard = ({name, amount, max}) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>
                    <div>{name}</div>
                    <div>{currencyFormatter.format(amount)} / {currencyFormatter.format(max)}</div>
                </Card.Title>
            </Card.Body>
        </Card>
    )
}

export default BudgetCard
