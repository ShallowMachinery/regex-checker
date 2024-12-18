import React, { useState, useEffect } from "react";

function Rule2Page() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [isValid, setIsValid] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const [highlightedString, setHighlightedString] = useState("");

    const checkRule2 = (str) => {
        const regex = /a(?!b)/;
        return !regex.test(str);
    };

    const handleCheck = () => {
        const valid = checkRule2(input.toLowerCase());
        setOutput(input);
        setIsValid(valid);

        if (!valid) {
            const highlighted = input
                .split("")
                .map((char, index) => {
                    if (
                        char === "a" &&
                        (index === input.length - 1 || input[index + 1] !== "b")
                    ) {
                        return `<span style="color: red;">${char}</span>`;
                    }
                    return char;
                })
                .join("");

            setHighlightedString(highlighted);
        } else {
            setHighlightedString(input);
        }

        setIsExpanded(true);
    };

    useEffect(() => {
        document.title = "Rule 2 | RegEx Checker";
    }, []);

    useEffect(() => {
        if (input === "") setIsExpanded(false);
    }, [input]);

    return (
        <div>
            <h2 style={{ color: "#333" }}>
                Rule 2: Each 'a' must be immediately followed by 'b'
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
                className={`result ${isValid ? "valid" : "invalid"} ${
                    isExpanded ? "expand" : ""
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
                                __html: highlightedString,
                            }}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Rule2Page;
