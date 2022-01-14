import React from 'react'
import './graph.css'

import { useBudgets } from '../../contexts/BudgetContext';
import PieChartDisplay from './PieChartDisplay'

import { Carousel } from 'react-bootstrap'

const PieChartCarousel = () => {
    const { budgets, getBudgetExpenses } = useBudgets()
    console.log(budgets)
    return (
        <Carousel className='custom_carousel_div bg bg-danger'>
            {budgets.map(budget => {

                const amount = getBudgetExpenses(budget.id).reduce((total,expense) => total + expense.amount, 0)

                return(
                    <Carousel.Item>
                        <PieChartDisplay 
                            key={`'pie_chart_${budget.id}`} 
                            name={budget.name} 
                            amount={amount} 
                            max={budget.max}
                            label={({ dataEntry }) => dataEntry.value}
                        />
                    </Carousel.Item>
            )})}
            <Carousel.Item>
                <PieChartDisplay />
            </Carousel.Item>
        </Carousel>
    )
}

export default PieChartCarousel
