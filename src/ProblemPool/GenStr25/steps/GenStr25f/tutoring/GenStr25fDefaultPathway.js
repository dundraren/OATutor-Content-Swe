var hints = [{id: "GenStr25f-h1", type: "hint", dependencies: [], title: "Simplification", text: "Simplify each side of the equation as much as possible."}, {id: "GenStr25f-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2m+13=25"], dependencies: ["GenStr25f-h1"], title: "Simplification", text: "Use the distributive property to simplify each side of the equation."}, {id: "GenStr25f-h3", type: "hint", dependencies: ["GenStr25f-h2"], title: "Subtraction property of equality", text: "When you subtract the same quantity from both sides of an equation, you still have equality."}, {id: "GenStr25f-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2m=12"], dependencies: ["GenStr25f-h3"], title: "Subtraction", text: "Subtract 13 from each side."}, {id: "GenStr25f-h5", type: "hint", dependencies: ["GenStr25f-h4"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality."}, {id: "GenStr25f-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["m=6"], dependencies: ["GenStr25f-h5"], title: "Division", text: "Divide 2 from each side."}, {id: "GenStr25f-h7", type: "hint", dependencies: ["GenStr25f-h6"], title: "Verification", text: "Check whether the result is a solution of the equation."}, {id: "GenStr25f-h8", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["GenStr25f-h7"], title: "Verification", text: "Check whether $$\\left(21\\right)+\\left(2\\right) \\left(\\left(6\\right)-\\left(4\\right)\\right)$$ equals 25.", choices: ["TRUE", "FALSE"]}, ]; export {hints};