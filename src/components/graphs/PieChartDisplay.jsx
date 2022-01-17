import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';



const PieChartDisplay = ({radius, data, lineWidth}) => {
    return (
        <p>
            {
                data ? 
                    <PieChart label={({ dataEntry }) => dataEntry.title} radius={radius} data={data} lineWidth={lineWidth}/>
                :
                'No values'
            }
        </p>
    )
}

export default PieChartDisplay

/*[
    { title: 'One', value: 10, color: '#E38627' },
    { title: 'Two', value: 10, color: '#C13C37' },
    { title: 'Three', value: 10, color: '#6A2135' },
    { title: 'four', value: 10, color: '#C13C37' }
]*/