import React, { useState } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  const themeClass = theme === 'light' ? '' : 'dark-theme';

  return (
    <div className={`App ${themeClass}`}>
      <div className="calculator">
        <div className="display">
          <input type="text" value={input} readOnly />
          <div className="result">{result}</div>
        </div>
        <div className="buttons">
          <div className="row">
            <button onClick={() => handleButtonClick('7')}>7</button>
            <button onClick={() => handleButtonClick('4')}>4</button>
            <button onClick={() => handleButtonClick('1')}>1</button>
            <button onClick={() => handleButtonClick('0')}>0</button>
          </div>
          <div className="row">
            <button onClick={() => handleButtonClick('8')}>8</button>
            <button onClick={() => handleButtonClick('5')}>5</button>
            <button onClick={() => handleButtonClick('2')}>2</button>
            <button onClick={() => handleButtonClick('*')}>*</button>
          </div>
          <div className="row">
            <button onClick={() => handleButtonClick('9')}>9</button>
            <button onClick={() => handleButtonClick('6')}>6</button>
            <button onClick={() => handleButtonClick('3')}>3</button>
            <button onClick={() => handleButtonClick('-')}>-</button>
          </div>
          <div className="row">
            <button onClick={() => handleButtonClick('/')}>/</button>
            <button onClick={() => handleButtonClick('+')}>+</button>
            <button onClick={() => handleButtonClick('=')}>=</button>
            <button onClick={() => handleButtonClick('C')}>C</button>
          </div>
        </div>
        <div className="slider-container">
          <span className="slider-label">Theme:</span>
          <div
            className={`theme-toggle ${themeClass}`}
            onClick={toggleTheme}
          >
            <div className="slider-button"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
