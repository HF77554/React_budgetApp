import React from 'react'
import './graph.css'

import PieChartCarousel from './PieChartCarousel'
import TotalPieChart from './TotalPieChart'

import { Container, Row, Col } from 'react-bootstrap'

const GraphDisplay = () => {
    return (
        <div className='custom_graph_container my-4 rounded bg bg-light border border-5'>
            <TotalPieChart />
            <PieChartCarousel />
        </div>
    )
}

export default GraphDisplay
