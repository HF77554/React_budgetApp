import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';



const PieChartDisplay = ({radius, data}) => {
    return ( 
        <PieChart label={({ dataEntry }) => `${dataEntry.title} (${dataEntry.value}%)`} radius={radius} data={data} labelPosition={60} segmentsShift={2} />
    )
}

export default PieChartDisplay