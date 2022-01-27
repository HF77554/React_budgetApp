import React, { useState, useEffect } from 'react'
import './graph.css'

import { useBudgets } from '../../contexts/BudgetContext';
import {percentageValue} from '../../utilities/Utilities'
import PieChartDisplay from './PieChartDisplay'

const TotalPieChart = () => {
    const { budgets, expenses } = useBudgets()
    const [pieData, pieDataTask] = useState()

    useEffect(() => {    

        const uncategorizedExpense = expenses.filter(expense => expense.budgetId === "Uncategorized").reduce((total, unBudget) => total + unBudget.amount, 0)
        const categoriesBudget = budgets.map(budget => budget.max).reduce((total, budget) => total + budget, 0)

        const totalBudget = categoriesBudget+uncategorizedExpense

        //data without consideration for Uncategorized expenses
        const dataforCategories = budgets.map((budget, ind) => {return (
            { 
                title:budget.name.toUpperCase() , 
                value: percentageValue( {amount:budget.max, total:totalBudget}), 
                color:colors[ind]
            }
        )})

        //data is updated to mention uncategorized expenses
        const data = !uncategorizedExpense ? dataforCategories : [...dataforCategories,
            { 
                title: 'UNCATEGORIZED', 
                value: percentageValue( {amount:uncategorizedExpense, total:totalBudget}), 
                color:'#292b2c'
            }
        ]

        pieDataTask(data)
    }, [budgets, expenses]);

    const colors = ['#0275d8','#f0ad4e','#5cb85c','#5bc0de','#d9534f','#292b2c','#0275d8','#f0ad4e','#5cb85c','#5bc0de','#d9534f','#292b2c']
    
    return (
        <div className='custom_carousel_div'>
            <div className='custom_carousel_item'>
                <h2>CATEGORIES</h2>
                {pieData && <PieChartDisplay data={pieData} radius={40} />}
            </div>
        </div>
    )
}

export default TotalPieChart
