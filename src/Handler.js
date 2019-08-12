import React, { Component } from 'react'
import Timer from './Components/Timer/Timer';
import { Container, Row, Col, Button } from 'react-bootstrap';

class Handler extends Component {


    state = {

        ms: 560580,
        hours: "00",
        minutes: "00",
        seconds: "00",
        start: false,
        intervall: ''
    };



    timeConversion = (ms) => {
        (ms >= 86399000) && this.setState({ ms: 0 })
        let seconds = ms / 1000;
        this.setState({ hours: parseInt(seconds / 3600) });
        seconds = seconds % 3600;
        this.setState({ minutes: parseInt(seconds / 60) });
        this.setState({ seconds: parseInt(seconds % 60) });
    }

    countDown = () => {
        this.state.ms > 0 &&
            this.setState({
                intervall: setInterval(() => {
                    this.setState({ ms: this.state.ms - 1000 })
                    this.timeConversion(this.state.ms);
                }, 1000)
            })

    }
    onPause = () => {
        clearInterval(this.state.intervall)
    }
    startHandler = (event) => {
        event && this.setState({ start: !this.state.start })
        this.state.start ? this.countDown() : this.onPause()

    }
    stopHandler = () => {
        clearInterval(this.state.intervall);
        this.setState({ ms: 0 })
        this.timeConversion(this.state.ms)

    }





    render() {



        return (
            <Container>
                <Row>
                    <Timer time={this.state} />
                </Row>

                <Row className="timer-div">
                    <Col className=" button-div">
                        <Button variant="outline-primary" onClick={this.startHandler}> Start</Button>
                    </Col>
                    <Col className="button-div">
                        <Button variant="outline-warning" onClick={this.stopHandler}> Reset</Button>
                    </Col>
                </Row>
            </Container>
        )


    }
}

export default Handler
