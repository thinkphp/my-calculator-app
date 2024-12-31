import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
    // State pentru a stoca valoarea curentă a calculului și valoarea afișată
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    // Funcție pentru a adăuga un caracter la input
    const handleInput = (value) => {
        setInput(input + value);
    };

    // Funcție pentru a efectua calculul
    const handleCalculate = () => {
        try {
            // Evaluează expresia matematică introdusă
            setResult(eval(input));
        } catch (error) {
            setResult('Eroare');
        }
    };

    // Funcție pentru a șterge input-ul
    const handleClear = () => {
        setInput('');
        setResult('');
    };

    return (      
        <div className="calculator">
            <div className="display">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="0"
                    readOnly
                />
                <div className="result">
                    {result !== '' && <p>Rezultatul: {result}</p>}
                </div>
            </div>
            <div className="buttons">
                <button onClick={() => handleInput('1')}>1</button>
                <button onClick={() => handleInput('2')}>2</button>
                <button onClick={() => handleInput('3')}>3</button>
                <button onClick={() => handleInput('+')}>+</button>
                <button onClick={() => handleInput('4')}>4</button>
                <button onClick={() => handleInput('5')}>5</button>
                <button onClick={() => handleInput('6')}>6</button>
                <button onClick={() => handleInput('-')}>-</button>
                <button onClick={() => handleInput('7')}>7</button>
                <button onClick={() => handleInput('8')}>8</button>
                <button onClick={() => handleInput('9')}>9</button>
                <button onClick={() => handleInput('*')}>*</button>
                <button onClick={() => handleInput('0')}>0</button>
                <button onClick={handleCalculate}>=</button>
                <button onClick={() => handleInput('/')}>/</button>
                <button onClick={handleClear}>C</button>
            </div>
        </div>
    );
}

export default Calculator;

