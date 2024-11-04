import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const CardsContainer = () => {
    const cardData = [
        { title: 'Total Sales', total: '$4,200' },
        { title: 'New Users', total: '320' },
        { title: 'Pending Orders', total: '15' },
        { title: 'Completed Orders', total: '150' }
    ];

    return (
        <Row>
            {cardData.map((data, index) => (
                <Col md={3} key={index}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>{data.title}</Card.Title>
                            <Card.Text>{data.total}</Card.Text>
                            <Button variant="primary">View</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default CardsContainer