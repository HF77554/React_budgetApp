import React from 'react'
import './graph.css'

import { useBudgets } from '../../contexts/BudgetContext';
import {percentageValue} from '../../utilities/Utilities'
import PieChartDisplay from './PieChartDisplay'

const TotalPieChart = () => {
    
    const { budgets, getBudgetExpenses } = useBudgets()

    const totalBudget = budgets.map(budget => budget.max).reduce((total, budget) => total + budget, 0)

    //colors from which to chart colors are chosen from (limited, must expand)
    const colors = ['#0275d8','#f0ad4e','#5cb85c','#5bc0de','#d9534f','#292b2c','#0275d8','#f0ad4e','#5cb85c','#5bc0de','#d9534f','#292b2c']

    const data = budgets.map((budget, ind) => {return (
        { 
            title:budget.name.toUpperCase() , 
            value: percentageValue( {amount:budget.max, total:totalBudget}), 
            color:colors[ind]
        }
    )})

    return (
        <div className='custom_carousel_div'>
            <div className='custom_carousel_item'>
                <h2 className='text-center'>CATEGORY BREAKDOWN</h2>
                <PieChartDisplay data={data} radius={40} />
            </div>
        </div>
    )
}

export default TotalPieChart

/*
<div className='custom_carousel_div'>
            {budgets.map(budget => {

                const max = budget.max

                const currentData = getBudgetExpenses(budget.id).map((expense,ind) => 
                    {return (
                        { 
                            title:expense.description.toUpperCase() , 
                            value: percentageValue( {amount:expense.amount, total:budget.max}) , 
                            color:colors[ind]})
                        }
                    )

                //updates data to pass to pie chart, if within budget creates a new item to add as "unused" in which to put the remaining percetange
                const data = (remainingBudget > 0) ? 
                    [...currentData, 
                        { 
                            title:'UNUSED' , 
                            value: percentageValue( {amount:remainingBudget, total:budget.max}), 
                            color:'#899290'
                        }] 
                    : [...currentData]

                return(
                    <div key={`${budget.id}_${int}`} className='custom_carousel_item'>
                        <h2 className='text-center'>{budget.name.toUpperCase()}</h2>
                        <PieChartDisplay 
                            data={data} 
                            radius={40}
                        />
                    </div>
                )})
            }
        </div>
        */