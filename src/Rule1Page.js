import React, { useState, useEffect } from "react";

function Rule1Page() {
    const [input, setInput] = useState("");
    const [isValid, setIsValid] = useState(null);

    const checkRule1 = (str) => {
        const regex = /^(.)\w*\1$/;
        return regex.test(str);
    };

    const handleSubmit = () => {
        setIsValid(checkRule1(input));
    };

    useEffect(() => {
        document.title = "Rule 1 | Regex CHecker";
    }, []);

    return (
        <div>
            <h2 style={{ color: '#333' }}>Rule 1: String starts and ends with the same letter</h2>
            <input
                type="text"
                placeholder="Enter a string"
                value={input}
                onChange={(e) => setInput(e.target.value.replace(/[^ab]/g, ''))}
                className="input-field"
            />
            <button onClick={handleSubmit} className="check-button">Check</button>
            <div className={`message ${isValid !== null ? "" : "no-inputs-yet"}`}>
                <p style={{ color: isValid ? 'green' : 'red' }}>{isValid !== null ? (isValid ? "✅ Valid String" : "❌ Invalid String") : "🛑 Please enter a string"}</p>
            </div>
        </div>
    );
}

export default Rule1Page;
