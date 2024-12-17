import React, { useState, useEffect } from "react";

function Rule2Page() {
    const [input, setInput] = useState("");
    const [isValid, setIsValid] = useState(null);

    const checkRule2 = (str) => {
        const regex = /a(?!b)/;
        return !regex.test(str);
    };

    const handleSubmit = () => {
        setIsValid(checkRule2(input));
    };

        useEffect(() => {
            document.title = "Rule 2 | RegEx Checker";
        }, []);

    return (
        <div>
            <h2 style={{ color: '#333' }}>Rule 2: Each 'a' must be immediately followed by 'b'</h2>
            <input
                type="text"
                placeholder="Enter a string"
                value={input}
                onChange={(e) => setInput(e.target.value.replace(/[^ab]/g, ''))}
                className="input-field"
            />
            <button onClick={handleSubmit} className="check-button">Check</button>
            <div className={`result ${isValid !== null ? "" : "no-inputs-yet"}`}>
                <p style={{ color: isValid ? 'green' : 'red' }}>{isValid !== null ? (isValid ? "✅ Valid String" : "❌ Invalid String") : "🛑 Please enter a string"}</p>
            </div>
        </div>
    );
}

export default Rule2Page;
