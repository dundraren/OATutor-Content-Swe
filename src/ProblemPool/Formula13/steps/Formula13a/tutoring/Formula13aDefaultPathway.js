var hints = [{id: "Formula13a-h1", type: "hint", dependencies: [], title: "Identify the Unknown", text: "The formula is $$\\left(3\\right) x+\\left(2\\right) y=18$$, and we want to find y.", variabilization: {}}, {id: "Formula13a-h2", type: "hint", dependencies: ["Formula13a-h1"], title: "Substitute", text: "Since we know that $$x=4$$, we can substitute 4 for x into the equation and get $$\\operatorname{3}\\left(4\\right)+\\left(2\\right) y=18$$.", variabilization: {}}, {id: "Formula13a-h3", type: "hint", dependencies: ["Formula13a-h2"], title: "Simplify", text: "Simplifying the equation, we get $$\\left(12\\right)+\\left(2\\right) y=18$$.", variabilization: {}}, {id: "Formula13a-h4", type: "hint", dependencies: ["Formula13a-h3"], title: "Solve", text: "To solve the equation, we can start by subtracting 12 from both sides, which gives us the equation $$2y=6$$.", variabilization: {}}, {id: "Formula13a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3"], dependencies: ["Formula13a-h4"], title: "Isolate", text: "Now, we can divide both sides by 2 to isolate y. What is y?", variabilization: {}}, ]; export {hints};