import React from 'react'
import './graph.css'

import PieChartCarousel from './PieChartCarousel'
import TotalPieChart from './TotalPieChart'

import { Container, Row, Col } from 'react-bootstrap'

const GraphDisplay = () => {
    return (
        <Container className='my-4 rounded bg bg-light border border-5'>
            <Row>
                <Col>
                    <TotalPieChart />
                </Col>
                <Col>
                    <PieChartCarousel />
                </Col>
            </Row>
        </Container>
    )
}

export default GraphDisplay