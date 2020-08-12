import React from 'react';
import './App.css';
import { Card } from 'react-bootstrap'

class Cards extends React.Component {
    render() {
        return (
            <div className="cards">
                <Card>
                    <Card.Header>Featured</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Cards;