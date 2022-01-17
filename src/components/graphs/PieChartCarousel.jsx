import React from 'react'
import './graph.css'

import { useBudgets } from '../../contexts/BudgetContext';
import PieChartDisplay from './PieChartDisplay'

import { Carousel } from 'react-bootstrap'

const PieChartCarousel = () => {
    const { budgets, getBudgetExpenses } = useBudgets()

    //currently only a limited amount of colors. List should be expanded in case of extreme number of items
    const colors = ['#0275d8','#f0ad4e','#5cb85c','#5bc0de','#d9534f','#292b2c']

    //const Data = getBudgetExpenses("ba8bddb6-5c28-46d7-b577-873b0de54189").map((expense,ind) => {return ({ title:expense.description , value:expense.amount, color:colors[ind] })} )

    return (
        <Carousel className='custom_carousel_div'>
            {budgets.map(budget => {

                const currentData = getBudgetExpenses(budget.id).map((expense,ind) => {return ({ title:expense.description , value:expense.amount, color:colors[ind] })} )
                const amount = getBudgetExpenses(budget.id).reduce((total,expense) => total + expense.amount, 0)
                const remainingBudget = budget.max-amount
                const data = (remainingBudget > 0) ? [...currentData, { title:'Unused' , value:remainingBudget, color:'grey'}] : [...currentData]

                

                return(
                    <Carousel.Item>
                        <PieChartDisplay 
                            key={`12345_${budget.id}`} 
                            data={data} 
                            radius={40}
                            lineWidth={95}
                        />
                    </Carousel.Item>
                )})
            }
        </Carousel>
    )
}

export default PieChartCarousel

/*
{budgets.map(budget => {

    const currentData = getBudgetExpenses(budget.id).map((expense,ind) => {return ({ title:expense.description , value:expense.amount, color:colors[ind] })} )
    const amount = getBudgetExpenses(budget.id).reduce((total,expense) => total + expense.amount, 0)

    if (amount > budget.max) {
        const data = [
                        { title: 'One', value: 10, color: '#E38627' },
                        { title: 'Two', value: 10, color: '#C13C37' },
                        { title: 'Three', value: 10, color: '#6A2135' },
                        { title: 'four', value: 10, color: '#C13C37' }
                    ]
    } else {


    }

    return(
        <Carousel.Item>
            <PieChartDisplay 
                key={`${budget.id}_${budget.id}`} 
                name={budget.name} 
                amount={amount} 
                max={budget.max}
                label={({ dataEntry }) => dataEntry.value}
            />
        </Carousel.Item>
    )})}
*/
