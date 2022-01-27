import React from 'react'
import './graph.css'

import { useBudgets } from '../../contexts/BudgetContext';
import {percentageValue} from '../../utilities/Utilities'
import PieChartDisplay from './PieChartDisplay'

const TotalPieChart = () => {
    
    const { budgets, expenses } = useBudgets()

    const uncategorizedBudget = expenses.filter(expense => expense.budgetId = "Uncategorized").reduce((total, unBudget) => total + unBudget.amount, 0)

    const totalBudget = budgets.map(budget => budget.max).reduce((total, budget) => total + budget, 0)

    //const totalBudget = categoriesBudget+uncategorizedBudget

    //colors from which to chart colors are chosen from (limited, must expand)
    const colors = ['#0275d8','#f0ad4e','#5cb85c','#5bc0de','#d9534f','#292b2c','#0275d8','#f0ad4e','#5cb85c','#5bc0de','#d9534f','#292b2c']

    const data = budgets.map((budget, ind) => {return (
        { 
            title:budget.name.toUpperCase() , 
            value: percentageValue( {amount:budget.max, total:totalBudget}), 
            color:colors[ind]
        }
    )})

    /*
    const data = uncategorizedBudget ? dataforCategories : [...dataforCategories,
        { 
            title: 'UNCATEGORIZED', 
            value: percentageValue( {amount:uncategorizedBudget, total:totalBudget}), 
            color:'#292b2c'
        }
    ]
    */
    
    return (
        <div className='custom_carousel_div'>
            <div className='custom_carousel_item'>
                <h2>CATEGORIES</h2>
                <PieChartDisplay data={data} radius={40} />
            </div>
        </div>
    )
}

export default TotalPieChart