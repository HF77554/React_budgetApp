import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import { Container } from 'react-bootstrap'


const PieChartDisplay = ({name,amount,max}) => {
    return (
        <div>
            {name}{amount}{max}
            <Container className='bg bg-secondary'>
                <PieChart radius={40}
                    data={[
                        { title: 'One', value: 10, color: '#E38627' },
                        { title: 'Two', value: 10, color: '#C13C37' },
                        { title: 'Three', value: 10, color: '#6A2135' },
                    ]}
                />;
            </Container>
        </div>
    )
}

export default PieChartDisplay
