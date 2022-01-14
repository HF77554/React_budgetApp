import React from 'react'
import './graph.css'

import PieChartCarousel from './PieChartCarousel'

const GraphDisplay = () => {
    return (
        <div className='custom_graph_container my-4 rounded bg bg-light border border-5'>
            <PieChartCarousel />
            Other
        </div>
    )
}

export default GraphDisplay
