import React from 'react';
import './App.css';
import { Card } from 'react-bootstrap'

class Cards extends React.Component {
    render() {
        return (
            <div className="cards">
                <Card>
                    <Card.Header>{this.props.header}</Card.Header>
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.text}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Cards;