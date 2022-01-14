import React from 'react'
import './graph.css'

import PieChartDisplay from './PieChartDisplay'

import { Carousel } from 'react-bootstrap'

const PieChartCarousel = () => {
    return (
        <Carousel className='custom_carousel_div bg bg-danger'>
            <Carousel.Item>
                Test 1
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                Test 2
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default PieChartCarousel
//<PieChartDisplay />