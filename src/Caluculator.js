import React, { useState } from 'react';

const Calculator = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const handler = (e) => {
        setInput(e.target.value);
    };

    const evaluateExpression = () => {
        try {
            
            if (/^[\d+\-*/().\s]*$/.test(input)) {
                const evaluatedResult = new Function(`return ${input}`)();
                setResult(evaluatedResult);
            } else {
                setResult("Invalid input");
            }
        } catch (error) {
            setResult("Error");
        }
    };

    return (
        <div>
            <center>
                <input 
                    type="text" 
                    name="input" 
                    value={input} 
                    placeholder='enter' 
                    onChange={handler}
                />
                <br />
                <button onClick={evaluateExpression}>Calculate</button>
                <br />
                {result}
            </center>
        </div>
    );
}

export default Calculator;
