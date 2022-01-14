import React from 'react'
import './graph.css'

import { Container, Row, Col } from 'react-bootstrap'
import PieChartCarousel from './PieChartCarousel'

const GraphDisplay = () => {
    return (
        <Container className='custom_graph_container my-4 rounded bg bg-light border border-5'>
            <PieChartCarousel />
            Other
        </Container>
    )
}

export default GraphDisplay
