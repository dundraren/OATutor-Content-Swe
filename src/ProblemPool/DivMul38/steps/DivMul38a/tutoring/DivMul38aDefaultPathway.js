var hints = [{id: "DivMul38a-h1", type: "hint", dependencies: [], title: "Translation", text: "We need to find what we are asked to find and which sentence gives the information to find it.", variabilization: {}}, {id: "DivMul38a-h2", type: "hint", dependencies: ["DivMul38a-h1"], title: "Objective", text: "We are asked to find the cost of 1 pound of grapes.", variabilization: {}}, {id: "DivMul38a-h3", type: "hint", dependencies: ["DivMul38a-h2"], title: "Information", text: "The cost of 6 pounds is $10.74.", variabilization: {}}, {id: "DivMul38a-h4", type: "hint", dependencies: ["DivMul38a-h3"], title: "Assignment", text: "Assign a variable to what we want to find. For example, let $$c=the$$ cost of one pound.", variabilization: {}}, {id: "DivMul38a-h5", type: "hint", dependencies: ["DivMul38a-h4"], title: "Translation", text: "Translate into an equation.", variabilization: {}}, {id: "DivMul38a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["6c=10.74"], dependencies: ["DivMul38a-h5"], title: "Translation", text: "Write the equation.", variabilization: {}}, {id: "DivMul38a-h7", type: "hint", dependencies: ["DivMul38a-h6"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality.", variabilization: {}}, {id: "DivMul38a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["c=1.79"], dependencies: ["DivMul38a-h7"], title: "Division", text: "Divide both sides by 6.", variabilization: {}}, {id: "DivMul38a-h9", type: "hint", dependencies: ["DivMul38a-h8"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "DivMul38a-h10", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["DivMul38a-h9"], title: "Verification", text: "Check whether $$\\left(6\\right) \\left(1.79\\right)$$ equals 10.74.", choices: ["TRUE", "FALSE"], variabilization: {}}, {id: "DivMul38a-h11", type: "hint", dependencies: ["DivMul38a-h10"], title: "Explanation", text: "Since $$c=1.79$$, the cost of 1 pound of grapes is $1.79.", variabilization: {}}, ]; export {hints};