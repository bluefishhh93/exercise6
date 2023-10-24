import { useState } from "react";
import { Button, InputGroup, FormControl, Row, Col } from 'react-bootstrap';
import styles from './calculate.module.css'
import { evaluate } from 'mathjs';



function Calculate() {
    const [result, setResult] = useState('')


    const clearResult = () => {
        setResult('')
    }

    const calculateResult = () => {
        let value = evaluate(result)
        setResult(value)
    }

    const appendResult = (input) => {
        if (input === 'AC') {
            clearResult();
        } else {
            let newInput = result + input
            setResult(newInput)
        }
    }

    return (
        <div className="container border mt-5" style={{ maxWidth: '500px' }}>
            <Row>
                <input type="text" value={result} />
            </Row>
            <Row>
                <Col className="btn btn-warning" onClick={e => appendResult('+')}>+</Col>
                <Col className="btn btn-warning" onClick={e => appendResult('-')}>-</Col>
                <Col className="btn btn-warning" onClick={e => appendResult('*')}>X</Col>
                <Col className="btn btn-warning" onClick={e => appendResult('/')}>/</Col>
            </Row>
            <Row>
                <Col md={11}>
                    <Row>
                        <Col className="btn btn-outline-secondary" onClick={e => appendResult(1)}>1</Col>
                        <Col className="btn btn-outline-secondary" onClick={e => appendResult(2)}>2</Col>
                        <Col className="btn btn-outline-secondary" onClick={e => appendResult(3)}>3</Col>
                    </Row>
                    <Row>
                        <Col className="btn btn-outline-secondary" onClick={e => appendResult(4)}>4</Col>
                        <Col className="btn btn-outline-secondary" onClick={e => appendResult(5)}>5</Col>
                        <Col className="btn btn-outline-secondary" onClick={e => appendResult(6)}>6</Col>
                    </Row>
                    <Row>
                        <Col className="btn btn-outline-secondary" onClick={e => appendResult(7)}>7</Col>
                        <Col className="btn btn-outline-secondary" onClick={e => appendResult(8)}>8</Col>
                        <Col className="btn btn-outline-secondary" onClick={e => appendResult(9)}>9</Col>
                    </Row>
                    <Row>
                        <Col className="btn btn-outline-secondary" onClick={e => appendResult(0)}>0</Col>
                        <Col className="btn btn-outline-secondary" onClick={e => appendResult('.')}>.</Col>
                        <Col className="btn btn-outline-secondary" onClick={e => appendResult('AC')}>AC</Col>
                    </Row>
                </Col>

                <Col className="btn btn-primary" md={1} onClick={e => calculateResult()}>=</Col>
            </Row>
        </div>
    )
}

export default Calculate