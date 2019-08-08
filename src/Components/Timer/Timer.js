import React from 'react';
//*************** */ style import***********
import './style/Timer.css'
import { Container, Row, Col, Button } from 'react-bootstrap'

const handlingStart = (props) => {

}


const Timer = (props) => {
    return (
        <Container>
            <Row className="timer-div">
                <Col>
                    {props.hh}
                </Col>
                <Col className="sep">:</Col>
                <Col>
                    {props.mm}
                </Col>
                <Col className="sep">:</Col>
                <Col>
                    {props.ss}
                </Col>
                <Row className="label">
                    <Col className="hh">Hour</Col>
                    <Col className="sep">:</Col>
                    <Col className="mm">Minute</Col>
                    <Col className="sep">:</Col>
                    <Col className="ss">Second</Col>
                </Row>
            </Row>
            <Row className="timer-div">
                <Col className=" button-div">
                    <Button variant="outline-primary"> Start</Button>
                </Col>
                <Col className="button-div">
                    <Button variant="outline-warning"> Reset</Button>
                </Col>
            </Row>
        </Container>
    )

}
export default Timer;
