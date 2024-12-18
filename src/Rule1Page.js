import React, { useState, useEffect } from "react";

function Rule1Page() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [coloredString, setColoredString] = useState("");
    const [isValid, setIsValid] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);

    const checkRule1 = (str) => {
        const regex = /^(.)\w*\1$/;
        return regex.test(str);
    };

    const handleCheck = () => {
        const valid = checkRule1(input.toLowerCase());
        setOutput(input);
        setIsValid(valid);

        if (!valid && input.length > 0) {
            const highlighted = input
                .split("")
                .map((char, index) =>
                    index === 0 || index === input.length - 1
                        ? `<span style="color: red;">${char}</span>`
                        : char
                )
                .join("");

            setColoredString(highlighted);
        } else {
            setColoredString(input);
        }
        setIsExpanded(true);
    };

    useEffect(() => {
        document.title = "Rule 1 | RegEx Checker";
    }, []);

    useEffect(() => {
        if (input === '') setIsExpanded(false);
    }, [input]);

    return (
        <div>
            <h2 style={{ color: "#333" }}>
                Rule 1: String starts and ends with the same letter
            </h2>
            <input
                type="text"
                placeholder="Enter a string"
                value={input}
                onChange={(e) => setInput(e.target.value.replace(/[^abAB]/g, ""))}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') handleCheck();
                    if (e.key === 'Escape') {
                        setIsExpanded(false);
                        setInput("");
                    }
                }}
                className="input-field"
            />
            <button onClick={handleCheck} className="check-button">
                Check
            </button>
            <div
                className={`result ${isValid ? "valid" : "invalid"} ${isExpanded ? "expand" : ""
                    }`}
            >
                <p>
                    {isValid === null
                        ? "🛑 Please enter a string"
                        : isValid
                            ? "✅ Accepted"
                            : "❌ Rejected"}
                </p>
                <div>
                    {output && (
                        <p
                            className="string"
                            dangerouslySetInnerHTML={{
                                __html: isValid ? output : coloredString,
                            }}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Rule1Page;
