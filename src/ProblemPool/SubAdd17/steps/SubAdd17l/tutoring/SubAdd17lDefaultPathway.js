var hints = [{id: "SubAdd17l-h1", type: "hint", dependencies: [], title: "Addition property of equality", text: "When you add the same quantity to both sides of an equation, you still have equality."}, {id: "SubAdd17l-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["y-3/4+3/4=3/5+3/4"], dependencies: ["SubAdd17l-h1"], title: "Addition", text: "Add $$\\frac{3}{4}$$ to each side of the equation."}, {id: "SubAdd17l-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["y=27/20"], dependencies: ["SubAdd17l-h2"], title: "Simplification", text: "Simplify the equation."}, {id: "SubAdd17l-h4", type: "hint", dependencies: ["SubAdd17l-h3"], title: "Verification", text: "Check whether the result is a solution of the equation."}, {id: "SubAdd17l-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["SubAdd17l-h4"], title: "Verification", text: "Check whether $$\\frac{27}{20}-\\frac{3}{4}$$ equals $$\\frac{3}{5}$$.", choices: ["TRUE", "FALSE"]}, ]; export {hints};