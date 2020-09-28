var hints = [{id: "real5a-h1", type: "hint", dependencies: [], title: "Parentheses", text: "The first step is to simplify the parentheses."}, {id: "real5a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["6"], dependencies: ["real5a-h1"], title: "Parentheses", text: "What is $$3\\times2$$?"}, {id: "real5a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["8"], dependencies: ["real5a-h1"], title: "Parentheses", text: "What is $$6+2$$?"}, {id: "real5a-h4", type: "hint", dependencies: ["real5a-h2", "real5a-h3"], title: "Exponent", text: "The next step is to simplify any exponents."}, {id: "real5a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["36"], dependencies: ["real5a-h4"], title: "Exponent", text: "What is $$6^2$$?"}, {id: "real5a-h6", type: "hint", dependencies: ["real5a-h5"], title: "Multiplication", text: "The next step is to simplify multiplication and division."}, {id: "real5a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["32"], dependencies: ["real5a-h6"], title: "Multiplication", text: "What is $$4\\times8$$?"}, {id: "real5a-h8", type: "hint", dependencies: ["real5a-h7"], title: "Subtraction", text: "The final step is to simplify addition and subtraction."}, {id: "real5a-h9", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["4"], dependencies: ["real5a-h8"], title: "Subtraction", text: "What is 36-32?"}, ]; export {hints};