import React, { Component } from 'react';
//*************** */ style import***********
import './style/Timer.css'
import { Container, Row, Col } from 'react-bootstrap'



export default class Timer extends Component {

    state = {
        startCliked: false,
        resetCliked: false
    }

    render() {

        return (
            <Container>
                <Row className="timer-div">
                    <Col>
                        {this.props.time.hours}
                    </Col>
                    <Col className="sep">:</Col>
                    <Col>
                        {this.props.time.minutes}
                    </Col>
                    <Col className="sep">:</Col>
                    <Col>
                        {this.props.time.seconds}
                    </Col>
                    <Row className="label">
                        <Col className="hh">Hour</Col>
                        <Col className="sep">:</Col>
                        <Col className="mm">Minute</Col>
                        <Col className="sep">:</Col>
                        <Col className="ss">Second</Col>
                    </Row>
                </Row>
            </Container>


        )

    }


}

