var hints = [{id: "other3a-h1", type: "hint", dependencies: [], title: "Grouping", text: "This polynomial consists of 4 terms, so we will solve by grouping. Factor the first 2 terms and then factor the last 2 terms. If the factors in the parantheses are identical, we can continue the process and solve, unless more factoring is suggested.", variabilization: {}}, {id: "other3a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["m^2"], dependencies: ["other3a-h1"], title: "Factoring", text: "What can you factor out of the first 2 terms?", variabilization: {}}, {id: "other3a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-1"], dependencies: ["other3a-h2"], title: "Factoring", text: "What can you factor out of the last 2 terms?", variabilization: {}}, {id: "other3a-h4", type: "hint", dependencies: ["other3a-h3"], title: "Factoring", text: "Combine the common expressions and add the factors.", variabilization: {}}, {id: "other3a-h5", type: "hint", dependencies: ["other3a-h4"], title: "Factoring", text: "The expression can be rewritten as $$\\left(m^2-\\left(1\\right)\\right) \\left(m+\\left(1\\right)\\right)$$.", variabilization: {}}, {id: "other3a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(m^2-1)"], dependencies: ["other3a-h5"], title: "Factoring", text: "You can factor one of the expressions again. Which one?", variabilization: {}}, {id: "other3a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(m+1)*(m-1)*(m+1)"], dependencies: ["other3a-h6"], title: "Factoring", text: "What is the expression after factoring $$m^2-\\left(1\\right)$$?", variabilization: {}}, {id: "other3a-h8", type: "hint", dependencies: ["other3a-h7"], title: "Zero-Product Property", text: "Use the Zero-Product property to solve for m.", variabilization: {}}, {id: "other3a-h9", type: "hint", dependencies: ["other3a-h8"], title: "Zero-Product Property", text: "Solve for m when $$m+\\left(1\\right)=0$$", variabilization: {}}, {id: "other3a-h10", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-1"], dependencies: ["other3a-h9"], title: "Zero-Product Property", text: "What is the solution for m?", variabilization: {}}, {id: "other3a-h11", type: "hint", dependencies: ["other3a-h10"], title: "Zero-Product Property", text: "Solve for m when $$m-1=0$$.", variabilization: {}}, {id: "other3a-h12", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1"], dependencies: ["other3a-h11"], title: "Zero-Product Property", text: "What is the solution for m?", variabilization: {}}, {id: "other3a-h13", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["1,-1"], dependencies: ["other3a-h12"], title: "Solution", text: "What are the solutions?", choices: ["0,1,-1", "1,-1", "1", "0,2"], variabilization: {}}, ]; export {hints};