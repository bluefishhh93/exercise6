import { useState } from "react";
import { Button, InputGroup, FormControl, Row, Col } from 'react-bootstrap';
import styles from './calculate.module.css'
// import { evaluate } from 'mathjs';



function Calculate2() {
    const [result, setResult] = useState('')
    const [input, setInput] = useState()


    const clearResult = () => {
        setResult('')
    }

    const calculateResult = () => {
        let value = eval(result)
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
        <div className="container border" style={{ maxWidth: '500px' }}>
            <Row>
                <input type="text" value={result} />
            </Row>
            <Row>
                <Col md ={3}>
                    <button className="btn col-12 btn-warning" value="+" onClick={e => appendResult(e.target.value)}>+</button>
                </Col>
                <Col md ={3}>
                    <button className="btn col-12 btn-warning" value="-" onClick={e => appendResult(e.target.value)}>-</button>
                </Col>
                <Col md ={3}>
                    <button className="btn col-12 btn-warning" value="*" onClick={e => appendResult(e.target.value)}>X</button>
                </Col>
                <Col md ={3}>
                    <button className="btn col-12 btn-warning" value="/" onClick={e => appendResult(e.target.value)}>/</button>
                </Col>
            </Row>
            <Row>
                <Col md={11}>
                    <Row>
                        <Col md ={4}>
                            <button className="btn col-12" value="1" onClick={e => appendResult(e.target.value)}>1</button>
                        </Col>
                        <Col md ={4}>
                            <button className="btn col-12" value="2" onClick={e => appendResult(e.target.value)}>2</button>
                        </Col>
                        <Col md ={4}>
                            <button className="btn col-12" value="3" onClick={e => appendResult(e.target.value)}>3</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md ={4}>
                            <button className="btn col-12" value="4" onClick={e => appendResult(e.target.value)}>4</button>
                        </Col>
                        <Col md ={4}> 
                            <button className="btn col-12" value="5" onClick={e => appendResult(e.target.value)}>5</button>
                        </Col>
                        <Col md ={4}>
                            <button className="btn col-12" value="6" onClick={e => appendResult(e.target.value)}>6</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md ={4}>
                            <button className="btn col-12" value="7" onClick={e => appendResult(e.target.value)}>7</button>
                        </Col>
                        <Col md ={4}>
                            <button className="btn col-12" value="8" onClick={e => appendResult(e.target.value)}>8</button>
                        </Col>
                        <Col md ={4}>
                            <button className="btn col-12" value="9" onClick={e => appendResult(e.target.value)}>9</button>
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <button className="btn col-12" value="0" onClick={e => appendResult(e.target.value)}>0</button>
                        </Col>
                        <Col>
                            <button className="btn col-12" value="." onClick={e => appendResult(e.target.value)}>.</button>
                        </Col>
                        <Col>
                            <button className="btn col-12" value="AC" onClick={e => appendResult(e.target.value)}>AC</button>
                        </Col>
                    </Row>
                </Col>

                <Col md = {1}>
                    <button className="btn btn-primary" value="=" md={1} onClick={e => calculateResult()}>=</button>
                </Col>
            </Row>
        </div>
    )
}

export default Calculate2